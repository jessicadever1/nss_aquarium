import { useTips } from './TipsDataProvider.js'
import { Tips } from './Tips.js'

export const TipsList = () => {
    
    const contentElement = document.querySelector(".tip")
    const allTheTips = useTips()

    
    for (const tipObject of allTheTips) {
        const tipsHTML = Tips(tipObject)
        contentElement.innerHTML += tipsHTML
    }
}