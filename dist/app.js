"use strict";
const apiUrl = 'https://api.spacetraders.io/v2/';
function fetchData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
        renderData(data);
    })
        .catch(err => console.error(err));
}
function renderData(data) {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.innerHTML = `
      <h1>${data.status}</h1>
      <p>Version: ${data.version}</p>
      <p>Description: ${data.description}</p>
      <p>Stats:</p>
      <ul>
        <li>Agents: ${data.stats.agents}</li>
        <li>Ships: ${data.stats.ships}</li>
        <li>Systems: ${data.stats.systems}</li>
        <li>Waypoints: ${data.stats.waypoints}</li>
      </ul>
    `;
    }
}
document.addEventListener('DOMContentLoaded', fetchData);
