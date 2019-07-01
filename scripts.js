// define map and tile layer
const map = L.map("mapid").setView([51.505, -0.09], 13);
const tileLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

tileLayer.addTo(map);

// on init
// get url params
const urlParams = new URLSearchParams(window.location.search);
const centerString = urlParams.get("center");
const zoom = urlParams.get("zoom");

// if url params exists
// - setView on the map to the position given by the params
// else
// - add params to the url
if (centerString && zoom) {
  console.log("init", centerString, zoom);
  const center = centerString.split(",");
  map.setView(center, zoom);
} else {
  const state = {
    zoom: map.getZoom(),
    center: [map.getCenter().lat, map.getCenter().lng]
  };

  window.history.replaceState(
    state,
    "map",
    `?zoom=${state.zoom}&center=${state.center}`
  );
}

let preventMoveend = false;

// when the user click the back / next button of the browser
// sets the position on the map
window.onpopstate = function(event) {
  console.log("setView", event.state.center, event.state.zoom);
  preventMoveend = true;
  map.setView(event.state.center, event.state.zoom);
};

// when the map moves
// if the event is triggered by the back / next button
//  - don't update the url
// else
// - update the url query params with zoom and center
map.on("moveend", () => {
  console.log("moveend", preventMoveend);
  if (preventMoveend) {
    preventMoveend = false;
  } else {
    const state = {
      zoom: map.getZoom(),
      center: [map.getCenter().lat, map.getCenter().lng]
    };

    window.history.pushState(
      state,
      "map",
      `?zoom=${state.zoom}&center=${state.center}`
    );
  }
});
