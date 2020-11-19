import { useQuotes } from './quoteDataProvider.js'
import { Quote } from './quote.js'

export const quoteList = () => {
    const contentElement = document.querySelector(".quotes")
    const allTheQuotes = useQuotes()

    for (const quoteObject of allTheQuotes) {
        const quoteHTML = Quote(quoteObject)
        contentElement.innerHTML += quoteHTML
    }

}