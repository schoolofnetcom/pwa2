const getReadedFile = function (reader, item) {
    return function() {
        const img = document.createElement('img');
        img.src = reader.result;
        item.appendChild(img);
    }
}

const fileReader = function (e) {
    const files = e.target.files;
    document.getElementById('counter').innerHTML = files.length;
    const list = document.getElementById('list');

    for (let i = 0; i<files.length; i++) {
        let item = document.createElement('li');

        const reader = new FileReader();
        reader.addEventListener('load', getReadedFile(reader, item));
        reader.readAsDataURL(files[i]);

        item.innerHTML += files[i].name + ' - ' + file.type;

        list.appendChild(item);
    }
};

const init = function() {
    document.getElementById('file').addEventListener('change', fileReader);
}

if (!window.File) {
    alert('recurso não suportado');
} else {
    init();
}
