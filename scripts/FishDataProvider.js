const fishCollection = [
    {
        name: "Bruce",
        species: "Great White Shark",
        length: "6 feet",
        harvestSite: "Great Barrier Reef",
        diet: "not fish",
        age: 7,
        image: "logo.png"
    },

    {
        name: "Flounder",
        species: "Blue Angelfish",
        length: "6 inches",
        harvestSite: "Disney",
        diet: "algea",
        age: 5,
        image: "logo.png"
    },

    {
        name: "Ariel",
        species: "Mermaid",
        length: "5 feet, 1 inch",
        harvestSite: "Disney",
        diet: "cake",
        age: 16,
        image: "logo.png"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}