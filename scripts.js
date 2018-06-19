document.getElementById('app').innerHTML = `
<h1>Hello PWA <span class="tooltip">Esta á uma página PWA</span></h1>
<div>
<ul>
  <li id="usage"></li>
  <li id="quota"></li>
  <li id="percent"></li>
</ul>
</div>

<div>
<button id="startrec">Iniciar gravação</button>
<button id="stoprec">Para gravação</button>
<div id="recresult">Nenhuma gravação...</div>
</div>
`;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    })
}
