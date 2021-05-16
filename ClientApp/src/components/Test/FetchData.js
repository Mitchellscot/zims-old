import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchData() {
    const [forecasts, setForecasts] = useState([]);

    const loadingMessage = <h1>Loading</h1>;

    useEffect(() => {
        axios.get('WeatherForecast')
            .then(result => setForecasts(result.data));
    }, []);

    return (
        <>
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
            </div>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts ? forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    ) : loadingMessage}
                </tbody>
            </table>
        </>
    );
}

/* const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(result => setData(result.data));
}, []); */

/* const populateWeatherData = async () => {
  const response = await fetch('weatherforecast');
  const data = await response.json();
  setForecasts(data);
  setLoading(false);
} */