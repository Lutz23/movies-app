import {completaMovie, Movie} from "../interfaces/movie.interface";
import { MovieDBMovieResponsio } from "../interfaces/moviedb-movie.responsio";
import {Result} from "../interfaces/moviedb-responsio";

export class MovieMapper {

    static exTheMovieDBAdMovie = ( movie: Result ): Movie => {

        return {
            id: movie.id,
            titulus: movie.title,
            summarium: movie.overview,
            exhibitionemDiem: new Date( movie.release_date ),
            mediocris: movie.vote_average,
            expositaImago: `https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`,
            contextusImago: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}.jpg`,
        }
        
    }

    static exTheMovieDBAdcompletaMovie = ( movie: MovieDBMovieResponsio ): completaMovie => {
        return {
            id: movie.id,
            titulus: movie.title,
            summarium: movie.overview,
            exhibitionemDiem: new Date( movie.release_date ),
            mediocris: movie.vote_average,
            expositaImago: `https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`,
            contextusImago: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}.jpg`,
            
                tempus: movie.runtime ,
                sumptus: movie.budget ,
                originalTitulus: movie.original_title ,
                genera: movie.genres.map(g => g.name),
                comitatuProductio:movie.production_companies.map( c=> c.name),
        }
        
    }




}