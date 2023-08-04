export const GameCategories = {
    Casual: 'Casual',
    Adventure: 'Adventure',
    Action: 'Action',
}

export const VisibilityRatings = {
    LOWEST: 1,
    LOW: 2,
    MEDIUM: 3,
    HIGH: 4,
    FEATURED: 5,
}


export const GameDescriptions = {
    ReWire: `
        Bring the system back online by rewiring the power nodes.
h
        Drag the cable around the power nodes and plug it into the socket!
        * Avoid the blades!
        * You can cross other cables by using isolators.

        The game saves progress automatically, you can come back later and continue from the last played level.
    `,

    TheLastSpartan: `
        Cut your enemies to pieces and defend your homeland! Can you, the last Spartan Hoplite of your battalion, earn an honorable death across thousands of procedurally generated battlefields?

        An arcade hack n' slash survival game set in ancient Sparta, 404 B.C.

        Use your spartan charge and ground pound attacks to stun your enemies and gain the upper hand.
    `,

    TheChromaIncident: `
        The Achromats have taken the worlds color offline! Raid their colorless lair and vanquish them all, restoring the world to it's technicolor glory. A twin-stick shooter playable with gamepad or keyboard+mouse. Huge thanks to Herebefrogs for naming the game!
    `,

    DwarvesThereAndBackAgain: `
        Dwarfs: There and Back Again is a tale of high adventure, undertaken by a company of dwarfs, in search of dragon-guarded gold, true friendship, and varieties of ale (not necessarily in that order).

        If you could go back in time, would you change things for the better? Would you resist temptation that drives your life choices? Do we create our own destiny? Those are all questions.

        The game is heavily inspired by other games. (Aren't we all.)
    `
}


