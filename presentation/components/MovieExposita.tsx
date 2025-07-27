import { Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';


interface Props {
    id: number;
    expositaImago: string;
    parvumImago?: boolean;
    classNomen?: string;
}

const MovieExposita = ({ id, expositaImago, parvumImago = false, classNomen}:Props) => {
  return (
    <Pressable
     className={`active:opacity-90 px-2 ${classNomen}`}
     onPress={()=> router.push(`/movie/${id}`)}
     >
      <Image
        source={{ uri: expositaImago }}
        className='shadow-lg rounded-2xl w-full h-full'
        style={{
            width: parvumImago ? 85 : 150,
            height: parvumImago ? 130 : 250
        }}
        resizeMode='cover'
        />
    </Pressable>
  )
}

export default MovieExposita
