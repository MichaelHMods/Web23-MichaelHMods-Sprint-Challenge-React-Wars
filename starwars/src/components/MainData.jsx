import React, { useState, useEffect} from 'react';
import axios from 'axios';

import MainCards from './MainCards';

const MainData = () => {
    const [data, setData] = useState(0);

useEffect(() => {
      axios
        .get('https://swapi.co/api/people',[])
        .then(res => {
            console.log(res.data.results)
            const results = res.data.results;
            setData(results)

        })
        .catch(err => {console.log('Error Will Robinson', err)})
    },
[])

    return(
        
        <div>
           {data.map((stats, index) => {
               console.log('this is stats', stats)
               return(
                   <MainCards stats={stats} index={index}/>
               )
            })}
            
        </div>
        
    )

}

export default MainData;