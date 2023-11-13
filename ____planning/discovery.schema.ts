interface Questions {
    theme: string
    media: string,
    user_id: string,
    question: string,
}

interface Answer {
    thumbnail: string,
    questionnaire: string, // connection with - user_id
    answerer: string,
    content: string,
    tags: string
}

// Manage Themes and Discovery Jar UI 

interface DiscoveryJar {
    background: string,
    theme_name: string,
    description: string,
    end_timestamp: string,
    start_timestamp: string,
}