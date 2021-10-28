export class Empleados {

    id_empleado: number;
    cedula: string;
    nombres: string;
    apellidos: string;
    correo: string;
    nacimiento: string;
    direccion: string;
    telefono: string;
    estado: string;

    constructor() {
        this.id_empleado = 0;
        this.cedula = '';
        this.nombres = '';
        this.apellidos = '';
        this.correo = '';
        this.nacimiento = '';
        this.direccion = '';
        this.telefono = '';
        this.estado = '';
    }
}
