import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MovieExposita from './MovieExposita';
import { useEffect, useRef } from 'react';

interface Props {
    titulus?: string;
    movies: Movie[];
    classNomen?: string;
    portamProximanPaginam?: () => void;
}

const MovieHorizontalemAlbum = ({ titulus, movies, classNomen, portamProximanPaginam }: Props) => {
    const estLoading = useRef(false);

    useEffect(()=> {
        setTimeout(()=> {
            estLoading.current= false;
        }, 200 )

    }, [movies])

    const cumScroll = (eventus: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (estLoading.current) return;

        // Ensure variable names are not redeclared
        const { contentSize, layoutMeasurement, contentOffset } = eventus.nativeEvent;

        // Replace invalid character with proper operator
        const estProperFinis =
            contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

        if (!estProperFinis) return;

        estLoading.current = true;

        console.log('Cargar siguientes películas');

        portamProximanPaginam && portamProximanPaginam()
    };

    return (
        <View className={`${classNomen}`}>
            {titulus && <Text className="text-3xl font-bold px-4 mb-2">{titulus}</Text>}

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MovieExposita id={item.id} expositaImago={item.expositaImago} parvumImago />
                )}
                onScroll={cumScroll}
            />
        </View>
    );
};

export default MovieHorizontalemAlbum;
