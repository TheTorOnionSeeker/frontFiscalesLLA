import React from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Marker as LeafletMarker, icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

LeafletMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function MapComponent() {
  // Crear un mapa de Oberá

  const position = {
    lat: -27.4827,
    lng: -55.1143,
  };

  /* let element = document.getElementById("map");
  const mapObera = L.map(element).setView([-27.4827, -55.1143], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(mapObera); */

  // Crear un mapa de la provincia de Misiones
  /* const mapMisiones = L.map("map-misiones").setView([-26.875, -54.405], 8); // Ajusta las coordenadas y el nivel de zoom según tus necesidades
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(mapMisiones); */

  return (
    <>
      {/* <div>
      <h1>Mapa de Oberá, Misiones</h1>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>

      <h1>Mapa de la provincia de Misiones</h1>
      <div id="map-misiones" style={{ height: "400px", width: "100%" }}></div>
    </div> */}
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution=' 
          <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; 
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        />
        <Marker position={position}>
          <Popup>
            Este es un popup. <br /> Y escribo lo que quiero.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default MapComponent;
