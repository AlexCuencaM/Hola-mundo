namespace Model
{
    export class Persona{
        private nombre: string;
        private edad: Number;
    
        constructor(nombre:string, edad: Number)
        {
            this.setNombre(nombre);
            this.setEdad(edad);
        }
    
        setNombre(nombre:string)
        {
            this.nombre = nombre;
        }
        setEdad(edad: Number)
        {
            this.edad = edad;
        }
    
        getNombre()
        {
            return this.nombre;
        }
        getEdad()
        {
            return this.edad;
        }
        saludo()
        {
            let body = document.getElementsByTagName("body")[0];
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.innerText = "Mi nombre es: " + this.getNombre() + 
            " Mi edad es: " + this.getEdad();
            div.appendChild(p);
            body.appendChild(div);
        }
    }
}

