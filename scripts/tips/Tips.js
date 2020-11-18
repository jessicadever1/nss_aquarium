export const Tips = (tip) => {
    return `
    <section class="tip">
        <div class="tip__title"><h3>${tip.title}</h3></div>
        <div class="tip__text">${tip.text}</div>
        <div class="tip__source"><a href="https://www.sheknows.com/living/articles/1131322/how-to-take-care-of-pet-fish/">${tip.source}</a></div>
    </section>
    `
}