import React, {useState} from "react"
import Navbar from "../components/Navbar";
import {ProjectsCard} from "../components/Cards";
import { Container, Grid } from "@material-ui/core";
import projects from "../projects.json"

function Project() {
    const [myprojects, setmyprojects] = useState(projects)

    return (
        <div style={{backgroundColor:" rgba(229, 246, 250, 0.658)"}}>
          <Container fluid>
            <Navbar />
            <Container>
                <Grid container  direction="row" justify="center"  >
                    <Grid item xs={20} style={{marginTop:"10%", display:"inline-grid"}}>
                        <div  >
                        {myprojects.map((project) =>(
                        <ProjectsCard 
                          title={project.title}
                          img={project.image}
                          about={project.about}
                          github={project.github}
                          deployed={project.deployed}
                        />))}
                    </div>
                    </Grid>
                </Grid>
            </Container>
            </Container>

        </div>
    );
}

export default Project;