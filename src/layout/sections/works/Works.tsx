import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  background-color: #b3b8ec;
  min-height: 100vh;
`