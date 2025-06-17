import './style.css'
import { setupMap } from './map.js'

document.querySelector('#app').innerHTML = `
  <div id="map"></div>
`;

setupMap('map', 'AIzaSyCycnGrqhksYoCRNbZRix88ppHlXqKodEk');