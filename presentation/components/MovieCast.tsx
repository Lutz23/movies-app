import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/cast.interface';
import DataVidereDeActors from './DataVidereDeActors';

interface Props {
    cast: Cast[];
}

const MovieCast = ({cast}: Props) => {
  return (
    <View className='mt-5 mb-10'>
      <Text className='font-bold text-2xl px-5 pb-2'>Actores</Text>
      <FlatList
      data={ cast }
      keyExtractor={(item) => item.id.toString() }
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <DataVidereDeActors actor={ item } /> }
        />
    </View>
  )
}

export default MovieCast