import { View, Text, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router'
import { useMovie } from '@/presentation/hooks/useMovie'
import { ScrollView } from 'react-native';
import MovieHeader from '@/presentation/components/MovieHeader';
import MovieDescriptio from '@/presentation/components/MovieDescriptio';
import MovieCast from '@/presentation/components/MovieCast';

const MovieScreen = () => {

    const {id} = useLocalSearchParams();

    const { movieQuery, castQuery } = useMovie( +id );

    if ( movieQuery.isLoading || !movieQuery.data ) {
      return (
         <View className='justify-center items-center flex flex-1'>
                 <Text>Espere, por favor</Text>
                 <ActivityIndicator color='purple' size={30}/>
         </View>
      )

    }
    
  return (
    <ScrollView>
      <MovieHeader
      originalTitulus={movieQuery.data.originalTitulus}
      titulus={movieQuery.data.titulus}
      expositaImago={ movieQuery.data.expositaImago}
      />

      <MovieDescriptio movie={ movieQuery.data }/>

      <MovieCast cast= { castQuery.data ?? [] }/>

    </ScrollView>
  )
}

export default MovieScreen;