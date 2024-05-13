import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { colors } from '../constants/styles';

const GooglePlaceAutoComplete = () => {
  return (
    // <GooglePlacesAutocomplete
    //   placeholder='Search'
    //   onPress={(data, details = null) => {
    //     // 'details' is provided when fetchDetails = true
    //     console.log(data, details);
    //   }}
    // query={{
    //   key: 'AIzaSyBkCR5IEtMroysL_Au6qKqOaWXPOzGbMgE',
    //   language: 'en',
    // components: 'country:us',

    // }}
    // currentLocation={true}
    // currentLocationLabel='Current location'
    // textInputProps={{
    //   InputComp: Input,
    //   leftIcon: { type: 'font-awesome', name: 'chevron-left' },
    //   errorStyle: { color: 'red' },
    // }}
    // />
    <GooglePlacesAutocomplete
      placeholder='Enter Location'
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      query={{key: ''}} // My API key inactive (expired)
      onPress={(data, details = null) => console.log(data, details)}
      onFail={error => console.log(error)}
      onNotFound={() => console.log('no results')}
      styles={{
        textInputContainer: {
          backgroundColor: 'grey',
        },
        textInput: {
          borderWidth: 1,
          borderColor: colors.gray_1,
          height: 48,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
    />
  )
}

export default GooglePlaceAutoComplete