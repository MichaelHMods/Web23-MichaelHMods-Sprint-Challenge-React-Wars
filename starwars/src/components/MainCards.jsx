import React from 'react';
import {MainContainer, CardsMain  } from './Styles';

const MainCards = props => {
    console.log(props.stats.name)
    return(
        <MainContainer>
        <CardsMain>
            <h4>{props.stats.name}</h4>
            <p>{props.stats.height}cm</p>
            <p>{props.stats.mass}kg</p>
            
        </CardsMain> 
        </MainContainer>
       

    );
}

export default MainCards;