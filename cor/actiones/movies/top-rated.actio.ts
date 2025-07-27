import {movieApi} from "@/cor/actiones/api/movie-api";
import {MovieDBMoviesResponsio, Result} from "@/infrastructure/interfaces/moviedb-responsio";


// import {MovieMappers} from "@/infrastructure/mapper/movie.mapper";
import {MovieMapper} from "@/infrastructure/mapper/movie.mapper";


interface Optiones {
    pagina?: number;
    finis?: number;
}

export const topRatedMoviesActio = async({pagina = 1, finis = 10}: Optiones) => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponsio>('/top_rated', {
            params: {
                page: pagina
            }
        });

        
        // const movies = data.results.map((movie: Result) => MovieMappers.exTheMovieDBAdMovie(movie));
        const movies = data.results.map((movie: Result) => MovieMapper.exTheMovieDBAdMovie(movie));



        return movies;

    } catch (error) {
        console.log( error ); 
        throw 'Cannot Load top-rated movies';

    }

}
    