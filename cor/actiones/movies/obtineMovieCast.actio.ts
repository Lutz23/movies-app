import { MovieDBCreditsResponsio } from '@/infrastructure/interfaces/moviedb-credits.responsio';
import { movieApi } from '../api/movie-api';
import { CastMapper } from '@/infrastructure/mapper/cast.mappers';

export const obtineMovieCastActio = async(movieId: number) => {

    try{

      const {data} = await movieApi.get<MovieDBCreditsResponsio>(`/${ movieId}/credits`);

      return data.cast.map( CastMapper.exMovieDBCastAdCast)

    } catch (error) {
      console.log(error);
      throw 'Cannot Load cast by id';
    }
}