export const ExternalGamesDB = [
    {
        name: '2048',
        path: '/2048',
        src: 'https://4ark.me/2048/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/2048-open-source-game.png',
        visibilityRating: VisibilityRatings.LOWEST,
    },
    {
        name: 'Clumsy Bird',
        path: '/clumsy-bird',
        src: 'http://ellisonleao.github.io/clumsy-bird/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/clumsy-bird-open-source-game.png',
        visibilityRating: VisibilityRatings.LOWEST,
    },
    {
        name: 'Hextris',
        path: '/hextris',
        src: 'https://hextris.io/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/hextris-open-source-web-game.png',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'Astray',
        path: '/astray',
        src: 'https://wwwtyro.github.io/Astray/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://superdevresources.com/wp-content/uploads/2014/09/astray-webgl-maze-game-open-source.jpg',
        visibilityRating: VisibilityRatings.LOW,
    },
    {
        name: 'Ninja vs Evil Corp',
        path: '/ninja-vs-evil-corp',
        src: 'https://js13kgames.com/games/ninja-vs-evilcorp/index.html',
        categories: [GameCategories.Action, GameCategories.Adventure],
        imagePreview: 'https://github.com/remvst/ninja/raw/master/assets/main-menu-1600x800.png',
        visibilityRating: VisibilityRatings.LOW,
    },
    {
        name: 'Ancient Beast',
        path: '/ancient-beast',
        src: 'https://play.AncientBeast.com"',
        categories: [GameCategories.Action, GameCategories.Adventure],
        imagePreview: 'https://camo.githubusercontent.com/73a15c42a2e0f49ae4b9734a8c4a197221dcedf412464ea241b9f479e6edfe84/68747470733a2f2f7261772e6769746875622e636f6d2f467265657a696e674d6f6f6e2f416e6369656e7442656173742d576562736974652f6d61737465722f6d756c74696d656469612f73637265656e73686f74732f76302e332532304461726b253230466f726573742e6a7067',
        visibilityRating: VisibilityRatings.LOW,
    },
    {
        name: 'Tower Game',
        path: '/tower-game',
        src: 'https://iamkun.github.io/tower_game/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://d3frsattnbx5l6.cloudfront.net/1539284406589-towergame1.png',
        visibilityRating: VisibilityRatings.LOW,
    },
    {
        name: 'Duck Hunt',
        path: '/duck-hunt',
        src: 'https://duckhuntjs.com/',
        categories: [GameCategories.Casual],
        imagePreview: 'https://miro.medium.com/v2/resize:fit:1000/1*CHpGqF5_AjZCgQokepOIHQ.jpeg',
        visibilityRating: VisibilityRatings.LOW,
    },
    {
        name: 'Space Block Invaders',
        path: '/space-block-invaders',
        src: 'https://js13kgames.com/games/space-block-invaders/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://js13kgames.com/games/space-block-invaders/__big.jpg',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'Spacecraft',
        path: '/spacecraft',
        src: 'https://js13kgames.com/games/spacecraft/index.html',
        categories: [GameCategories.Casual],
        imagePreview: 'https://js13kgames.com/games/spacecraft/__big.jpg',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'Dwarfs: There and Back Again',
        path: '/dwarfs-there-and-back-again',
        description: GameDescriptions.DwarvesThereAndBackAgain,
        categories: [GameCategories.Adventure],
        src: 'https://js13kgames.com/games/dwarfs-there-and-back-again/index.html',
        imagePreview: 'https://js13kgames.com/games/dwarfs-there-and-back-again/__big.jpg',
        visibilityRating: VisibilityRatings.FEATURED,
    },
    // {
    //     name: 'Highway 404',
    //     path: '/highway-404',
    //     src: 'https://js13kgames.com/games/highway-404/index.html',
    //     categories: [GameCategories.Casual],
    //     imagePreview: 'https://js13kgames.com/games/highway-404/__big.jpg',
    //     visibilityRating: VisibilityRatings.MEDIUM,
    // },
    {
        name: 'Q1K3',
        path: '/q1k3',
        src: 'https://js13kgames.com/games/q1k3/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://js13kgames.com/games/q1k3/__big.jpg',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'Minipunk',
        path: '/minipunk',
        src: 'https://js13kgames.com/games/minipunk/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://camo.githubusercontent.com/66d8476224605b9ee47de5ab604f7d735e725ad3c51581bdf191b5eb75e5f119/68747470733a2f2f636f64792e6562626572736f6e2e636f6d2f6d696e6970756e6b2f73637265656e73686f74732f70726f6367656e2d73637265656e73686f742e6a7067',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'oh, flip!',
        path: '/oh-flip',
        src: 'https://js13kgames.com/games/oh-flip/index.html',
        categories: [GameCategories.Casual],
        imagePreview: 'https://js13kgames.com/games/oh-flip/__big.jpg',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'Re-wire',
        path: '/re-wire',
        description: GameDescriptions.ReWire,
        src: 'https://js13kgames.com/games/re-wire/index.html',
        categories: [GameCategories.Casual],
        imagePreview: 'https://js13kgames.com/games/re-wire/__big.jpg',
        visibilityRating: VisibilityRatings.FEATURED,
    },
    {
        name: 'Push Back',
        path: '/push-back',
        src: 'https://js13kgames.com/games/push-back/index.html',
        categories: [GameCategories.Adventure],
        imagePreview: 'https://js13kgames.com/games/push-back/__big.jpg',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'Wander',
        path: '/wander',
        src: 'https://js13kgames.com/games/wander/index.html',
        categories: [GameCategories.Adventure],
        imagePreview: 'https://js13kgames.com/games/wander/__big.jpg',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'The Wandering Wraith',
        path: '/the-wandering-wraith',
        src: 'https://js13kgames.com/games/the-wandering-wraith/index.html',
        categories: [GameCategories.Adventure],
        imagePreview: 'https://js13kgames.com/games/the-wandering-wraith/__big.jpg',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'The Chroma Incident',
        path: '/the-chroma-incident',
        description: GameDescriptions.TheChromaIncident,
        src: 'https://js13kgames.com/games/the-chroma-incident/index.html',
        categories: [GameCategories.Adventure],
        imagePreview: 'https://js13kgames.com/games/the-chroma-incident/__big.jpg',
        visibilityRating: VisibilityRatings.FEATURED,
    },
    {
        name: 'UNDERRUN',
        path: '/underrrun',
        src: 'https://js13kgames.com/games/underrun/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://js13kgames.com/games/underrun/__big.jpg',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'The Matr13k',
        path: '/the-matr13k',
        src: 'https://js13kgames.com/games/the-matr13k/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://js13kgames.com/games/the-matr13k/__big.jpg',
        visibilityRating: VisibilityRatings.MEDIUM,
    },
    {
        name: 'Swagshot',
        path: '/swagshot',
        src: 'https://js13kgames.com/games/swagshot/index.html',
        categories: [GameCategories.Action],
        imagePreview: 'https://js13kgames.com/games/swagshot/__big.jpg',
        visibilityRating: VisibilityRatings.HIGH,
    },
    {
        name: 'The Last Spartan',
        path: '/the-last-spartan',
        src: 'https://js13kgames.com/games/the-last-spartan/index.html',
        description: GameDescriptions.TheLastSpartan,
        categories: [GameCategories.Action],
        imagePreview: 'https://github.com/ferronsays/js13k-TheLastSpartan/raw/master/media/logo_large_enlarged.png',
        visibilityRating: VisibilityRatings.FEATURED,
    },
]
