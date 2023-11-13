// Live table;

interface Live {
    // listing
    thumbnail: string,
    premium: boolean,
    grades: string,
    price: number
    slug: string
    // inner part
    mentor: string,
    content: string
    duration: number,
    description: string,

    // logic building
    end_timestamp: string
    start_timestamp: string,

}


interface UpcomingLive {
    // listing
    thumbnail: string,
    premium: boolean,
    grades: string,
    price: number
    slug: string
    // inner part
    content: string
    mentor: string,
    duration: number,
    description: string,

    // logic building
    end_timestamp: string
    start_timestamp: string,
}

interface RecordedLive {
    // listing
    thumbnail: string,
    premium: boolean,
    grades: string,
    price: number
    slug: string
    // inner part
    content: string
    mentor: string,
    duration: number,
    description: string,

    // logic building
    end_timestamp: string
    start_timestamp: string,
}
