import React from 'react';

interface Props {
    id: number,
    title: string,
    value: string
    nameField: string,
    toggleFilter: (nameField: string, value: string) => void
}

const InputRadio = ({id, title, value, nameField, toggleFilter}: Props) => {
    return (
        <input
            type="radio"
            name={title}
            value={value}
            id={value + id}
            onChange={(e) => toggleFilter(nameField, value)}
        />
    );
};

export default InputRadio;