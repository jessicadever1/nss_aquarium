const fishCollection = [
    {
        image: "Bruce.png",
        name: "Bruce",
        species: "Great White Shark",
        length: "6 feet",
        location: "Great Barrier Reef",
        diet: "Not fish"
    },

    {
        image: "Flounder.png",
        name: "Flounder",
        species: "Blue Angelfish",
        length: "6 inches",
        location: "Disney",
        diet: "Algea"
    },

    {
        image: "Ariel.png",
        name: "Ariel",
        species: "Mermaid",
        length: "5 feet, 1 inch",
        location: "Disney",
        diet: "Cake"
    },

    {
        image: "Nemo.jpeg",
        name: "Nemo",
        species: "Clownfish",
        length: "3 inches",
        location: "Unknown - He is lost",
        diet: "Algea"
    },

    {
        image: "Dory.jpeg",
        name: "Dory",
        species: "Royal Blue Tang",
        length: "5 inches",
        location: "The Great Barrier Reef",
        diet: "Algea"
    },

    {
        image: "Marlin.jpeg",
        name: "Marlin",
        species: "Clownfish",
        length: "4 inches",
        location: "The Great Barrier Reef",
        diet: "Algea"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}