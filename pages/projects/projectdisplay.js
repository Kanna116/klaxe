import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Connect from './components/connect';
import DemoVideo from './components/demovideo';
import ImageCollection from './components/imagecollection';
import ProblemSolved from './components/problemsolved';
import ProjectHero from './components/projecthero';
import ProjectInfo from './components/projectinfo';
import ProjectOpinion from './components/projectopinion';

const ProjectDisplay = (project) => {
    const { title, details, problemSolved, demoVideo, collection } = project

    return (
        <>
            <Navbar />
            <ProjectHero {...project} />
            <ProjectInfo details={details} />
            <ProblemSolved problemSolved={problemSolved} />
            <DemoVideo demoVideo={demoVideo} />
            <ImageCollection collection={collection} title={title} />
            <ProjectOpinion />
            <Connect />
            <Footer />
        </>
    )
}

export default ProjectDisplay