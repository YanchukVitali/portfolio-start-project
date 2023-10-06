import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButom>
                <span></span>
            </BurgerButom>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tabled} {
    display: none;
  }
`
const BurgerButom = styled.button`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;

  span: {
    display: block;
    width: 36px;
    height: 2px;
    color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
    }
    
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
    }
  }
`

const Link = styled.a`
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;

`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /*outline: 1px solid red;*/
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%)
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2.9px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

  }

`