import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";


const items = ["Home", "Skills", "Works", "Testimony", "Contact",]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    // dont forgot delete these commit
                    {/*<MobileMenu menuItems={items}/>*/}
                </FlexWrapper>
            </Container>


        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.90);
  padding: 20px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;

`