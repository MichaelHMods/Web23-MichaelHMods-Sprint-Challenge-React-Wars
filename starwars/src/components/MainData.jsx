import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {PageContainer, HeaderContainer} from './Styles';

import MainCards from './MainCards';

const MainData = () => {
    const [data, setData] = useState('');

useEffect(() => {
      axios
        .get('https://swapi.co/api/people',[])
        .then(res => {
            console.log(res.data.results)
            const results = res.data.results;
            setData(results)

        })
        .catch(err => {console.log('Error Will Robinson', err)})
    },[])

    return(
        <PageContainer>
           {data.map((stats, index) => {
               console.log('this is stats', stats)
               return(
                   <MainCards stats={stats} index={index}/>
               )
            })}
            
        </PageContainer>
        
    )

}

export default MainData;