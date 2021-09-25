import React from 'react'
import style from './characterList.module.scss'
import { CharacterType } from '../../types/characterType'
import Loader from '../UI/loader/loader'
import { CharacterItem, ErrorIndicator } from '../index'

interface Props {
    characters: CharacterType[] | []
    toggleDetail: (id: number) => void
    isLoading: boolean
    error: string | null
}

const CharacterList = ({ characters, toggleDetail, isLoading, error }: Props) => {
    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <ErrorIndicator />
    }
    return (
        <section className={style.characterList}>
            {characters.map((character: CharacterType) => (
                <CharacterItem key={character.id} character={character} toggleDetail={toggleDetail} />
            ))}
        </section>
    )
}

export default CharacterList
