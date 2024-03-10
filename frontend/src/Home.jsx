import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/home')
			.then(result => {
				console.log(result)
                if(result.data !== "Login Successful"){
                    navigate('/login')
                }
			})
			.catch(err => console.log(err))
    }, [])
    return(
        <h2>Currently in Development</h2>
    )
}

export default Home;