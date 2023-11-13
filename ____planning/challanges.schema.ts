interface Challange {
    title: string,
    grades: string, // we will split to array with ,
    banner: string,
    price: string,
    reward: unknown
    end_date: string,
    start_date: string,
    challange_id: string
    result_date: string
    is_premium: boolean,
    description: string,
    help_media: string // we can make components
}


// it could be seperate table for winners for anything
interface Winner {
    user_id: string,
    reward_id: string
    challange_id: string,
}
