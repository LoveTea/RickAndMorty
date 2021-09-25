import React from 'react'
import style from './characterDetail.module.scss'
import { CharacterType } from '../../types/characterType'
import Loader from '../UI/loader/loader'
import { ErrorIndicator } from '../index'

interface Props {
    character: CharacterType
    isLoading: boolean
    error: string | null
}

const CharacterDetail = ({ character, isLoading, error }: Props) => {
    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <div className={style.characterDetail}>
            <div className={style.characterDetail__image}>
                <img src={character.image} className={style.characterDetail__img} alt={character.name} />
            </div>
            <p>Name: {character.name}</p>
            <p>Gender: {character.gender}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type === '' ? 'None' : character.type}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
        </div>
    )
}

export default CharacterDetail
