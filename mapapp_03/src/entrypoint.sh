#!/bin/bash

cd react-test

npm install --save deck.gl react-map-gl maplibre-gl mapbox-gl

cp ../App.js ./src

cp ../style.css ./src

yarn start
