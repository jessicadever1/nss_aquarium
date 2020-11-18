const locationCollections = [

    {
        name: "Agincourt Reef",
        image: "Agincourt Reef.jpg",
        description: "Situated remotely off the coast of Port Douglas, the Agincourt reef is a collection of small “ribbon reefs”. The Agincourt offers numerous potential dive sites with a blend of channels and gardens for marine explorers to navigate. Luckily, this reef is visited by multiple tour operators showcasing the Outer Reef’s beauty."
    },

    {
        name: "Fitzroy Island",
        image: "Fitzroy Island.jpeg",
        description: "Fitzroy Island is easily accessed from Cairns and sits roughly 29km offshore of Tropical North QLD’s famous adventure hub. An actual, granite island as opposed to a coral cay, Fitzroy Island possesses largely different characteristics to several of the other popular islands in the region; it’s quite mountainous; it’s covered in rainforest; and as a result it thus offers a lot of on-island activities in which to participate in addition to its obvious reef offerings."
    },

    {
        name: "Flynn Reef",
        image: "Flynn Reef.jpeg",
        description: "Renowned for its excellent visibility and balanced mix of dive opportunities, the reef blends together a series of excellent wall dives and swimthroughs with a number of deep canyons for experienced divers and shallows for novices; as a result, there’s “something for everyone” here for those making the trek out."
    }
]

export const useLocations = () => {
    return locationCollections.slice()
}