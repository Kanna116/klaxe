import { useState } from 'react'
import { BsList } from "react-icons/bs"
import { IoGrid } from 'react-icons/io5'
import { PiRowsFill } from "react-icons/pi"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Connect from './components/connect'
import ProjectBigListType from './components/projectbiglisttype'
import ProjectCardType from './components/projectcardtype'
import ProjectListType from './components/projectlisttype'
import projectdata from './projectdata'

const Projects = () => {
    const [data, setData] = useState(projectdata);
    const [projects, setProjects] = useState(data);




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






    // sorting

    const [sort, setSort] = useState(null);
    if (sort === 'Ranking') {
        projects.sort((a, b) => a.ranking - b.ranking)
    }
    else if (sort === 'Date - old to new') {
        projects.sort((a, b) => a.details[3].information[0] - b.details[3].information[0])
    }
    else if (sort === 'Date - new to old') {
        projects.sort((a, b) => b.details[3].information[0] - a.details[3].information[0])
    }


    //list style
    const [listStyle, setListStyle] = useState('grid');


    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <div className='w-full h-fit py-10 flex flex-col items-center justify-center gap-5 mt-[60px]'>
                <h1 className='text-5xl capitalize font-semibold'>Our Projects</h1>
                <p className='text-2xl'>A place where you will find wonders.</p>
            </div>
            <div className='w-full h-fit flex items-center justify-between relative'>
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
                <div className='list-style-controller flex items-center gap-2 w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <span title='list style' onClick={() => setListStyle('list')} style={{ backgroundColor: listStyle === 'list' ? 'white' : 'black', color: listStyle === 'list' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><BsList /></span>
                    <span title='card style' onClick={() => setListStyle('grid')} style={{ backgroundColor: listStyle === 'grid' ? 'white' : 'black', color: listStyle === 'grid' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><IoGrid /></span>
                    <span title='bigList style' onClick={() => setListStyle('bigList')} style={{ backgroundColor: listStyle === 'bigList' ? 'white' : 'black', color: listStyle === 'bigList' ? 'black' : 'white' }} className='h-full aspect-square rounded-full p-2 border-[1px]'><PiRowsFill /></span>
                </div>
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




            </div>


            {

                //used ternary to seperate the grid style as it seeming to have a disturbance in the UI
                listStyle === 'grid' ?
                    <div className='flex w-full h-fit flex-wrap my-20 justify-between gap-y-5'>
                        {
                            projects.map((project) => <ProjectCardType key={project.id} {...project} />)
                        }
                    </div>
                    :
                    projects.map((project) => {
                        if (listStyle === 'list') {
                            return <ProjectListType key={project.id} {...project} />
                        }
                        else if (listStyle === 'bigList') {
                            return <ProjectBigListType key={project.id} {...project} />
                        }
                    })


            }
            < Connect />
            <Footer />
        </div>
    )
}

export default Projects