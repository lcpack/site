const imagensDesc = {
    "embalagem_plastica": [
        { "nome": "frasco_125ml_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "frasco_1l_agro.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "bombona_5l_pouron.png", "descricao": "Embalagem PEAD, Bocal 28 ou 30mm, Cor Natural, Branco" }
    ],
    "Laboratorio": [
        { "nome": "frasco_125ml_nr42.png", "descricao": "Embalagem PEAD, Bocal 42mm, Cor Natural ou Branco" },
        { "nome": "frasco_500ml_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "pote_500ml_rk_bc55 (1).png", "descricao": "Embalagem PEAD, Bocal 55mm, Cor Natural ou Branco" },
        { "nome": "pote_1l_redondo_bc85 (1).png", "descricao": "Embalagem PEAD, Bocal 55mm, Cor Natural ou Branco" }
    ],
    "Farmaceutico": [
        { "nome": "frasco_farma_30ml_28030.png", "descricao": "Embalagem PET, Bocal 28mm, Cores variadas" }
    ],
    "Quimico": [
        { "nome": "frasco_500ml_petrobras.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural, Branco ou Amarelo, Modelo c/ Lacre e logotipo BR (Petrobrás) na tampa" },
        { "nome": "pote_2L_redondo_bc95.png", "descricao": "Embalagem PEAD, Bocal 95mm, Cor Natural ou Branco" }
    ],
    "Agroquimico": [
        { "nome": "frasco_2l_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "frasco_3l_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm Agro, Cor Natural ou Branco" },
        { "nome": "bombona_5l_tipoj.png", "descricao": "Embalagem PEAD, Bocal 45mm Agro, Cor Natural ou Branco" },
        { "nome": "bombona_5l_tipoa95.png", "descricao": "Embalagem PEAD, Bocal 95mm, Cor Natural ou Branco" }
    ],
    "Comuns": [
        { "nome": "frasco_dosador_250ml.png", "descricao": "Embalagem PEAD, Bocal 28mm, Cor Natural ou Branco" },
        { "nome": "frasco_dosador_1l_bc28.png", "descricao": "Embalagem PEAD, Bocal 28mm, Cor Natural ou Branco" },
        { "nome": "frasco_farma_100ml_38100_roxo.png", "descricao": "Embalagem PET, Bocal 38mm, Cores variadas" },
        { "nome": "frasco_farma_50ml_38050.png", "descricao": "Embalagem PET, Bocal 38mm, Cores Variadas" },
        { "nome": "frasco_115ml_bc28.png", "descricao": "Embalagem PEAD, Bocal 28mm, Cor Natural ou Branco" },
        { "nome": "frasco_Farma_200ml_282000.png", "descricao": "Embalagem PET, Bocal 28mm, Cores variadas" },
        { "nome": "frasco_250ml_nr42.png", "descricao": "Embalagem PEAD, Bocal 42mm, Cor Natural ou Branco" },
        { "nome": "frasco_250ml_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "pote_250ml_bc55.png", "descricao": "Embalagem PEAD, Bocal 55mm, Cor Natural ou Branco" },
        { "nome": "frasco_300ml_agro_bc45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "frasco_500ml_agro_bc45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "frasco_1l_petrobras.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural, Branco ou Amarelo, Modelo c/ Lacre e logotipo BR (Petrobrás) na tampa" },
        { "nome": "frasco_1l_nr42.png", "descricao": "Embalagem PEAD, Bocal 42mm, Cor Natural ou Branco" },
        { "nome": "frasco_1l_retangular45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "pote_500ml_rk_bc55.png", "descricao": "Embalagem PEAD, Bocal 55mm, Cor Natural ou Branco" },
        { "nome": "pote_1l_redondo_bc85.png", "descricao": "Embalagem PEAD, Bocal 85mm, Cor Natural ou Branco" },
        { "nome": "pote_1200ml_rk_bc85.png", "descricao": "Embalagem PEAD, Bocal 85mm, Cor Natural ou Branco" },
        { "nome": "bombona_5l_am_bc42.png", "descricao": "Embalagem PEAD, Bocal 42mm, Cor Natural ou Branco" },
        { "nome": "bombona_5l_agro_bc45.png", "descricao": "Embalagem PEAD, Bocal 45mm, Cor Natural ou Branco" },
        { "nome": "bombona_10l_retangular63.png", "descricao": "Embalagem PEAD, Bocal 63mm, Cor Natural ou Branco" },
        { "nome": "bombona_20l_retangular63.png", "descricao": "Embalagem PEAD, Bocal 63mm, Cor Natural ou Branco" },
        { "nome": "frasco_30ml.png", "descricao": "Embalagem PET, Bocal 28mm, Cores variadas" },
    ]
}
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.onclick = () => {
        let url = card.querySelector(".card-img-top").src;
        let titulo = card.querySelector(".card-title").textContent.trim();
        // Extraindo o nome do arquivo da imagem da URL
        let nomeImagem = url.split('/').pop();
        // Removendo possíveis caminhos ou diretórios do nome da imagem
        nomeImagem = nomeImagem.replace(/.*[/\\]/, '');

        let descricao = '';

        // Procurando a descrição correspondente no objeto 'imagensDesc'
        Object.values(imagensDesc).forEach(category => {
            const item = category.find(img => img.nome === nomeImagem);
            if (item) {
                descricao = item.descricao;
                return false; // Para sair do loop assim que encontrar a descrição
            }
        });

        document.querySelector("#modal_item .modal-title").textContent = titulo;
        document.querySelector("#modal_item .modal-body .imagem").src = url;
        document.querySelector("#modal_item .modal-body .descricao").textContent = descricao || 'Descrição não encontrada.';
    };
});

document.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var pageBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;

    if (pageBottom) {
        footer.style.position = 'relative';
    } else {
        footer.style.position = 'fixed';
    }
});