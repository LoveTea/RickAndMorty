interface originType {
    name: string,
    url: string
}

interface locationType {
    name: string,
    url: string
}

export interface CharacterType {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: originType,
    location: locationType,
    image: string,
    episode: string[],
    url: string,
    created: string
}