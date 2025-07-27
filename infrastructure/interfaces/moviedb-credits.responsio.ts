export interface MovieDBCreditsResponsio {
    id:   number;
    cast: MovieDBCast[];
    crew: MovieDBCast[];
  }
  
  export interface MovieDBCast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          string;
    job?:                 string;
  }
  
  

  export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "VisualEffects",
    Writing = "Writing",
  }