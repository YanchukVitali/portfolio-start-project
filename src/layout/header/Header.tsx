import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";


const items = ["Home", "Skills", "Works", "Testimony", "Contact",]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #6fa26f;
  display: flex;
  justify-content: center;
`