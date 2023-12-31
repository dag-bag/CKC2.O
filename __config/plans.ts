const plan_configuations = [
    {
        id: 1,
        title: "free",
        desc: "this is just description",
        price: 0,
        premium: false,
        topupDiscountPercentage: 0,
        features: [
            "Individual configuration",
            "Individual configuration",
            "Individual configuration",
        ],
        credits: 0,
        duration: 0,
        type: "free"
    },
    {
        id: 2,
        title: "basic",
        desc: "this is just description",
        price: 2000,
        topupDiscountPercentage: 20,
        premium: false,
        features: [
            "Individual configuration",
            "Individual configuration",
            "Individual configuration",
        ],
        credits: 225,
        duration: 365,
        type: "basic"
    },
    {
        id: 3,
        title: "premium",
        desc: "this is just description",
        price: 2500,
        topupDiscountPercentage: 50,
        premium: true,
        features: [
            "Individual configuration",
            "Individual configuration",
            "Individual configuration",
        ],
        credits: 300,
        duration: 365,
        type: "premium"
    },
];

export default plan_configuations