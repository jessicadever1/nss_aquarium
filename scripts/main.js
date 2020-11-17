import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

const allTheFish = useFish();

for (const fishObject of allTheFish) {
    // console.log("one fish?", fishObject)
    const fishHTML = Fish(fishObject)
    console.log(fishHTML)
}