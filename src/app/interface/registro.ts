export interface IRegistro {
    idRegistro:number,
    idPersonas:number,
    idCursos:number,
    nombreEstudiante:string,
    apellidoEstudiante:string,
    nombreCursos:string
}
export interface ISetRelacion{
    idRegistro:number,
    idPersonas:number,
    idCursos:number
}