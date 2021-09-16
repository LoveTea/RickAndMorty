import React from 'react';
import style from "./inputText.module.scss"

interface Props {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = (props: Props) => {
    return (
        <input
            type="text"
            className={style.inputText}
            {...props}
        />
    );
};

export default InputText;