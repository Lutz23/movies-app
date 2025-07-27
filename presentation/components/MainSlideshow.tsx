import { View, Text, useWindowDimensions } from 'react-native'
import {useRef} from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import MovieExposita from './MovieExposita';

interface Props {
    movies: Movie[];
}
const MainSlideshow = ({movies}:Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const latitudo = useWindowDimensions().width;
  return (
    <View className='h-[250px] w-full'>
      <Carousel 
        ref={ ref }
       // autoPlay={true}
        data= {movies}
        renderItem={({item})=> <MovieExposita id={ item.id } expositaImago={ item.expositaImago}/>}
        width={200}
        height={350}
        style={{
            width: latitudo,
            height: 350,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideshow