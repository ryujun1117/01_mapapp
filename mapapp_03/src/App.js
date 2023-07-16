import React from 'react';
import MapGL from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

const App: React.FC = () => {
  const initialViewState = {
    longitude: 139.68786,
    latitude: 35.68355,
    zoom: 16,
  };

  return (
    <div className="App">
      <MapGL
        initialViewState={initialViewState}
        mapLib={maplibregl}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
      />
    </div>
  );
};

export default App;

