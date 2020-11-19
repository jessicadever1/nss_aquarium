import { mostHolyFish } from './FishDataProvider.js'
import { soldier } from './FishDataProvider.js'
import { unworthyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

export const FishList = () => {

    const contentElement = document.querySelector(".fishList")
    const holyFish = mostHolyFish()
    const soldierFish = soldier()
    const regularFish = unworthyFish()

    for (const fishObject of holyFish) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }

    for (const fishObject of soldierFish) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
        
    }
    
    for (const fishObject of regularFish) {
        const fishHTML = Fish(fishObject)
        contentElement.innerHTML += fishHTML
    }
}