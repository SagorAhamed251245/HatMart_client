const currencyConverter = (amount) => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "QmHahzvb2zPdYWP5rGB1iIxD82gQDdIz");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=BDT&from=USD&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result; // Return the conversion result
    })
    .catch((error) => {
      console.log("error", error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    });
};

export default currencyConverter;
