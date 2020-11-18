const tipsCollection = [
    {
        title: "Properly Cycle The Tank",
        text: "While you might think you’re going to be able to fill a lovely glass bowl with water out of the tap and plop your new fish right into it, it’s definitely not recommended. Fill your tank with gravel, add your filter, then add water. Allow time for beneficial bacteria to populate the gravel and the filter. Use a tank starter if time does not permit. Then set your tank to maintain the proper temperature and pH for the species of fish kept and add appropriate lighting.",
        source: "Placeholder"
    },

    {
        title: "Acclimate",
        text: "Make sure your fish are conditioned to the water you’ll be using and the water temperature before adding them to the tank. This can be done by floating them in bags or gradually adding tank water to the bag. It should only take about 15 minutes to an hour to do this.",
        source: "Placeholder"
    },
    {
        title: "Ensure Plenty of Elbow Room",
        text: "Don’t over crowd your finned family members! Make sure there is no more than (roughly) 1 inch of fish per gallon of tank size. The best bet is to purchase the biggest tank your budget and your space allows. That way, you’ll have room to grow your collection if you decide that fish keeping is your thing (which it totally will be, for sure).",
        source: "Placeholder"
    },
]

export const useTips = () => {
    return tipsCollection.slice()
}