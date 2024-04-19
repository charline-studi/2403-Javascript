/* 
RÉCUPÉRER LES DONNÉES DE VENTS EN TEMPS RÉEL
- [x] Récupérer la direction du vent
- [x] Récupérer la vitesse du vent
- [ ] BONUS : Actualise mes données toutes les 15 minutes

https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3522&current=wind_speed_10m,wind_direction_10m&timezone=Europe%2FLondon
*/

class Wind {
    constructor(props) {
        const {lat, long} = props
        this.lat = lat
        this.long = long
        this.url = ''
        this.init()
    }
    
    init(){
        this.buildUrl()
        this.getWindData()
    }

    buildUrl() {
        const base = 'https://api.open-meteo.com/v1/forecast'
        const requiredLatitude = 'latitude=' + this.lat
        const requiredLongitude = 'longitude=' + this.long

        const params = ['wind_speed_10m', 'wind_direction_10m']
        const paramsStringList = params.join(',') 

        this.url = `${base}?${requiredLatitude}&${requiredLongitude}&current=${paramsStringList}`
    }

    getWindData() {
        fetch(this.url)
            .then(response => response.json())
            .then((data) => {
                console.log('data', data)
            })
    }
}

export { Wind }