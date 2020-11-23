export class DepartamentoU{
    id: number;
    nombre: string;
}

export class Departamento{
    id: number;
    nombre: string;
    municipios: Municipio;
}

export class Municipio{
    id: number;
    nombre: string;
    alcalde: string;
    descripcion: string
}

export class Relacion{
    id: number;
    municipio: number;
    departamento: number;
}