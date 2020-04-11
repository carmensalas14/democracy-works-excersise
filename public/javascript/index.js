console.log('hi');
const form = document.getElementById('address_form');
const description = document.getElementById('election_description');
const countryValue = 'us';
const cityValue = form.city.value.toLowerCase();
const stateValue = form.state.value.toLowerCase();

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/search').then(res => console.log(res));
});
