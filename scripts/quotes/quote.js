export const Quote = (quote) => {
    return `
        <section class="quote">
            <div class="quote__text">"${quote.text}"</div>
            <div class="quote__author"><strong>${quote.author}</strong></div>
        </section>
    `
}