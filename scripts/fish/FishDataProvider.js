const fishCollection = [
    {
        image: "Bruce.png",
        name: "Bruce",
        species: "Great White Shark",
        length: "72",
        location: "Great Barrier Reef",
        diet: "Not fish"
    },

    {
        image: "Flounder.png",
        name: "Flounder",
        species: "Blue Angelfish",
        length: "6",
        location: "Disney",
        diet: "Algea"
    },

    {
        image: "Ariel.png",
        name: "Ariel",
        species: "Mermaid",
        length: "61",
        location: "Disney",
        diet: "Cake"
    },

    {
        image: "Nemo.jpeg",
        name: "Nemo",
        species: "Clownfish",
        length: "3",
        location: "Unknown - He is lost",
        diet: "Algea"
    },

    {
        image: "Dory.jpeg",
        name: "Dory",
        species: "Royal Blue Tang",
        length: "5",
        location: "The Great Barrier Reef",
        diet: "Algea"
    },

    {
        image: "Marlin.jpeg",
        name: "Marlin",
        species: "Clownfish",
        length: "4",
        location: "The Great Barrier Reef",
        diet: "Algea"
    }
]

// export const useFish = () => {
//     return fishCollection.slice()
// }

// const holyFish = []
// const soldierFish = []
// const unworthyFish = []

// for (const fish of fishCollection) {
//     if (`${fish.length}` % 3 === 0) {
//         holyFish.push(fish.name)
//     }   else if (`${fish.length}` % 5 === 0) {
//         soldierFish.push(fish.name)
//     }   else {
//         unworthyFish.push(fish.name)
//     }
// }

// console.log(`The holy fish are ${holyFish}, 
// the solider fish are ${soldierFish},
//  and the unworthy fish are ${unworthyFish}`)

    const mostHolyFish = () => {
        const holyFish = []

        for (const fish of fishCollection) {
            if (`${fish.length}` % 3 === 0) {
                holyFish.push(fish.name) 
            }
        }
        return holyFish
    }

const returnValueOfMostHoly = mostHolyFish()
console.log(returnValueOfMostHoly);