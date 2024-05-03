import { Search } from './modules/Search.js'
import { Flower } from './modules/Flower.js' 

// On crée un objet "app" dans la variable window
// qui va enregistrer les infos nécessaires à l' animation de la fleur
window.app = {
    resetAnimation: false,
    city: "",
    windDirection: "",
    windSpeed: ""
}

// Entrée de mon programme
new Search()
new Flower()