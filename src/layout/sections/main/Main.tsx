import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 10vh;
  background-color: #d97186;
`


export const Photo = styled.img`
  width: 21.875rem;
  height: 26.875rem;
  object-fit: cover;
`
const MainTitle = styled.h1`
`

const Name = styled.h2`
`
