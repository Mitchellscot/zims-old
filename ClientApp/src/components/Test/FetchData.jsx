import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function FetchData() {
    const dispatch = useDispatch();
    //const [loading, setLoading] = useState(true);
    const weather = useSelector(store => store.weather)
    const loadingMessage = <h1>Loading....</h1>;

    //if (weather) {
    //    setLoading(false)
    //}

    useEffect(() => {
        dispatch({ type: 'FETCH_WEATHER' })
    }, [dispatch]);

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
                    {loading ? weather.map(weather =>
                        <tr key={weather.date}>
                            <td>{weather.date}</td>
                            <td>{weather.temperatureC}</td>
                            <td>{weather.temperatureF}</td>
                            <td>{weather.summary}</td>
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