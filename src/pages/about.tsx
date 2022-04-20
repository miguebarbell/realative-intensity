import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div``
export const About = (dark:any) => {
    return (
        <Container>
            <Link to="/">
                HOME
            </Link>
            <h1>Relative Intensity Calculator</h1>
            <h2>What solve?</h2>
            <p>Aims to help to the lifter in the calculus of the intensity in every sets.</p>
            <h2>Definitions</h2>
            <ul>
                <h3>Formulas</h3>
                <li>Epley</li>
                <li>Brzycki</li>
            </ul>
            <ul>
                <h3>Terms</h3>
                <li>Relative Instensity</li>
                <p>Definition of relative intensity</p>
                <li>Absolute Intensity</li>
                <p>Definition of absolute intensity</p>
            </ul>
        </Container>
    )
}
