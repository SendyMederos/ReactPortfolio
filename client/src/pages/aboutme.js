import React, { useState } from "react"
import {MyCard, ContactCard} from "../components/Cards";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Grid } from "@material-ui/core";


function Aboutme() {

    return (
        <div style={{backgroundColor:" rgba(229, 246, 250, 0.658)"}}>
            <Navbar />
            <Container>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={30}>
                        <MyCard/>
                        <ContactCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Aboutme;