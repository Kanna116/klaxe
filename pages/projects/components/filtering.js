import React, { useCallback, useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

const Filtering = ({ data, setProjects }) => {


    const [filters, setFilters] = useState({
        skill: 'all',
        year: 'all',
        type: 'all',
    });


    //making the options automatic based on the data
    const allSkills = new Set();
    const allYears = new Set();
    const allTypes = new Set();
    data.forEach(item => {
        const skillsDetail = item.details.find(detail => detail.heading === 'Skills Used');
        if (skillsDetail) {
            skillsDetail.information.forEach(skill => allSkills.add(skill));
        }
        const yearDetails = item.details.find(detail => detail.heading === 'Year Made')
        if (yearDetails) {
            yearDetails.information.forEach(year => allYears.add(year));
        }
        const typeDetails = item.details.find(detail => detail.heading === 'Type')
        if (typeDetails) {
            typeDetails.information.forEach(type => allTypes.add(type));
        }
    });


    const handleFilter = (filterType, value) => {
        setFilters(prevValues => ({
            ...prevValues,
            [filterType]: value,
        }))
    }

    const applyFilters = useCallback(() => {
        let filteredData = [...data];
        if (filters.skill !== 'all') {
            filteredData = filteredData.filter(item => {
                const skillsDetail = item.details.find(detail => detail.heading === 'Skills Used');
                return skillsDetail && skillsDetail.information.includes(filters.skill);
            });
        }

        if (filters.year !== 'all') {
            filteredData = filteredData.filter(item => {
                const yearDetails = item.details.find(detail => detail.heading === 'Year Made');
                return yearDetails && yearDetails.information.includes(filters.year);
            });
        }

        if (filters.type !== 'all') {
            filteredData = filteredData.filter(item => {
                const typeDetails = item.details.find(detail => detail.heading === 'Type');
                return typeDetails && typeDetails.information.includes(filters.type);
            });
        }

        setProjects(filteredData);
    }, [filters, data, setProjects]);



    // getting filtered data each time the filters are changed

    useEffect(() => {
        applyFilters();
    }, [filters, applyFilters]);





    return (
        <div className='w-fit h-full flex lg:items-center items-start justify-start gap-2 flex-col lg:flex-row'>
            Filter By :
            <select
                id="skillsFilter"
                className='bg-transparent lg:px-2 px-0 focus:border-0 outline-0 h-fit'
                onChange={e => {
                    handleFilter('skill', e.target.value)
                }}
                value={filters.skill}
            >
                <option className='text-black' value='all'>Skill</option>

                {[...allSkills].sort().map((skill, index) => <option key={index} className='text-black' value={skill}>{skill}</option>)}
            </select>
            <select
                name="typeFilter"
                id="typeFilter"
                className='bg-transparent lg:px-2 px-0 focus:border-0 outline-0 h-fit'
                onChange={e => handleFilter('type', e.target.value)}
                value={filters.type}
            >
                <option className='text-black' value='all'>Type</option>
                {
                    [...allTypes].sort().map((type, index) => <option key={index} className='text-black' value={type}>{type}</option>)
                }
            </select>
            <select
                name="yearFilter"
                id="yearFilter"
                className='bg-transparent lg:px-2 px-0 focus:border-0 outline-0 h-fit'
                onChange={e => handleFilter('year', e.target.value)}
                value={filters.year}
            >
                <option className='text-black' value='all'>Year</option>
                {
                    [...allYears].sort().map((year, index) => <option key={index} className='text-black' value={year}>{year}</option>)
                }
            </select>

            {/* filter removing button */}
            {
                (filters.skill !== 'all' || filters.year !== 'all' || filters.type !== 'all')
                &&
                <button
                    className='rounded-full border-[1px] p-2'
                    onClick={() => setFilters({
                        skill: 'all',
                        year: 'all',
                        type: 'all',
                    })}
                >
                    <span className='hidden lg:block'>
                        <VscClose />
                    </span>
                    <span className='block lg:hidden px-5 text-sm'>
                        clear all
                    </span>
                </button>
            }
        </div>
    )
}

export default Filtering