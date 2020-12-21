import React, { useState } from "react"
import Navbar from "../components/Navbar";
import { ProjectsCard } from "../components/Cards";
import { Grid } from "@material-ui/core";
import projects from "../projects.json"
import { makeStyles } from '@material-ui/core/styles'
import Footer from "../components/Footer";



function Project() {
    const [myprojects, setmyprojects] = useState(projects)
    const useStyles = makeStyles(theme => ({
        main: {
            flexGrow: 1,
            padding: theme.spacing(2),
            backgroundColor: " rgba(229, 246, 250, 0.658)"
        }
    }))
    const classes = useStyles();
    return (

        <div className={classes.main}>

            <Navbar />
            <div className="wrapper">
                {myprojects.map((project) => (
                    
                        <ProjectsCard
                            id={project.id}
                            title={project.title}
                            img={project.image}
                            about={project.about}
                            github={project.github}
                            deployed={project.deployed}
                        />
                   
                ))}

</div>
          

            <Footer />
        </div>
    );
}

export default Project;