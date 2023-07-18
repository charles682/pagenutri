import {Container} from './style'


export function Button(props){
const downloadPdf = () => {
        // URL do arquivo PDF (substitua pela URL correta do seu PDF)
    const pdfUrl = '../../images/NUTRICIONAIS.pdf';

    // Fazendo a requisição HTTP para obter o arquivo PDF
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Criando um link temporário para o Blob
        const url = URL.createObjectURL(blob);

        // Criando um elemento 'a' invisível para fazer o download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'arquivo.pdf'; // Nome do arquivo que será baixado com a extensão .pdf
        document.body.appendChild(link);
        link.click();

        // Removendo o link temporário
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Erro ao baixar o arquivo PDF:', error);
      });
  };
    return(
        <Container  type={props.downloadable ? 'button' : 'button'}
        onClick={props.downloadable ? downloadPdf : props.onClick} 
  >
           {props.children} 
        </Container>

    );
}