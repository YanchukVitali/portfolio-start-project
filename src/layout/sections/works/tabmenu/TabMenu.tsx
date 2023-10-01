import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                  return <ListItem key={index}>
                      <Link href="">{item}</Link>
                  </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const ListItem = styled.li`
position: relative;
`

const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  
  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    
    
  }
`