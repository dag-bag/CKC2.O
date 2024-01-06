const plan_configuations = [
    {
        id: 1,
        title: "free",
        desc: "this is just description",
        price: 0,
        premium: false,
        topupDiscountPercentage: 0,
        features: [
            "15 Welcome Credits",
            "Lifetime Free Content Acess",
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
            "225 Welcome Credits",
            "365 Days Duration",
            "20% Discount On Credits Purchase",
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
            "Premium Acess",
            "300 Welcome Acess",
            "365 Days Duration",
            "50% Discount On Credits Purchase",
        ],
        credits: 300,
        duration: 365,
        type: "premium"
    },
];

export default plan_configuations