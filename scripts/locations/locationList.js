import { useLocations } from './locationDataProvider.js'
import { Location } from './locations.js'

export const locationList = () => {
    const contentElement = document.querySelector(".locations")
    const allTheLocations = useLocations()

    
    for (const locationObject of allTheLocations) {
        const locationHTML = Location(locationObject)
        contentElement.innerHTML += locationHTML
    }
}