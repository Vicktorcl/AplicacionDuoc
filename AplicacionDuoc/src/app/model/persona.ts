import { NivelEducacional } from './nivel-educacional';

export class Persona {

  public nombre;
  public apellido;
  public nivelEducacional: NivelEducacional;
  public fechaNacimiento: Date | undefined;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacional = NivelEducacional.findNivelEducacionalById(1)!;
    this.fechaNacimiento = new Date();
  }

}
