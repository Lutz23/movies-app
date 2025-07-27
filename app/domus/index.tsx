import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useMovies } from '@/presentation/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideshow from '@/presentation/components/MainSlideshow';
import MovieHorizontalemAlbum from '@/presentation/components/MovieHorizontalemAlbum';

const DomusScreen = () => {

    const bonumZona = useSafeAreaInsets();

    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if ( nowPlayingQuery.isLoading) {
      return (
        <View className='justify-center items-center flex-1'>
          <ActivityIndicator size={40} color='purple' />
        </View>
      )
    }

  return (

    <ScrollView>


    <View className='mt-2 pb-10' style={{ paddingTop: bonumZona.top}}>
      <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []}/>

      <MovieHorizontalemAlbum
        titulus='Populares'
        movies={popularQuery.data ?? []}
        classNomen='mb-5'
      />

<MovieHorizontalemAlbum
        titulus='Mejor calificadas'
        movies={topRatedQuery.data ?.pages.flat() ?? []}
        classNomen='mb-5'
        portamProximanPaginam={topRatedQuery.fetchNextPage}
      />


<MovieHorizontalemAlbum
        titulus='Próximamente'
        movies={upcomingQuery.data ?? []}
        classNomen='mb-5'
      />

    </View>

    </ScrollView>
  )
}

export default DomusScreen;