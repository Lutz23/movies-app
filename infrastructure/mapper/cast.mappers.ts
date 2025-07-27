import { Cast } from "../interfaces/cast.interface";
import { MovieDBCast } from "../interfaces/moviedb-credits.responsio";



export class CastMapper {

    static exMovieDBCastAdCast(actor: MovieDBCast): Cast {
        return {
            id: actor.id,
            nomen: actor.name,
            character: actor.character || 'No character',
            effigies: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://i.stack.imgur.com/l60Hf.png',
        }
    }



}