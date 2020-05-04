const fetch = require('node-fetch');

const cityElectionData = async (state) => {
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state}`;
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await data.json();
  return json;
};

const stateElectionData = async (city, state) => {
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state}/place:${city}`;
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await data.json();
  return json;
};

module.exports = {
  cityElectionData,
  stateElectionData,
};
