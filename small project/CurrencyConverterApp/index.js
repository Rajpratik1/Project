const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aea40c5a2cmsh5e0f917fb8f229bp13a2bejsn98bc083b73de',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}