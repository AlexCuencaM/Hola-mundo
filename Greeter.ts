namespace Model
{
    export class Greeter {
        element: HTMLElement;
        span: HTMLElement;
        timerToken: number;
        private person: Persona;

        constructor (element: HTMLElement) {
        this.element = element;
        this.element.innerText += "La hora es: ";
        this.setSpan('span');
        this.span.innerText = this.initTiempo();
        this.person = new Persona("Alex",21);
        }
    
        setSpan(span: string):void{
            this.span = document.createElement(span);
            this.element.appendChild(this.span);
        }
        initTiempo():string
        {
            var date = new Date();
            this.span.innerText = date.getHours() + ":" + date.getMinutes() + ":" +
            date.getSeconds();
            return this.span.innerText;
        }
        start() {
        this.timerToken = setInterval(() => this.span.innerText = this.initTiempo(), 1000);
        this.person.crearElementos();
        }
        
        stop() {
        clearTimeout(this.timerToken);
        }
    }
}