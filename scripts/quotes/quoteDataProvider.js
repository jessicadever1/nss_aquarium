const quotesCollection = [
    {
        text: "Just keep swimming!",
        author: "-Dory"
    },

    {
        text: "Fish are friends, not food!",
        author: "-Bruce"
    },

    {
        text: "I'm not a guppy!",
        author: "-Flounder"
    },

    {
        text: "I don’t see how a world that makes such wonderful things could be bad.",
        author: "-Ariel"
    },

    {
        text: "Dad, you're not gonna freak out like you did at the petting zoo, are you?",
        author: "-Nemo"
    },

    {
        text: "Look, you're really cute, but I can't understand what you're saying. Say the first thing again.",
        author: "-Marlin"
    }
]

export const useQuotes = () => {
    return quotesCollection.slice()
}