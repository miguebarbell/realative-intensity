import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div``;
export const Documentation = () => {
    return (
        <Container>
            Documentation component
            <Link to="/about">About</Link>
        </Container>
    )
};
// https://en.wikipedia.org/wiki/One-repetition_maximum
