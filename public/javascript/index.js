console.log('hi');
const form = document.getElementById('address_form');
const cityValue = form.city.value.toLowerCase();
const stateValue = form.state.value.toLowerCase();
console.log(stateValue);

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

const getElectionData = async (city, state) => {
  const response = await requestMethod('POST', '/', {
    city,
    state,
  });
  const data = await response.json();
  return data;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(stateValue);

  const electionData = await getElectionData(cityValue, stateValue);
  console.log(stateValue);
});
