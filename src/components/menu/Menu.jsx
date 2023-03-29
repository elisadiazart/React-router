import { StyledNav, StyledUl, StyledLi, StyledLink } from "./styles"

const Menu = () => {
    return <StyledNav>
        <StyledUl>
            <StyledLi>
                <StyledLink to="/">Home</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink to="/explore">Explore</StyledLink>
            </StyledLi>
            <StyledLi>
                <StyledLink to="/contact">Contact</StyledLink>
            </StyledLi>
        </StyledUl>
    </StyledNav>
}

export default Menu