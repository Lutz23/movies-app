import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';

const MoviesApp = () => {
  return (
    <Redirect href='/domus' />
  )
}

export default MoviesApp;