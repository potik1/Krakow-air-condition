import { Circle, Fill, Style } from 'ol/style';

export const MAP_START_POINT_WGS84 = [19.9449799, 50.0646501];

export const mapStyles = {
  clicked: new Style({
    image: new Circle({
      radius: 10,
      fill: new Fill({
        color: '#1C1F1E',
      }),
    }),
  }),
  default: new Style({
    image: new Circle({
      radius: 15,
      fill: new Fill({
        color: '#5A5E60',
      }),
    }),
  }),
};
