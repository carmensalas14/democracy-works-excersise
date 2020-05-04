const form = document.getElementById('address_form');

const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'content-type': 'application/json' } : {},
}).then((response) => {
  if (response.status > 200 || response.status < 200) {
    return response.json().catch((errResData) => {
      const error = new Error('Something went wrong!');
      error.data = errResData;
      throw error;
    });
  }
  return response;
});


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cityValue = form.city.value.toLowerCase();
  const stateValue = form.state.value.toLowerCase();

  const getElectionData = requestMethod('POST', '/', {
    cityValue,
    stateValue,
  });

  console.log(getElectionData);
  console.log(stateValue);
});
