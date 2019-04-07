var Model;
(function (Model) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad) {
            this.setNombre(nombre);
            this.setEdad(edad);
        }
        Persona.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        Persona.prototype.setEdad = function (edad) {
            this.edad = edad;
        };
        Persona.prototype.getNombre = function () {
            return this.nombre;
        };
        Persona.prototype.getEdad = function () {
            return this.edad;
        };
        Persona.prototype.saludo = function () {
            var body = document.getElementsByTagName("body")[0];
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.innerText = "Mi nombre es: " + this.getNombre() +
                " Mi edad es: " + this.getEdad();
            div.appendChild(p);
            body.appendChild(div);
        };
        return Persona;
    }());
    Model.Persona = Persona;
})(Model || (Model = {}));
var Model;
(function (Model) {
    var Greeter = /** @class */ (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerText += "La hora es: ";
            this.setSpan('span');
            this.span.innerText = this.initTiempo();
            this.person = new Model.Persona("Alex", 21);
        }
        Greeter.prototype.setSpan = function (span) {
            this.span = document.createElement(span);
            this.element.appendChild(this.span);
        };
        Greeter.prototype.initTiempo = function () {
            var date = new Date();
            this.span.innerText = date.getHours() + ":" + date.getMinutes() + ":" +
                date.getSeconds();
            return this.span.innerText;
        };
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.span.innerText = _this.initTiempo(); }, 1000);
            this.person.saludo();
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    }());
    Model.Greeter = Greeter;
})(Model || (Model = {}));
var Model;
(function (Model) {
    window.onload = function () {
        var el = document.getElementById('content');
        var greeter = new Model.Greeter(el);
        greeter.start();
    };
})(Model || (Model = {}));
