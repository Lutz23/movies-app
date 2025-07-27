import { nowPlayingActio } from "@/cor/actiones/movies/now-playing.actio";
import { obtineMovieCastActio } from "@/cor/actiones/movies/obtineMovieCast.actio";
import { obtineMoviePerId } from "@/cor/actiones/movies/obtineMoviePerId";
import { useQuery } from "@tanstack/react-query"


export const useMovie = (id: number) => {
    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => obtineMoviePerId(id),
        staleTime: 1000 * 60 * 60 * 24
    });

    const castQuery = useQuery({
        queryKey: ['movie', id, 'cast'],
        queryFn: () => obtineMovieCastActio(id),
        staleTime: 1000 * 60 * 60 * 24
    });
    return {
        movieQuery,
        castQuery
    }
}