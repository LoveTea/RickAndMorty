import React, {useCallback, useEffect, useState} from 'react';
import "./App.css"
import {CharacterType} from "./types/characterType";
import {getAll, getById} from "./services/characterService";
import CharacterList from "./components/characterList/characterList";
import CharacterForm from "./components/characterForm/characterForm";
import Modal from "./components/modal/Modal";
import CharacterDetail from "./components/characterDetail/characterDetail";
import Pagination from "./components/pagination/pagination";

const App = () => {
    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [isCharactersLoading, setIsCharactersLoading] = useState<boolean>(false)
    const [charactersError, setCharactersError] = useState<string | null>(null)
    const [character, setCharacter] = useState<CharacterType>({} as CharacterType)
    const [characterError, setCharacterError] = useState<string | null>(null)
    const [isCharacterLoading, setIsCharacterLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    const [page, setPage] = useState(1)
    const [searchInput, setSearchInput] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [pageCount, setPageCount] = useState(1)
    const [filterFields, setFilterFields] = useState({
            name: '',
            status: '',
            species: '',
            type: '',
            gender: ''
        }
    )

    const genders = React.useMemo(() => [...new Set(characters.map(c => c.gender) )], [characters])
    const status = React.useMemo(() => [...new Set(characters.map(c => c.status) )], [characters])
    const species = React.useMemo(() => [...new Set(characters.map(c => c.species) )], [characters])
    const type = React.useMemo(() => [...new Set(characters.map(c => c.type) )], [characters])


    const filters = React.useMemo(() => {
        return [
            {id: 1, title: "Gender", nameField: "gender", values: genders},
            {id: 2, title: "Status", nameField: "status", values: status},
            {id: 3, title: "Species", nameField: "species", values: species},
            {id: 4, title: "Type", nameField: "type", values: type},
        ]
    }, [genders, status, species, type])

    useEffect(() => {
        setIsCharactersLoading(true)
        getAll(filterFields.name, filterFields.gender, filterFields.type, filterFields.species, filterFields.status, page)
            .then(({data}) => {
                setPageCount(data.info.pages)
                setCharacters(data.results)
            })
            .catch((e) => {
                setCharactersError(e.message)
            })
            .finally(() => {
                setIsCharactersLoading(false)
            })

    }, [filterFields.name, filterFields.gender, filterFields.type, filterFields.species, filterFields.status, page])

    const toggleDetail = useCallback((id: number) => {
        setIsCharacterLoading(true)
        getById(id)
            .then(({data}) => {
                setCharacter(data)
            })
            .then(() => {
                setShowModal(true)
            })
            .catch((e) => {
                setCharacterError(e.message)
            })
            .finally(() => {
                setIsCharacterLoading(false)
            })
    }, [])

    const toggleFilter = useCallback((field: string, value: string) => {
        setFilterFields(prevState => {
            return {
                ...prevState,
                [field]: value,
            }
        })
        setPage(1)
    }, [])

    const submitHandler = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        setSearchInput("")
        setFilterFields(prevState => {
            return {
                ...prevState,
                name: searchInput
            }
        })
        setPage(1)
    }, [searchInput])

    const resetForm = useCallback(() => {
        setFilterFields({
            name: '',
            status: '',
            species: '',
            type: '',
            gender: ''
        })
        setPage(1)
    }, [])

    const toggleShowFilters = useCallback(() => {
        setShowFilters(prevState => !prevState)
    }, [])

    const searchFieldChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }, [])

    const PageChangeHandler = useCallback((page: number) => {
        setPage(page)
    }, [])

    return (
        <div className="container">
            <CharacterForm
                submitHandler={submitHandler}
                filters={filters}
                toggleFilter={toggleFilter}
                searchInput={searchInput}
                showFilters={showFilters}
                toggleShowFilters={toggleShowFilters}
                resetForm={resetForm}
                searchFieldChangeHandler={searchFieldChangeHandler}
            />
            <CharacterList
                characters={characters}
                toggleDetail={toggleDetail}
                isLoading={isCharactersLoading}
                error={charactersError}
            />
            {
                pageCount > 1 && (
                    <Pagination
                    PageChangeHandler={PageChangeHandler}
                    pageCount={pageCount}
                />)
            }
            <Modal
                show={showModal}
                setShow={setShowModal}
            >
                <CharacterDetail
                    character={character}
                    isLoading={isCharacterLoading}
                    error={characterError}
                />
            </Modal>
        </div>
    );
};

export default App;