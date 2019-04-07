var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerText += "Ahora estamos en: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = this.initTiempo();
    }
    Greeter.prototype.initTiempo = function () {
        var date = new Date();
        this.span.innerText = date.getHours() + ":" + date.getMinutes() + ":" +
            date.getSeconds();
        return this.span.innerText;
    };
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerText = _this.initTiempo(); }, 1000);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
