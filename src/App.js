

import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [data, setdata] = useState(null);
 
  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg',
    params: {ticker: 'FB'},
    headers: {
      'x-rapidapi-host': 'esg-risk-ratings-for-stocks.p.rapidapi.com',
      'x-rapidapi-key': '7bf1acbfc3msh593294bbe304103p1633a8jsn958d9f9af67b'
    }
  };


  useEffect(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data.FB["Controversy Score"]);
      setdata(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);


  return (
    <div className="App">

      {/* <h1> {data.FB["Environment Score"]}</h1> */}

    </div>
  );
}

export default App;