import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: black;
    margin-bottom: 2rem;
`

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 4rem;
`

const StyledLi = styled.li`
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem;

`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    &.active{
        color: pink;
    }
    
`

export {StyledNav, StyledUl, StyledLi, StyledLink}