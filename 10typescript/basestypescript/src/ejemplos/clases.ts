import './style.css'


abstract class Persona {


  static anioActual:number=2022;
  
  private nombre:string;
  private apellido:string;
  public direccion:string;
  constructor ( nombre:string, apellido:string, direccion:string ){
    this.nombre=nombre;
    this.apellido= apellido;
    this.direccion= direccion;
  }
  // constructor(private nombre:string, private apellido:string 
  //   , public direccion:string ="sin direcciOn" ){}
  protected obtenerNombreCompleto():string{
    return `${this.nombre} ${this.apellido}`

  }
  // get getNombre(){
  //   return this.nombre;
  // }
  // set setNombre(nombre:string){
  //   this.nombre=nombre;
  // }

}
class Estudiante extends Persona{
  tipoEstudiante:string;
  constructor(nombre:string, apellido:string, direccion:string, tipoEstudiante:string){
    super(nombre, apellido,direccion);
    this.tipoEstudiante = tipoEstudiante;
  }
  public obtenerNombreCompletoEstudiante(){
    return `Estudiante:  ${super.obtenerNombreCompleto()}`
  }
}


// const persona = new Persona('John','Cevallos','Manta');


const estudiante = new Estudiante('John','Cevallos','Manta','Presencial');
console.log(estudiante.obtenerNombreCompletoEstudiante() );







// const persona = new Persona('John', 'Cevallos','Manta');
// console.log(persona.obtenerNombreCompleto().toUpperCase() );
// console.log(Persona.anioActual);



