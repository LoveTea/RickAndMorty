import React from 'react';
import style from "./characterItem.module.scss"
import {CharacterType} from "../../types/characterType";

interface Props {
    character: CharacterType,
    toggleDetail: (id: number) => void
}

const CharacterItem = ({character, toggleDetail}: Props) => {
    return (
        <article
            className={style.characterItem}
            onClick={() => toggleDetail(character.id)}
        >
            <img
                className={style.characterItem__image}
                src={character.image}
                alt="character"
            />
            <p>{character.name}</p>

        </article>
    );
};

export default CharacterItem;