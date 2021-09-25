import React from 'react'
import style from '../filterItem/filterItem.module.scss'
import { FilterType } from '../../types/filterType'
import { InputRadio } from '../UI'

interface Props {
    value: string
    item: FilterType
    toggleFilter: (field: string, value: string) => void
}

const FilterField = ({ value, toggleFilter, item }: Props) => {
    return (
        <li className={style.filterItem__item}>
            <InputRadio
                id={item.id}
                title={item.title}
                value={value}
                nameField={item.nameField}
                toggleFilter={toggleFilter}
            />
            <label htmlFor={value + item.id}>{value}</label>
        </li>
    )
}

export default React.memo(FilterField)
