import { MovieDBMoviesResponsio } from '@/infrastructure/interfaces/moviedb-responsio';



export interface Movie {
    id: number;
    titulus: string;
    summarium: string;
    exhibitionemDiem: Date;
    mediocris: number;
    expositaImago: string;
    contextusImago: string;
}

export interface completaMovie extends Movie {
    genera: string[];
    tempus: number;
    sumptus: number;
    originalTitulus: string;
    comitatuProductio: string[];
}