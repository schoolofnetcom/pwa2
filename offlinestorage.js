const valor = JSON.stringify({name: "Erik", age: 32});
const chave = 'user';

window.sessionStorage.setItem(chave, valor);
const nome = window.sessionStorage.getItem(chave);

console.log(JSON.parse(nome));
