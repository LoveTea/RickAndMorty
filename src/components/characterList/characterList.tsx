import React from 'react'
import style from './characterList.module.scss'
import { CharacterType } from '../../types/characterType'
import CharacterItem from '../characterItem/characterItem'
import Loader from '../UI/loader/loader'
import ErrorIndicator from '../errorIndicator/errorIndicator'

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
