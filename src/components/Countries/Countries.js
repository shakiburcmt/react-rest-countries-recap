import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // button for counter
    const [count, setCount] = useState(0);
    // operation for increase
    const increase = () => {
        const previous = count + 1;
        setCount(previous)
    }
    // operation for decrease
    const decrease = () => {
        const present = count - 1;
        setCount(present)
    }
    const [countries, setCountries] = useState([]);
    
    // fetch start
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>

            {/* counter start here */}
            <h3>Count: {count}</h3>
            <button onClick={increase} className='btn btn-danger m-1'>Increase</button>
            <button onClick={decrease} className='btn btn-danger m-1'>Decrease</button>
            {/* counter end here */}

            <div className='row m-3 g-2'>
                {
                    countries.map(country => <Country country={country} key={country.cca2}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;