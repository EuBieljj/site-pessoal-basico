function toggleMode() {
    const html = document.documentElement
    //É UMA DAS FORMAS DE SE FAZER
    html.classList.toggle('light')

    //MAS TAMBEM EXISTE ESSA FORMA DE SE FAZER
    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}

    //pegar a tag img
    //const img = document.querySelector("#profile img")

    //subtituir a imagem
    //if(html.classList.contains('light')) {
        //se tiver no light mode, adicionar a imagem light
    //    img.setAttribute('src', '.assets/avatar-light.png')
    //} else {
        //se tiver sem o lght mode, manter a imagem normal
    //    img.setAttribute('src', '.assets/avatar.png')
    //}
}