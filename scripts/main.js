import { FishList } from './fish/FishList.js'

FishList()

// const allTheFish = useFish();

import { useFish } from './fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { TipsList } from './tips/TipsList.js'

TipsList()

import { useTips } from './tips/TipsDataProvider.js'

const allTheTips = useTips()

for (const tips of allTheTips) {
    console.log(tips)
}