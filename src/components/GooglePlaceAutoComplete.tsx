import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { Input } from 'react-native-elements';
const GooglePlaceAutoComplete = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
        // components: 'country:us',

      }}
      currentLocation={true}
      currentLocationLabel='Current location'
      // textInputProps={{
      //   InputComp: Input,
      //   leftIcon: { type: 'font-awesome', name: 'chevron-left' },
      //   errorStyle: { color: 'red' },
      // }}
    />
  )
}

export default GooglePlaceAutoComplete