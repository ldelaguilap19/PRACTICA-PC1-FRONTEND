import { Pais } from './pais.model';
export class Editorial {
    
    idEditorial ?: number;
    razonSocial ?: string;
    direccion ?: string;
    ruc ?: string;
    gerente ?: string;
    fechaCreacion?:Date;
    pais ?: Pais;
    
}