# Bug with Leaflet in Chrome

We use the leaflet `moveend` event to update the url with query parameters `center` and `zoom`. When the user navigate through the browser history with the back and and next buttons, the map goes back to the positions reflected by the url.

This works fine except in one case:

- in google Chrome only,
- if the user interacts with the map **only** with the mousewheel or trackpad.

The bug: if the user clicks on the back button, it will go back to the previous webpage (or blank page) instead of the previous positions on the map.

To see a full description and reproduce the bug, check this page: [bug-leaflet-chrome](https://francoisromain.github.io/bug-leaflet-chrome).
