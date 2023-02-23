export interface User {
    usuario: {
      id_usuario: string;
      nombre: string;
      apellido: string;
      telefono: string;
      dni: number;
      domicilio: string;
      fecha_nacimiento: string;
      edad: number;
      avatar: string;
      fecha_alta: string;
      email: string;
      contrasena: string;
      estado: string;
      cuit: string;
      id_metodo_de_pago: string;
    };
  }
  export interface DataLogin {
    email: string;
    contrasena: string;
  }
  export interface DataRegister {
    email: string;
    nombre: string;
    apellido: string;
    contrasena: string;
  }