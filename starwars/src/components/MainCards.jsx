import React from 'react';
import {MainContainer, CardsMain  } from './Styles';

const MainCards = props => {
    console.log()
    return(
        <MainContainer>
        <CardsMain>
            <h4>{props.name}</h4>
            
        </CardsMain> 
        </MainContainer>
       

    );
}

export default MainCards;