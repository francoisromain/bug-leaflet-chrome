# Bug with Leaflet in Chrome

We use the leaflet `moveend` event to update the url with query parameters `center` and `zoom`. When the user navigates through the browser history with the back and and next buttons, the map goes back to the positions reflected by the url.

This works, except in one case:

- in Google Chrome,
- if the user interacts with the map **only** with the mousewheel or trackpad.

The bug: if the user clicks on the back button, it will go back to the previous webpage (or blank page).

What is expected: if the user clicks on the back button, it should go back to the previous positions on the map.

---

To reproduce the bug, check this page: [francoisromain.github.io/bug-leaflet-chrome](https://francoisromain.github.io/bug-leaflet-chrome).

---

[Issue on Github](https://github.com/Leaflet/Leaflet/issues/6712)
