import { View, Text, Image } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/cast.interface';

interface Props {
    actor: Cast;
}

const DataVidereDeActors = ({actor}: Props) => {
  return (
    <View className='mx-10 w-[60px]'>
        <Image
            source={{uri: actor.effigies}}
            className='w-[100] h-[150] rounded 2xl shadow mb-2'
            resizeMode="cover"
         />
            
         <Text numberOfLines={2} adjustsFontSizeToFit className='font-bold leading-5 mb-2'>{actor.nomen}

         </Text>


         <Text className='text-xs text-gray-600'>{actor.character}</Text>


         </View>
  )
}

export default DataVidereDeActors;