import Project from './project-card';
import Header from './header-card';


const projects = [
  {"title": "Zoogi Roll - Finalista da US Imagine Cup 2014", 
  "dates":{"start":"01/09/2014", "end": "01/05/2015"},
  "description": "O desenvolvimento do jogo mobile Zoogi Roll foi fruto do trabalho desenvolvido na disciplina de Desing de Jogos no segundo semestre do período período sanduíche na University of Houston. A ideia de Zoogi Roll era criar um jogo multi-plataforma e acessível, voltado à diversão, com monstrinhos que batalhavam em uma arena de “bolinhas-de-gude”. O projeto foi desenvolvido em grupo, com mais 3 integrantes, e foi finalista da edição de 2014 da Imagine Cup, competição de inovação da Microsoft, na categoria de Desenvolvimento de Jogos. Além do trabalho de programação, era necessário pensar em aspectos do design do projeto e no pitch para falar sobre o produto. O jogo não venceu a competição, mas foi bem recebido e ficou entre os apenas 4 finalistas.",
  "image": {"src": "/static/images/zoogii.png", "alt": "Cenário do jogo Zoogi Roll, com um tubarão em formato de bolinha indo em direção a um lobo em formato de bolinha."},
  "relatedLinks": [{"title": "Trailer do jogo", "url": "https://www.youtube.com/watch?v=5FTFMtV3yaw"}],
  "colaborators": null,
  "organization": "University of Houston",
  "relatedFields": ["Desenvolvimento de Jogos", "Design de Jogos", "Computação Gráfica", "Inovação"]
  },
  {"title": "Ferramenta para Análise Visual de Técnicas Detalhamento de Superfícies a partir de Texturas", 
  "dates":{"start":"01/10/2012", "end": "01/07/2013"},
  "description": "Projeto de iniciação científica financiado pelo CNPq, realizado na UFABC e orientado pelo professor doutor João Paulo Gois. Foi criada uma ferramenta digital em que se podia carregar arquivos de modelos tridimensionais e renderizá-los utilizando diferentes técnicas de iluminação e sombreamento, alterando arquivos de texturas para evidenciar as diferenças. A partir de imagens de texturas 2D, somadas a programação em shaders e mapas de normais, podia-se obter uma visualização 3D das superfícies dos modelos renderizados. O projeto deu continuidade aos estudos realizados na iniciação científica anterior, e também utilizou OpenGL, com um foco em programação de shaders, e o framework Qt para se criar a interface ferramenta de visualização.",
  "image": {"src": "/static/images/ic.png", "alt": "Interface de aplicação em que, na esquerda, há ferramentas de escolha de opções de customização, separadas em abas e, na direita, há a visualização de uma superfície plana, com textura tridimensional de muros e um enfeite com forma de cabeça de leão."},
  "relatedLinks": [{"title": "Vídeo de demonstração", "url": "https://www.youtube.com/watch?v=nC_QYCvuhDM"}],
  "colaborators": ['João Paulo Gois'],
  "organization": "UFABC",
  "relatedFields": ["Computação Gráfica", "Desenvolvimento de Software"]
  },
  {"title": "Visualizador Interativo de Nuvens de Pontos e Campos Vetoriais 3D", 
    "dates":{"start":"01/10/2011", "end": "01/07/2012"},
    "description": "Projeto de iniciação científica desenvolvido dentro do programa Pesquisando Desde o Primeiro Dia da UFABC, orientado pelo professor doutor João Paulo Gois. Desenvolvemos um leitor de arquivos com nuvens de pontos e campos de vetores para gerar sua visualização, a partir das bibliotecas do OpenGL, usando Qt como framework para criar a aplicação.",
    "image": {"src": "/static/images/fuscaetelinha.png", "alt": "Interface de aplicação em que, na esquerda, há uma imagem tridimensional de um fusca feito de pontos azuis, e, do lado direito, tem-se botões para definir as cores dos pontos."},
    "relatedLinks": null,
    "colaborators": ['João Paulo Gois'],
    "organization": "UFABC",
    "relatedFields": ["Computação Gráfica", "Desenvolvimento de Software"]
  },
  {"title": "bbbbbbb", 
    "dates":{"start":"01/01/2015", "end": ""},
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at lectus fermentum tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at lectus fermentum tincidunt.",
    "image": {"src": "/static/images/imagine-cup.jpg", "alt": "Alt text da imagem"},
    "relatedLinks": [{"title": "Test", "url": "https://www.omelete.com.br"}, {"title": "Google", "url":"https://www.google.com"}],
    "colaborators": null,
    "organization": "UFABC - Universidade Federal do ABC",
    "relatedFields": []
  }
]

export default function Home() {
  return (
    <div>
      <Header/>
      <div>
        
        {projects.map((project)=>(<Project project={project} />))}
        
      </div>
      
    </div>
  )
}
