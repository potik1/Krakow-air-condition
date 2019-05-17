import React, { Component } from 'react';
import './App.css';
import Map from '../Map/containers/MapContainer';
import Header from '../Header/components/Header';
import Footer from '../Footer/components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
