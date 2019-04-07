class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor (element: HTMLElement) {
    this.element = element;
    this.element.innerText += "La hora es: ";
    this.setSpan('span');
    this.span.innerText = this.initTiempo();
    
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
    }
    
    stop() {
    clearTimeout(this.timerToken);
    }
    
    }
    
    window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    }; 