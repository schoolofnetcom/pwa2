if ('clipboard' in navigator) {
    //navigator.clipboard.writeText('Conteúdo gerado via Javascript');
    navigator.clipboard.readText()
        .then((result) => {
            console.log(result);
        });
}
