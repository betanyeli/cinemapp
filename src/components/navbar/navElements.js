import CustomLink from '../customLink';
import styled from 'styled-components';


export const Nav = styled.nav`
background: #4A4845;
height: 85px;
display: flex;
justify-content: center;
align-items: center;
z-index: 12;
margin: 12px;
a {
    background-color: #353637;
    color: #E5A00D;
    padding: 1rem;
    text-decoration: none;
	border-radius: 10px;
    &[aria-current] {
      background-color: #E5A00D;
      color: #353637;
	  border-radius: 10px;
    }
  }
`;

export const NavLink = styled(CustomLink)`
text-decoration: none;
cursor: pointer;
&.active {
	color: pink;
}
`;


export const NavLinkContainer = styled.div`
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
`;


export const NavMenu = styled.div`
color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin-right: -24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;


