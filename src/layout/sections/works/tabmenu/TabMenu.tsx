import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: {tabsItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index)=>{
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
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: red solid 1px;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`

`

