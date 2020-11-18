export const Tips = (tip) => {
    return `
    <section class="tip">
        <div class="tip__title">${tip.title}</div>
        <div class="tip__text">${tip.text}</div>
        <div class="tip__source">${tip.source}</div>
    </section>
    `
}