import React from 'react';
import style from "./button.module.scss"

type buttonTypes = "button" | "submit" | "reset" | undefined

interface Props {
    children: React.ReactNode,
    type:  buttonTypes,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = (props: Props) => {
    return (
        <button className={style.button} {...props}>
            {props.children}
        </button>
    );
};

export default Button;