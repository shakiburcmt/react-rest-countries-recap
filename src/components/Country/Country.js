import React from 'react';

const Country = (props) => {
    const { name, population, area, flags } = props.country;
    return (
        <div className='col-md-4'>
            <div className='border border-2 border-dark rounded-4 bg-success p-4 h-100'>
                <h3>Country Name: {name.common}</h3>
                <h5>Population: {population}</h5>
                <p>Area: {area}</p>
                <img className='img-fluid w-75 rounded-2' src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;