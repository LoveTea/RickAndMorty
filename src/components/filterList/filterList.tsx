import React from 'react'
import style from './filterList.module.scss'
import FilterItem from '../filterItem/filterItem'
import { FilterType } from '../../types/filterType'

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
