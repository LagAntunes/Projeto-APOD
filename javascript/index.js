// início da declaração das variáveis
const botaoChamaAPI = $("#botaoEnviar");
const titulo = $("#tituloDaMidia");
const fotoOuVideo = $("#lugarDaMidia");
const explicacaoDaMidia = $("#apresentacao");
const copyright = $("#copyright");
let objeto;
// fim da declaração das variáveis

// início da estruturação da lógica e das funções
botaoChamaAPI.click(function(cliqueAPI){
    cliqueAPI.preventDefault(); //previne que a ação do botão seja temporária
    chamaInformacaoDaAPI(); // determina a chamada de outra função através do clique do botão
})

function chamaInformacaoDaAPI() {
    $.ajax({
        type: 'GET',
        url:"https://api.nasa.gov/planetary/apod?api_key=eibB6VnHh5xvmqFqvf5hzn6p9I4hvU6fCXOaMiyE&date=" + $("#data").val(),

        success:function(resultadoDaPesquisa) {
            objeto = resultadoDaPesquisa;

            titulo.html(`${objeto.title}`);
            explicacaoDaMidia.html(`${objeto.explanation}`);
            copyright.html(`${objeto.copyright}`);
            if(objeto.media_type!="video"){
                fotoOuVideo.html(`<img src="${objeto.url}"/>`)
            } else{
                fotoOuVideo.html(`<iframe src="${objeto.url}"</iframe`)
            }
        }
    });
}
// fim da estruturação da lógica e das funções



