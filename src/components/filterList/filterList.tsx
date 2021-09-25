import React from 'react'
import style from './filterList.module.scss'
import { FilterType } from '../../types/filterType'
import { FilterItem } from '../index'

interface Props {
    filters: FilterType[]
    toggleFilter: (field: string, value: string) => void
}

const FilterList = ({ filters, toggleFilter }: Props) => {
    return (
        <div className={style.filterList}>
            {filters.map((filter) => (
                <FilterItem key={filter.id} filter={filter} toggleFilter={toggleFilter} />
            ))}
        </div>
    )
}

export default FilterList
