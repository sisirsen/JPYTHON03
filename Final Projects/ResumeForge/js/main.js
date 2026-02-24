import { navbar } from '../components/navbar.js';
import { template } from '../components/template-card.js';
import data from '../data/templates.js'

let nav = document.getElementById('render-nav')
nav.innerHTML = navbar()

let renderArea = document.getElementById('render-templates')
renderArea.innerHTML = data.map(data => template(data.thumbnail, data.name, data.description)).join('')




