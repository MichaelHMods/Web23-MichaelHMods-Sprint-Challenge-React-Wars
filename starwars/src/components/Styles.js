import React from 'react';
import styled from 'styled-components';

const PageContainer =styled.body `
width:100%;
margin: auto;

`

const HeaderContainer =styled.div  `
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const MainContainer = styled.div `
width: 85%;
margin-left:7.5%;
display: flex;
justify-content: space-between;

`
const CardsMain = styled.div  `
width: 40%;
background: grey;
color: red;
margin: auto 5%;
`

export {PageContainer, HeaderContainer, MainContainer, CardsMain  }