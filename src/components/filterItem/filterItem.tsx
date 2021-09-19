import React from 'react';
import style from "./filterItem.module.scss"
import {FilterType} from "../../types/filterType";
import FilterField from "../filterField/filterField";

interface Props {
    filter: FilterType,
    toggleFilter: (field: string, value: string) => void
}

const FilterItem = ({filter, toggleFilter}: Props) => {
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
            <ul className={style.filterItem__items}>{filter.values.map(value => (
                <FilterField
                    key={value}
                    item={filter}
                    value={value}
                    toggleFilter={toggleFilter}
                />
            ))}</ul>
        </div>
    );
};

export default React.memo(FilterItem, (prevProps, nextProps) => {
    return prevProps.filter === nextProps.filter
});