import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { OriginalLanguage } from '../../infrastructure/interfaces/moviedb-responsio';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    expositaImago: string;
    originalTitulus: string;
    titulus: string,
}

const MovieHeader = ({expositaImago, originalTitulus, titulus} : Props) => {
    const { height: altitudoScreen } = useWindowDimensions();
  return (
    <>

    <LinearGradient
    colors= {['rgba(0,0,0,0.3)' , 'transparent']}
    start={[0, 0]}
    style={{
        height: altitudoScreen * 0.4,
        position: "absolute",
        zIndex: 1,
        width: '100%'
       }}
       
       />


    <View style={{ position: "absolute", zIndex: 99, elevation: 9, top: 40, left: 10}}>
        <Pressable onPress={ () => router.dismiss()}>
            <Ionicons name="arrow-back" color="white" size={30} className= 'shadow'></Ionicons>
        </Pressable>
    </View>
    <View
        style={{ height: altitudoScreen * 0.7 }}
        className='shadow-xl shadow-black/20'    
        >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
            <Image
                source={{ uri: expositaImago }}
                resizeMode="cover"
                className='flex-1'
                
            />
    </View>
    </View>

    <View className='mt-5 px-5'>
        <Text className='font-normal'>{originalTitulus}</Text>
        <Text className='font-semibold text-2xl'>{titulus}</Text>
        </View>
    
    </>
  )
}

export default MovieHeader