import { nowPlayingActio } from "@/cor/actiones/movies/now-playing.actio";
import { popularMoviesActio } from "@/cor/actiones/movies/popular.actio";
import { topRatedMoviesActio } from "@/cor/actiones/movies/top-rated.actio";
import { upcomingMoviesActio } from "@/cor/actiones/movies/upcoming.actio copy";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"


export const useMovies = () => {
    const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingActio,
    staleTime: 1000 * 60 * 60 * 24
});

const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesActio,
    staleTime: 1000 * 60 * 60 * 24

});   

const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'],
    queryFn: ({pageParam}) =>  {
            return topRatedMoviesActio({pagina: pageParam})
        },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: ( _, pages ) => pages.length +1 

});   

const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesActio,
    staleTime: 1000 * 60 * 60 * 24

});   

return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery

}
}