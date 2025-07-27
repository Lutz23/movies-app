import { View, Text } from 'react-native'
import React from 'react'
import { completaMovie } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface Props {
    movie: completaMovie
}

const MovieDescriptio = ({movie}:Props) => {
  return (
    <View className='mx-5'>
    <View className='flex flex-row'>
      <Text>{movie.mediocris}</Text>
      <Text> - {movie.genera.join(',')}</Text>
    </View>

    <Text className='font-bold mt-5'>Argumento</Text>
    <Text className='font-normal mt-2'>{movie.summarium}</Text>

    <Text className='font-bold mt-2 text-2xl'>
        { Formatter.currency(movie.sumptus)}</Text>

    </View>
  )
}

export default MovieDescriptio