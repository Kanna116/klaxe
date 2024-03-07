import { useState } from 'react';
import projectsdata from '../data/projectsdata';
import ProjectContext from './projectcontext';

const ProjectState = (props) => {
    const [allProjects, setAllProjects] = useState(projectsdata);


    return (
        <>
            <ProjectContext.Provider value={{ allProjects }}>
                {props.children}
            </ProjectContext.Provider>

        </>
    )
}

export default ProjectState