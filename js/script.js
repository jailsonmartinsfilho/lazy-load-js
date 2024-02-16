const images = document.querySelectorAll('.imgoceano');
const listalinksimagens = 
[
    'https://images3.alphacoders.com/119/119735.jpg',
    'https://images3.alphacoders.com/594/594884.jpg',
    'https://images4.alphacoders.com/130/1301328.jpg',
    'https://images3.alphacoders.com/127/1278415.jpg',
    'https://images4.alphacoders.com/236/236626.jpg',
    'https://images8.alphacoders.com/718/718181.jpg'
]


let controladorPosicao = 0;
const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return

        const image = entry.target
        image.src = listalinksimagens[controladorPosicao]
        console.log(`Link ${listalinksimagens[controladorPosicao]} inserido na src da imagem ${controladorPosicao}`)
        if (controladorPosicao >= 6){
            controladorPosicao = 0;
        }
        controladorPosicao++;   
    })
})

images.forEach((image) =>{
    observer.observe(image);
});