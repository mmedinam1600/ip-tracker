import Map, {Source, Layer} from "react-map-gl";
import {useState} from "react";
import GeoJSON from "GeoJSON";


interface viewStateInterface {
  longitude: number;
  latitude: number;
  bearing?: number;
  padding?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
  pitch?: number;
  zoom?: number;
}

const TOKEN = 'pk.eyJ1IjoiZWxjYXBpcHJpY2UiLCJhIjoiY2tiMTFjcDZ3MGZsZzJzbjE1eXhpeW5jdyJ9.rabc11HgXoXUpT9J1stzWg';

const style = {
  //width: 600,
  height: 400,
}

function MapGL({longitude, latitude, zoom = 14}: viewStateInterface) {


  const viewStateInitial: viewStateInterface = {
    longitude,
    latitude,
    zoom
  }

  const [viewState, setViewState] = useState<viewStateInterface>(viewStateInitial);
  console.log(viewState);


  const geoJson: GeoJSON.Feature<GeoJSON.Geometry> = {
    type: "Feature",
    geometry: {
      type: "Point",
      "coordinates": [-77.0323, 38.9131]
    },
    properties: {
      "title": "Mapbox DC",
      "marker-symbol": "monument"
    }
  };

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };

  const data = {
    type: 'FeatureCollection',
    features: [{type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}, properties: []}]
  }


  return (
    <Map
      initialViewState={viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={style}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}>
      <Source id="my-data" type="geojson" data={geoJson}>
        <Layer
          id="point"
          type="circle"
          paint={{'circle-radius': 10, 'circle-color': '#007cbf'}}
        />
      </Source>
    </Map>
  );
}

export default MapGL;