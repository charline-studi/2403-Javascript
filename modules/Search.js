/* Ma bare de recherche : 
- Récupérer la ville renseignée par mon visiteur
- À partir du nom va aller trouver la latitude 
et la longitude correspondantes
- BONUS : Si la ville renseignée n'est pas dans la base de données
(json) elle doit indiquer l'erreur au visiteur
- BONUS : Autocompletion dans les noms de villes
- BONUS : Enregistrer les dernières recherches 
*/

class Search {

    constructor() {
        console.log('Je suis dans le constructeur')
        /* 1er temps = il sert à définir les variables, les propriétés */
        this.input = 'my input'
        /* 2nd temps = lancer les fonctions, les méthodes */
        this.init()
    }

    init() {
        /* Méthode pour lancer toutes les fonction de ma classe */
        console.log('Je suis dans l\'init')
        console.log(this.input)
    }
}

export { Search }