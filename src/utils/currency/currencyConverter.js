const currencyConverter = async (amount) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "dm3gVU74YpXbTwxinbecospnA4RTedMS");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  return await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=BDT&from=USD&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        console.log(result);
        return result;
      } // Return the conversion result
    })
    .catch((error) => {
      console.log("error", error);
      throw error;

      // Rethrow the error to handle it elsewhere if needed
    });
};

export default currencyConverter;
