#!/bin/bash

cd react-test

npm install --save deck.gl react-map-gl maplibre-gl mapbox-gl

yarn add @loaders.gl/json

cp ../App.js ./src

cp ../style.css ./src

cp ../RenderLayers.js ./src

yarn start
