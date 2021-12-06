import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, SetCountries] = useState([]);

    useEffect(() => {
        const URL = `https://restcountries.com/v3.1/all`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => SetCountries(data));
    }, [])



    return (
        <div>
            <div className="mainDiv">
                {
                    countries.map((country) => <Country data={country}></Country>)
                }
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>All rights reversed.Copyright © 2021 Habibor-Rahaman.com </div>
        </div>
    );
};

export default Countries;