export class NivelEducacional {

  public id: number;
  public nombre: string;

  public constructor() {
    this.id = 1;
    this.nombre = 'Básica Incompleta';
  }

  public setNivelEducacional(id: number, nombre: string): void {
    this.id = id;
    this.nombre = nombre;
  }

  public getNivelEducacional(id: number, nombre: string): NivelEducacional {
    const nivel = new NivelEducacional();
    nivel.setNivelEducacional(id, nombre);
    return nivel;
  }

  public static getNivelesEducacionales(): NivelEducacional[] {
    const niveles: NivelEducacional[] = [
      new NivelEducacional().getNivelEducacional(1, 'Básica Incompleta'),
      new NivelEducacional().getNivelEducacional(2, 'Básica Completa'),
      new NivelEducacional().getNivelEducacional(3, 'Media Incompleta'),
      new NivelEducacional().getNivelEducacional(4, 'Media Completa'),
      new NivelEducacional().getNivelEducacional(5, 'Superior Incompleta'),
      new NivelEducacional().getNivelEducacional(6, 'Superior Completa')
    ];
    return niveles;
  }
  
  public getTextoNivelEducacional(): string {
    return this.id.toString() + ' - ' + this.nombre;
  }

  public static findNivelEducacionalById(id: number): NivelEducacional | undefined {
    return NivelEducacional.getNivelesEducacionales().find(n => n.id === id);
  }

}
