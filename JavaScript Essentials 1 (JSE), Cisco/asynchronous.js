// Enviando uma função como parâmetro para outra função (callback assíncrono).
let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}
outer(inner);