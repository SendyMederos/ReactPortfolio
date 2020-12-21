import React from "react";
import { Paper, Container } from "@material-ui/core";
import Me from "../../Me.png";
import "./styles.css";


export  function MyCard() {
    return ( 
     <Paper elevation={5} style={{marginTop:"100px"}}>
        <div className="card">
            <div className="card-body">
                <img className="card-img-left float-left mr-3" variant="left" src={Me} alt="me" />
                <h5 className="card-title mt-4">About Me</h5>
                <p className="card-text mt-4">Full Stack Web Developer with people management experience and a business development approach.
                    I acquired a Full Stack Web Development Certificate from University of North Carolina at Charlotte
                    and graduated as an Information Technology Technician from Martires de Chile in Havana, Cuba.
                    In recent projects,  I worked as part of a team using UX and agile development methods to create
                    mobile-first applications leveraging third party APIs with a focus on performance and accessibility.
                    Among some of the technologies used HTML5, CSS,  JavaScript, MongoDB, MySQL, JQuery, Bootstrap, and React.js.
                    I am a self-motivated problem-solver with analytical and abstract thinking. These traits make me inventive and hungry to create
                    new solutions for my clients and employers.  My generosity and empathy lead me to be amiable, ensuring smooth integration in diverse teams.
                    My goal is to leave a positive footprint in this world through hard work while uplifting others’ characters and ideals with virtue and respect.
                    
                    My passion is to understand the clients’ business to either solve a problem or maximize their results.Through this, I want to create applications
                    that take businesses to their next level.</p>
             </div>
        </div>  
    </Paper>
)
}

export function ContactCard () {
    return (
        <Paper elevation={5} style={{margin:"8%", width:"30%", marginLeft:"35%" }}>
            <div className="card">
                <div className="card-header text-dark bg-info">
                    <h5 className="card-title">Contact me :</h5>
                </div>
                <div className="card-body bg-secondary text-white">
                    <ul className="text-center list-inline">
                        <li><a  className="text-dark" href= "https://github.com/SendyMederos"><h4> <i class="fa fa-github-square size:5x"></i>  My GitHub </h4></a><br/></li>
                        <li><a  className="text-dark" href= "https://www.linkedin.com/in/sendy-mederos/"><h4> <i style={{backgroundColor:"#292b2c", color:"grey"}} class="fa fa-linkedin"></i>  My LinkedIn</h4></a><br/></li>
                        <li><a  className="text-dark" href= "https://docs.google.com/document/d/1sbBxRqdrDvcLAYtdaq_1yskrFwRQ2p886W3OfAW_vH0/edit"><h4><i class="fa fa-file"></i>   My Resume </h4></a><br/></li>
                    </ul>
                </div>
            </div>
        </Paper>
)
}

export  function ProjectsCard (props) {
    return ( <div className="wrapper">
            <Paper className="c" elevation={3} style={{margin:"3%", width:"25rem", height:"15rem" }}>
                <div className="card c " style={{width: "25rem"}} >    
                    <div className="card-img-title cit"> 
                        <h3 className="title"> {props.title}</h3>
                        <img className="card-img-top citop" src={props.img} alt="Card image cap"/>
                    </div>
                    <div className="card-body cb">
                       <p className="body">{props.about}</p>
                        <a href={props.github} className=" float-left body"><i class="fa fa-github-square size:5x"></i>GitHup</a>
                        <a className="float-right body"href={props.deployed}>Deployed</a>
                    </div>
                </div> 

            </Paper>
            </div>
    )
}