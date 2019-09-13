import React, { useState, useEffect} from 'react';
import axios from 'axios';

import MainCards from './MainCards';

const MainData = () => {
    const [char, setChar] = useState();
    
useEffect(() => {
      axios
        .get('https://swapi.co/people')
        .then(res => {
            console.log(res)
        })
        .catch(err => {console.log('Error Will Robinson', err)});
    },
[])





    return(
        <div>
            <MainCards/>
            <h1>happy thoughts</h1>
        </div>
    )

}

export default MainData;