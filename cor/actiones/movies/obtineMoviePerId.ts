import { MovieDBMovieResponsio } from "@/infrastructure/interfaces/moviedb-movie.responsio";
import { movieApi } from '@/cor/actiones/api/movie-api';
import { completaMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mapper/movie.mapper";

export const obtineMoviePerId = async(id: number | string ): Promise<completaMovie> => {
 
       try {
    
            const { data } = await movieApi.get<MovieDBMovieResponsio>(`/${id}`);
    
            return MovieMapper.exTheMovieDBAdcompletaMovie(data)
    
        } catch (error) {
            console.log( error ); 
            throw 'Cannot Load the movie';
    
        }
    

}