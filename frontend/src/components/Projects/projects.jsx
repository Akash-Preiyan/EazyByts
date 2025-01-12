import React, { useEffect, useState } from "react";
import "./projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error occurred while fetching projects: ", err);
      } finally {
        setLoading(false); // Always set loading to false after fetch completes
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading Projects!</div>;
  }

  return (
    <>
      <div className="project-section">
        <h1 className="project-text"><span className="highlight">PROJECTS</span></h1>
        <div className="project-div">
          {projects.map((project) => {
            return (
              <div key={project._id} className="project-card">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  {project.githubLink}
                </a>
                <p>
                  {Array.isArray(project.technologies)
                    ? project.technologies.join(", ")
                    : project.technologies}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
}
