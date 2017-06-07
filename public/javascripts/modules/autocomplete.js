function autocomplete(input, latInput, lngInput) {
  if(!input) return; // skip this fn from running if there is not input on the page
  console.log(input, latInput, lngInput)
  const dropdown = new google.maps.places.Autocomplete(input)

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();

  });

  // If someone hits enter on the addres field, don't submit form
  input.on('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  });
}
export default autocomplete;