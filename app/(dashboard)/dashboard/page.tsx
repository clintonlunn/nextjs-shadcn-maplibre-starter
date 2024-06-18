"use client";
import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const apiKey = process.env.NEXT_PUBLIC_BASEMAP_KEY;
const basemapEnum = "ArcGIS:Streets";


export default function page() {
  return (

    <div className="h-full w-full" >
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        // style={{ width: 600, height: 400 }}
        mapStyle={`https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`}
      // style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`,

      />
    </div >
  );
}
