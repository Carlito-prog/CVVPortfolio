import { projectData } from "../../staticData/projectData"
function Projects() {
    return (
        <section id='projects'>
            <h1>Projects</h1>
            <div className="projectItem-container">
                {projectData.map((project) => (
                    <div key={project.id} className="project-item">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noreferrer">Visit Website</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects