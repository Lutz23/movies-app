import {movieApi} from "@/cor/actiones/api/movie-api";
import {MovieDBMoviesResponsio, Result} from "@/infrastructure/interfaces/moviedb-responsio";


// import {MovieMappers} from "@/infrastructure/mapper/movie.mapper";
import {MovieMapper} from "@/infrastructure/mapper/movie.mapper";


export const upcomingMoviesActio = async() => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponsio>('/popular');

        
        // const movies = data.results.map((movie: Result) => MovieMappers.exTheMovieDBAdMovie(movie));
        const movies = data.results.map((movie: Result) => MovieMapper.exTheMovieDBAdMovie(movie));

        
        return movies;

    } catch (error) {
        console.log( error ); 
        throw 'Cannot Load now popular movies';

    }

}
    