const fetch = require('node-fetch');

const electionRequest = async (country, state, city) => {
  const response = await fetch(
    `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:${country}/state:${state},ocd-division/country:${country}/state:${state}/place:${city}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }
  );
  const json = await response.json();
  return json;
};

const electionData = async (country, state, city) => {
  const data = await electionRequest(country, state, city);
  const { description } = data[0];
  return description;
};

module.exports = {
  electionRequest,
  electionData,
};
