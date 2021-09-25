import React from 'react'
import style from './characterForm.module.scss'
import FilterList from '../filterList/filterList'
import { FilterType } from '../../types/filterType'
import { Button, InputText } from '../UI'

interface Props {
    submitHandler: (e: React.FormEvent) => void
    filters: FilterType[]
    toggleFilter: (field: string, value: string) => void
    searchInput: string
    showFilters: boolean
    resetForm: () => void
    toggleShowFilters: () => void
    searchFieldChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CharacterForm = ({
    filters,
    submitHandler,
    toggleFilter,
    searchInput,
    showFilters,
    resetForm,
    toggleShowFilters,
    searchFieldChangeHandler,
}: Props) => {
    return (
        <form className={style.characterForm} onSubmit={submitHandler}>
            <div className={style.characterForm__find}>
                <InputText
                    placeholder="Type character name..."
                    value={searchInput}
                    onChange={searchFieldChangeHandler}
                />
                <Button type="submit">Find</Button>
            </div>
            {showFilters ? (
                <div className={style.characterForm__filters}>
                    <h2>Filters</h2>
                    <FilterList filters={filters} toggleFilter={toggleFilter} />
                    <Button type="reset" onClick={resetForm}>
                        Reset
                    </Button>
                </div>
            ) : null}
            <Button type="button" onClick={toggleShowFilters}>
                {showFilters ? 'close filters' : 'show filters'}
            </Button>
        </form>
    )
}

export default CharacterForm
