import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, View, Feature } from 'ol';
import { Point } from 'ol/geom';
import { Select } from 'ol/interaction';
import { Vector as VectorLayer, Tile as TileLayer } from 'ol/layer';
import { OSM, Vector } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Circle, Fill, Style } from 'ol/style';
import {
  MAP_START_POINT_WGS84,
  mapStyles,
} from '../../config/map';
import DataDisplay from '../../DataDisplay/containers/DataDisplayContainer';
import LegendList from '../../Legend/Legend';
import ErrorComponent from '../../Error/Error';
import 'ol/ol.css';
import './Map.css';
import ProgressBar from '../../libs/Progress';

const LAYER_NAME_KEY = 'layer_name';
const LAYER_NAME_STATIONS = 'layer_stations';


const LAT = MAP_START_POINT_WGS84[1];
const LON = MAP_START_POINT_WGS84[0];

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.map = {};
    this.progress = {};
    this.state = {
      address: '',
      openData: true,
    };
  }

  componentDidMount() {
    this.progress = new ProgressBar(document.getElementById('loader'));
    this.map = this.createMap(fromLonLat(MAP_START_POINT_WGS84));
    const { fetchStations, fetchMeasurement } = this.props;
    const DISTANCE = this.getMaxDistanceFromMap();
    fetchStations(LAT, LON, DISTANCE);
    this.mapRegisterEvents(fetchMeasurement);
    this.featuresLayerPointerMove();
    this.featuresLayerClick();
  }

  componentWillReceiveProps(newProps) {
    const { idArray, fetchPartialData } = this.props;
    if (idArray !== newProps.idArray) {
      fetchPartialData(newProps.idArray);
    }
  }

  componentDidUpdate() {
    const { stations, partial } = this.props;
    if (stations && stations.length > 0 && partial.length > 0) {
      const stationFeatures = this.createLayerFeatures(stations);
      this.updateLayerWithFeatures(stationFeatures);
      this.createFeaturesLayers(stationFeatures);
    }
  }

  handleButton = () => { // eslint-disable-line
    const { openData } = this.state;
    this.setState({ openData: !openData });
  };

  render() { // eslint-disable-line react/sort-comp
    const { data, stations, partial } = this.props;
    const { address, openData } = this.state;

    return (
      <div>
        <div className="wrapper">
          <div id="map" className="Map">
            <div id="loader" />
          </div>
        </div>
        <LegendList />
        { typeof stations[0] === 'string' && <ErrorComponent message={stations[0]} /> }
        { typeof partial[0] === 'string' && <ErrorComponent message={partial[0]} /> }
        { data.error && <ErrorComponent message={data.error} /> }
        {
            (Object.keys(data).length > 0)
              ? (
                <DataDisplay
                  address={address}
                  openData={openData}
                  handleButton={this.handleButton}
                />
              )
              : null
          }
      </div>
    );
  }

  // MAP API
  // --------------------------------------
  // setting station color based on api data
  setColorFeatureStyle(feature) {
    const id = feature.getId();
    const { partial } = this.props;
    let colorFeature = '';

    if (!id) {
      return mapStyles.default.getFill().getColor();
    }

    partial.map((property) => { // eslint-disable-line array-callback-return
      if (property.uid === id) {
        colorFeature = property.indexes[0].color;
      }
    });
    return colorFeature;
  }

  createMap = (mapStartingPoint) => { // eslint-disable-line react/sort-comp
    // create tile layer and loader
    const tileSource = new OSM();
    tileSource.on('tileloadstart', () => {
      this.progress.addLoading();
    });

    tileSource.on('tileloadend', () => {
      this.progress.addLoaded();
    });

    tileSource.on('tileloaderror', () => {
      this.progress.addLoaded();
    });


    const tile = new TileLayer({
      source: tileSource,
    });

    // create data station layer
    const layer = new VectorLayer({
      source: new Vector({ features: [] }),
    });

    const mapView = new View({
      center: mapStartingPoint,
      zoom: 14,
    });

    layer.set(LAYER_NAME_KEY, LAYER_NAME_STATIONS);

    return new Map({
      target: 'map',
      layers: [tile, layer],
      view: mapView,
    });
  };

  // value for radius fetching data useful especially for full access api data
  getMaxDistanceFromMap = () => {
    const RADIUS_FROM_CENTER = this.map.getSize()[0] / 2;
    const CURRENT_RESOLUTION = this.map.getView().values_.resolution; // eslint-disable-line no-underscore-dangle
    return RADIUS_FROM_CENTER * CURRENT_RESOLUTION / 1000;
  };

  // create stations layer
  createLayerFeatures = stations => stations.map((station) => {
    const lat = station.location.latitude;
    const lon = station.location.longitude;
    const { address: { city, street, number }, id } = station;
    let stationAddress = '';
    (street === null && number === null)
      ? stationAddress = `${city}`
      : stationAddress = `${city} ul. ${street} ${number}`;

    const feature = new Feature({
      geometry: new Point(fromLonLat([lon, lat])),
      address: stationAddress,
    });

    feature.setId(id);
    return feature;
  });

  updateLayerWithFeatures = (features) => {
    const markerLayerSource = new Vector({
      features,
    });

    const layer = this.getLayerByName(this.map.getLayers(),
      LAYER_NAME_STATIONS);
    layer.setSource(markerLayerSource);
  };

  // create individual layer for each station
  createFeaturesLayers(features) {
    features.map((feature) => { // eslint-disable-line array-callback-return
      const featureSource = new Vector();
      featureSource.addFeature(feature);
      feature.setStyle(new Style({
        image: new Circle({
          radius: 17,
          fill: new Fill({
            color: this.setColorFeatureStyle(feature),
          }),
        }),
      }));
      const featureLayer = new VectorLayer({ source: featureSource });
      featureLayer.set(LAYER_NAME_KEY, feature.getId());
      this.map.addLayer(featureLayer);
    });
  }

  // changing cursor type when hover over a station
  featuresLayerPointerMove() {
    this.map.on('pointermove', (e) => {
      this.map.getTargetElement().style.cursor = this.map.hasFeatureAtPixel(e.pixel) ? 'pointer' : '';
    });
  }

  // changing style for clicked station
  featuresLayerClick() {
    const select = new Select();
    this.map.addInteraction(select);

    select.on('select', (e) => {
      const { selected } = e;
      selected.forEach((feature) => {
        feature.setStyle(mapStyles.clicked);
      });
    });
  }

  // fetch data for particular station
  mapRegisterEvents = (fetchMeasurement) => {
    this.map.on('click', (e) => {
      e.preventDefault();
      const iconFeature = this.map.getFeaturesAtPixel(e.pixel);
      if (iconFeature !== null) {
        const id = iconFeature[0].getId();
        const adr = iconFeature[0].get('address');
        fetchMeasurement(id);
        const { address } = this.state;
        if (adr !== address) {
          this.setState({ address: adr });
        }
      }
    });
  };

  getLayerByName = (layers, layerName) => {
    let result = null;
    layers.forEach((layer) => {
      if (layer.get(LAYER_NAME_KEY) === layerName) {
        result = layer;
      }
    });
    return result;
  };
}

MapComponent.propTypes = {
  fetchStations: PropTypes.func.isRequired,
  fetchMeasurement: PropTypes.func.isRequired,
  fetchPartialData: PropTypes.func.isRequired,
  stations: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string]),
  ),
  data: PropTypes.object,
  idArray: PropTypes.arrayOf(PropTypes.number),
  partial: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string]),
  ),
};

MapComponent.defaultProps = {
  stations: [],
  data: {},
  idArray: [],
  partial: [],

};

export default MapComponent;
