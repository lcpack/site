document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const prevBtn = document.querySelector('button[onclick="prevImage()"]');
    const nextBtn = document.querySelector('button[onclick="nextImage()"]');

    if (images.length === 0) {
        console.error('Nenhuma imagem encontrada com a classe .carousel-image');
        return;
    }

    // Função para mostrar a imagem ativa
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    // Função para avançar para a próxima imagem
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    // Função para voltar para a imagem anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    // Inicia o carrossel
    showImage(currentImageIndex);

    // Adiciona event listeners aos botões
    if (prevBtn) {
        prevBtn.removeAttribute('onclick'); // Remove o atributo onclick para evitar duplicação
        prevBtn.addEventListener('click', prevImage);
    }
    if (nextBtn) {
        nextBtn.removeAttribute('onclick'); // Remove o atributo onclick para evitar duplicação
        nextBtn.addEventListener('click', nextImage);
    }

    // Loop automático das imagens
    setInterval(nextImage, 5000); // Muda a imagem a cada 5 segundos
});