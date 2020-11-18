import { FishList } from './FishList.js'

FishList()

// const allTheFish = useFish();

import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}