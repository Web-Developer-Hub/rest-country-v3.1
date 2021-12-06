import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flags, name, flag, region, population, maps, independent, capital, area, status, timezones, currencies, languages } = props.data;
    const timezone = timezones[0];

    //get currencies value name.... 
    const getCurrencies = (params) => {
        const x = params
        const m = Object.values(x ? x : 'null');
        return findCurrencies(m)
    }

    const findCurrencies = (n) => {
        const currence = n.map(a => a.name ? a.name : 'null');
        return currence.join(', ')

    }

    // get currencies value symbol....
    const getCurrencies2 = (params) => {
        const x = params
        const m = Object.values(x ? x : 'null');
        return findCurrencies2(m)
    }

    const findCurrencies2 = (n) => {
        const currence = n.map(a => a.symbol ? a.symbol : 'null');
        return currence.join(', ')
    }

    //findout all alnguage to object
    const getLanguage = (params) => {
        return Object.values(params ? params : 'null');
    }

    return (
        <div className="childDiv">
            <img src={flags.svg ? flags.svg : 'Empty Data'} alt="country" />
            <p>Official Name: {name.official ? name.official : 'Empty Data'} <span>{flag ? flag : 'Empty Data'}</span></p>
            <p>Common Name: {name.common ? name.common : 'Empty Data'} <span>{flag ? flag : 'Empty Data'}</span></p>
            <p>Capital: {capital ? capital : 'Empty Data'}</p>
            <p>Area : {area ? area : 'Empty Data'}</p>
            <p>Population: {population ? population : 'Empty Data'}</p>
            <p>Timezone: {timezone ? timezone : 'Empty Data'}</p>
            <p>Independent: {independent ? 'Trure' : 'False'}</p>
            <p>Region: {region ? region : 'Empty Data'}</p>
            <p>Status: {status ? status : 'Empty Data'}</p>
            <p>Currencies: {getCurrencies(currencies)} ({getCurrencies2(currencies)})</p>
            <p>Language : {getLanguage(languages).join(', ')}</p>
            <p>Location: <a href={maps.googleMaps ? maps.googleMaps : 'Empty Data'} target="_blank" rel='noreferrer'> google map of county</a></p>
        </div>
    );
};

export default Country;