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
    }
]

export const useFish = () => {
    return fishCollection.slice()
}