import "../global.css";
import { View, Text } from 'react-native'
/*import React from 'react'
import { nowPlayingActio } from "@/cor/actiones/movies/now-playing.actio";*/
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient()

const RadixLayout = () => {

 // nowPlayingActio();

  return (


    <GestureHandlerRootView>

    <QueryClientProvider client={queryClient}>
       <Stack 
        screenOptions={{
          headerShown: false
        }}
       
       />
    </QueryClientProvider>


    </GestureHandlerRootView>

   
  
  )
}

export default RadixLayout;