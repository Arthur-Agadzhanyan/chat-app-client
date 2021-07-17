import React from "react";
import { observer } from "mobx-react-lite";
import notWithAuth from "../HOC/notWithAuth";
import { Container, Fade, Grid, Zoom } from "@material-ui/core";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignUpStyles from "../styles/singup.style";

function Home() {
    const classes = SignUpStyles()
    return (
        <Fade in={true}>
            <Grid
                className={classes.container}
                container
                direction="row"
                alignItems="center"
                justify='center'
            >
                <Zoom in={true} style={{ transitionDelay:  '500ms' }}>
                    <Grid item sm={7} md={5} lg={4} xl={3} className={classes.formContainer}>
                        <Container>
                            <SignUpForm />
                        </Container>
                    </Grid>
                </Zoom>
            </Grid>

        </Fade>
    )
}

export default observer(notWithAuth(Home))