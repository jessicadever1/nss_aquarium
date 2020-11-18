export const Location = (location) => {
    return `
        <section class="location">
            <div ><img class="location__img" src="./images/${location.image}"/></div>
            <div class="location__name"><a href="https://greatbarrierreef.com.au/which-reef-is-best/"><h2>${location.name}</h2></a></div> 
            <div class="location__description"><p>${location.description}</p></div>
        </section>
    `
}