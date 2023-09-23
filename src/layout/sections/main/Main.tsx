import React from 'react';
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi There</span>
                <h2>I am Svetlana Dyablo</h2>
                <h1>A Web Developer. </h1>
            </div>
            <Photo src="./../../../assets/images/photo.jpg" alt=""/>
        </div>
    );
};

export const Photo = styled.img  `
  width: 21.875rem;
  height: 26.875rem;

`

