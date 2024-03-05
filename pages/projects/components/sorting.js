import React, { useEffect, useState } from 'react'

const Sorting = ({ setProjects }) => {

    // sorting

    const [sort, setSort] = useState('');
    useEffect(() => {

        //slice is used before sort because we don't want to disturbt the original array so we make a duplicate then sort it out
        if (sort === 'Ranking') {
            setProjects(prevProjects => prevProjects.slice().sort((a, b) => a.ranking - b.ranking))
        }
        else if (sort === 'Date - old to new') {
            setProjects(prevProjects => prevProjects.slice().sort((a, b) => a.details[3].information[0] - b.details[3].information[0]))
        }
        else if (sort === 'Date - new to old') {
            setProjects(prevProjects => prevProjects.slice().sort((a, b) => b.details[3].information[0] - a.details[3].information[0]))
        }
        else {
            setProjects(prevProjects => prevProjects)
        }
    }, [sort, setProjects]);


    return (
        <div>Sort By :
            <select
                name="sorting"
                id="sorting"
                className='bg-transparent px-2 ml-5 focus:border-0 outline-0'
                onChange={(e) => setSort(e.target.value)}
            >
                <option className='text-black' value="Date - old to new">Date - old to new</option>
                <option className='text-black' value="Date - new to old">Date - new to old</option>
                <option className='text-black' value="Ranking">Ranking</option>
            </select>
        </div>
    )
}

export default Sorting