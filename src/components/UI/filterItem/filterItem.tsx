import React from 'react';
import style from "./filterItem.module.scss"
import {FilterType} from "../../../types/filterType";
import InputRadio from "../inputRadio/inputRadio";

interface IProps {
    filter: FilterType,
    toggleFilter: any
}

const FilterItem = ({filter, toggleFilter}: IProps) => {
    return (
        <div
            key={filter.id}
            className={style.filterItem}
        >
            <p
                className={style.filterItem__title}
            >
                {filter.title}
            </p>
            <ul className={style.filterItem__items}>{filter.values.map(item => (
                <li key={item} className={style.filterItem__item}>
                    <InputRadio
                        id={filter.id}
                        title={filter.title}
                        value={item}
                        nameField={filter.nameField}
                        toggleFilter={toggleFilter}
                    />
                    <label htmlFor={item + filter.id}>{item}</label>
                </li>
            ))}</ul>
        </div>
    );
};

export default FilterItem;