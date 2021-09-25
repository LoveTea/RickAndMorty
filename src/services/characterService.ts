import axios from 'axios'

export const getAll = async (
    name: string,
    gender: string,
    type: string,
    species: string,
    status: string,
    page: number
) => {
    return await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            name,
            gender,
            type,
            species,
            status,
            page,
        },
    })
}

export const getById = async (id: number) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
}
