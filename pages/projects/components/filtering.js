import React from 'react'

const Filtering = ({ data, setProjects }) => {
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



    const handleSkillFilter = (filter) => {
        const filteredata = data.filter(item => {
            if (filter !== 'all') {
                const skillsDetail = item.details.find(detail => detail.heading === 'Skills Used');
                const skillsMatch = skillsDetail.information.includes(filter)
                return skillsMatch;
            }
            return true

        });
        setProjects(filteredata)
    }
    const handleYearFilter = (filter) => {
        const filteredata = data.filter(item => {
            if (filter !== 'all') {
                const yearsDetail = item.details.find(detail => detail.heading === 'Year Made');
                const yearMatch = yearsDetail.information.includes(filter)
                return yearMatch;
            }
            return true

        });
        setProjects(filteredata)
    }
    const handleTypeFilter = (filter) => {
        const filteredata = data.filter(item => {
            if (filter !== 'all') {
                const TypesDetail = item.details.find(detail => detail.heading === 'Type');
                const typeMatch = TypesDetail.information.includes(filter)
                return typeMatch;
            }
            return true

        });
        setProjects(filteredata)
    }



    return (
        <div>
            Filter By :
            <select
                id="skillsFilter"
                className='bg-transparent px-2 focus:border-0 outline-0 h-fit'
                onChange={e => {
                    handleSkillFilter(e.target.value)

                }}>
                <option className='text-black' value='all'>Skill</option>

                {[...allSkills].sort().map((skill, index) => <option key={index} className='text-black' value={skill}>{skill}</option>)}
            </select>
            <select
                name="typeFilter"
                id="typeFilter"
                className='bg-transparent px-2 focus:border-0 outline-0 h-fit'
                onChange={e => handleTypeFilter(e.target.value)}
            >
                <option className='text-black' value='all'>Type</option>
                {
                    [...allTypes].sort().map((type, index) => <option key={index} className='text-black' value={type}>{type}</option>)
                }
            </select>
            <select
                name="yearFilter"
                id="yearFilter"
                className='bg-transparent px-2 focus:border-0 outline-0 h-fit'
                onChange={e => handleYearFilter(e.target.value)}
            >
                <option className='text-black' value='all'>Year</option>
                {
                    [...allYears].sort().map((year, index) => <option key={index} className='text-black' value={year}>{year}</option>)
                }
            </select>
        </div>
    )
}

export default Filtering