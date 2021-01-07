import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {menuData} from './data/menuData';
import {Button } from './Button';
//import Bars from './component/images/bars.svg';
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
height:50px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background:red;
`;
const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`;

const Logo=styled(Link)`
${NavLink}
font-style:italic;

`;

const MenuBars=styled(FaBars)`
 display:none;

 
@media screen and (max-width:768px){
    display:block
   
    

}
 `; 
const NavMenu= styled.div`
display:flex;
align-items:center;
margin-right:-40px;

@media screen and (max-width:768px){
    display:none
}
`

const NavMenuLink = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-itens:center;
margin-right:24px;

@media screen and (max-width:768px){
    display:none
}
`



export default function Navbar({toggle}) {
    return (
        
        <Nav>
            <Logo to="/">Eddy</Logo>
            <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index)=>(
                         <NavMenuLink to={item.link} key={index}>
                              {item.title}
                         </NavMenuLink>


                    ))}
                    </NavMenu>
                    <NavBtn>

                    <Button to="/contact" primary="true">contact us</Button>
            
                    </NavBtn>
                     
            
                
        </Nav>
    )
}
