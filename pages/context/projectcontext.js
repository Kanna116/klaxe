import { createContext } from "react";

export async function getServerSideProps() {
    return {
        props: {},
    };
}

const ProjectContext = createContext()

export default ProjectContext