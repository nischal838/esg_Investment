export const fetchESG = async (inputTicker) => {

    var axios = require("axios").default;
    
    var options = {
        method: 'GET',
        url: 'https://esg-risk-ratings-for-stocks.p.rapidapi.com/api/v1/resources/esg',
        params: {ticker: inputTicker},
        headers: {
        'x-rapidapi-host': 'esg-risk-ratings-for-stocks.p.rapidapi.com',
        'x-rapidapi-key': 'a296dde4fbmshd36dbc630baed40p1c33f3jsn1de2232dbed7'
        }
  };

  try {
      const response = await axios.request(options);

      const { [inputTicker]:value } = response.data;

      return value;
      
    } catch(error){
      console.log(error);
  }


}

