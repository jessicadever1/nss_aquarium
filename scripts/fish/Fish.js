export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="./images/${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} inches</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
}