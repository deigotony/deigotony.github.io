var nome;
var questaoAtualIndice;
var acertos = 0;
var timerIntervalo;
let materia = "";
let tempoDeResposta = 0;
let pontuacao = 0;

const questoesAlgoritmos = [
    {
        question: "Algoritmo é uma sequência de passos _______ e não ______ que serve para solucionar um _______. Complete os espaços vazios",
        respostas: [
            { opcao: "finita - legível - desafio", correto: false },
            { opcao: "finita - ambígua - problema", correto: true },
            { opcao: "infinita - viável - processo", correto: false },
        ],
    }, 
    {
        question: "Usar lógica de programação pode servir de ajuda em problemas cotidianos?",
        respostas: [
            { opcao: "Não", correto: false },
            { opcao: "Sim", correto: true },
        ],
    },
    {
        question: "O que são variáveis?",
        respostas: [
            { opcao: "São arquivos dentro do HD de um dispositivo", correto: false },
            { opcao: "São partes da memória volátil que armazenam valores", correto: true },
            { opcao: "São partes do processador que ajudam na execução do sistema", correto: false },
        ],
    },
    {
        question: "Qual tipo de dado é mais adequado para armazenar o valor de um preço (ex: 49.90) em linguagens como Python?",
        respostas: [
            { opcao: "int (Inteiro)", correto: false },
            { opcao: "float (Ponto Flutuante / Real)", correto: true },
            { opcao: "bool (Booleano)", correto: false },
            { opcao: "str (Texto / String)", correto: false },
        ],
    },
    {
        question: "Estruturas condicionais (como if / else) servem para:",
        respostas: [
            { opcao: "Repetir um bloco de código um número indeterminado de vezes", correto: false },
            { opcao: "Tomar decisões no código com base no resultado de uma expressão lógica", correto: true },
            { opcao: "Converter dados de texto em números inteiros automaticamente", correto: false },
            { opcao: "Declarar funções e métodos na memória", correto: false },
        ],
    },
    {
        question: "O que é um laço de repetição?",
        respostas: [
            { opcao: "Um acessório para cabelo, roupas e várias outras coisas", correto: false },
            { opcao: "Um trecho de código que se repete até que algo o interrompa", correto: true },
            { opcao: "Um trecho de código que sempre roda infinitamente", correto: false },
            { opcao: "Um trecho de código que só é executado se uma condição for verdadeira", correto: false },
        ],
    },
    {
        question: "O que acontece quando a condição de um laço 'while' se torna Falsa?",
        respostas: [
            { opcao: "O programa gera um erro de sintaxe e é interrompido", correto: false },
            { opcao: "O laço encerra a execução e o programa prossegue para a próxima instrução", correto: true },
            { opcao: "O laço reinicia do início e limpa as variáveis", correto: false },
            { opcao: "O computador entra em um ciclo de repetição infinita", correto: false },
        ],
    },
    {
        question: "Qual é a diferença entre os operadores '=' e '==' em Python?",
        respostas: [
            { opcao: "'=' é usado para atribuição de valor e '==' é usado para comparar igualdade entre dois valores", correto: true },
            { opcao: "'=' compara se dois valores são iguais e '==' atribui valores", correto: false },
            { opcao: "Ambos realizam a mesma função dentro de expressões condicionais", correto: false },
            { opcao: "'==' serve apenas para multiplicar dois números inteiros", correto: false },
        ],
    },
    {
        question: "Qual a função do break em python?",
        respostas: [
            { opcao: "Quebrar o código no meio", correto: false },
            { opcao: "Interromper um laço de repetiçao", correto: true },
            { opcao: "Indicar uma condição falsa", correto: false },
            { opcao: "Nenhuma das anteriores", correto: false },
        ],
    },
    {
        question: "HelloWorld(print). Esse código está correto?",
        respostas: [
            { opcao: "Sim", correto: false },
            { opcao: "Não", correto: true },
        ],
    }
];

const questoesRedes = [
    {
        question: "Uma rede local restrita a um ambiente físico específico, como um laboratório do IFPB, é classificada como:",
        respostas: [
            { opcao: "WAN (Wide Area Network)", correto: false },
            { opcao: "LAN (Local Area Network)", correto: true },
            { opcao: "MAN (Metropolitan Area Network)", correto: false },
            { opcao: "PAN (Personal Area Network)", correto: false },
        ],
    },
    {
        question: "Qual é a principal função de um Roteador em uma rede de computadores?",
        respostas: [
            { opcao: "Interconectar redes diferentes e encaminhar pacotes de dados até o destino adequado", correto: true },
            { opcao: "Armazenar todos os arquivos da rede em um disco local", correto: false },
            { opcao: "Fornecer energia elétrica para os computadores conectados", correto: false },
            { opcao: "Aumentar a resolução da tela dos dispositivos conectados", correto: false },
        ],
    },
    {
        question: "Qual é o papel do protocolo DNS (Domain Name System) na Internet?",
        respostas: [
            { opcao: "Criptografar senhas de usuários ao acessar sites bancários", correto: false },
            { opcao: "Mapear nomes de domínio (ex: www.ifpb.edu.br) para endereços IP numéricos", correto: true },
            { opcao: "Garantir a velocidade de download de arquivos grandes", correto: false },
            { opcao: "Conectar o cabo de rede à placa de rede do computador", correto: false },
        ],
    },
    {
        question: "Qual é a principal diferença entre um Endereço IP e um Endereço MAC?",
        respostas: [
            { opcao: "O IP é um identificador lógico configurável, enquanto o MAC é o endereço físico gravado na placa de rede", correto: true },
            { opcao: "O endereço MAC muda a cada conexão, enquanto o IP é gravado de fábrica no hardware", correto: false },
            { opcao: "O IP só é utilizado em redes Wi-Fi e o MAC em redes cabeadas", correto: false },
            { opcao: "Não há diferença, pois ambos referem-se exatamente ao mesmo identificador", correto: false },
        ],
    },
    {
        question: "Na arquitetura Cliente-Servidor de redes de computadores:",
        respostas: [
            { opcao: "O cliente armazena os dados centrais e o servidor realiza as requisições", correto: false },
            { opcao: "O cliente envia requisições de dados/serviços e o servidor processa e envia as respostas", correto: true },
            { opcao: "Nenhum computador pode enviar dados sem autorização direta da placa-mãe", correto: false },
            { opcao: "Todos os computadores desempenham exatamente as mesmas funções sem hierarquia", correto: false },
        ],
    },
    {
        question: "Qual meio físico de transmissão de dados utiliza pulsos de luz para alcançar altíssimas velocidades de transferência?",
        respostas: [
            { opcao: "Cabo Par Trançado (UTP)", correto: false },
            { opcao: "Fibra Óptica", correto: true },
            { opcao: "Cabo Coaxial", correto: false },
            { opcao: "Ondas de Rádio AM/FM", correto: false },
        ],
    },
    {
        question: "Qual protocolo é amplamente utilizado pelos navegadores para carregar páginas web com segurança?",
        respostas: [
            { opcao: "HTTPS", correto: true },
            { opcao: "FTP", correto: false },
            { opcao: "SMTP", correto: false },
            { opcao: "DHCP", correto: false },
        ],
    },
    {
        question: "O que é o Wi-Fi?",
        respostas: [
            { opcao: "Uma tecnologia de comunicação sem fio que utiliza ondas de rádio para conectar dispositivos", correto: true },
            { opcao: "Um modelo específico de cabo de fibra óptica", correto: false },
            { opcao: "Um programa antivírus instalado no computador", correto: false },
            { opcao: "O botão do gabinete que liga a placa de rede", correto: false },
        ],
    },
    {
        question: "Qual componente de hardware é responsável por permitir que um computador se conecte a uma rede de dados?",
        respostas: [
            { opcao: "Placa de Vídeo (GPU)", correto: false },
            { opcao: "Placa de Rede (NIC)", correto: true },
            { opcao: "Fonte de Alimentação", correto: false },
            { opcao: "Memória ROM", correto: false },
        ],
    },
    {
        question: "O que a 'Largura de Banda' (Bandwidth) mede em uma conexão de rede?",
        respostas: [
            { opcao: "A quantidade de dados transferida em um determinado intervalo de tempo (ex: Mbps)", correto: true },
            { opcao: "O comprimento físico em metros do cabo de rede", correto: false },
            { opcao: "A quantidade de monitores conectados na mesma sala", correto: false },
            { opcao: "O peso do roteador em gramas", correto: false },
        ],
    }
];

const questoesSO = [
    {
        question: "Qual é a função essencial de um Sistema Operacional (SO)?",
        respostas: [
            { opcao: "Executar unicamente programas de navegação na web", correto: false },
            { opcao: "Gerenciar os recursos de hardware e servir de interface entre o computador, programas e usuário", correto: true },
            { opcao: "Proteger o computador exclusivamente contra ameaças virtuais e vírus", correto: false },
            { opcao: "Aumentar fisicamente a velocidade do processador da máquina", correto: false },
        ],
    },
    {
        question: "A memória RAM é considerada uma memória 'volátil' porque:",
        respostas: [
            { opcao: "Armazena dados permanentemente mesmo após o desligamento do computador", correto: false },
            { opcao: "Perde todo o seu conteúdo armazenado quando o computador é desligado ou reiniciado", correto: true },
            { opcao: "Só pode ser acessada por sistemas operacionais de 64 bits", correto: false },
            { opcao: "Possui capacidade ilimitada de armazenamento de dados e arquivos", correto: false },
        ],
    },
    {
        question: "No contexto de Sistemas Operacionais, o que representa um 'Processo'?",
        respostas: [
            { opcao: "Um programa em execução ao qual foram alocados recursos de memória e processamento", correto: true },
            { opcao: "Um arquivo de texto armazenado na pasta de documentos", correto: false },
            { opcao: "O procedimento físico de conectar um novo periférico ao gabinete", correto: false },
            { opcao: "O cabo de energia conectado à fonte do computador", correto: false },
        ],
    },
    {
        question: "Sistemas operacionais de código aberto (Open Source), como a maioria das distribuições Linux, destacam-se por:",
        respostas: [
            { opcao: "Serem obrigatoriamente pagos e restritos a apenas uma empresa desenvolvedora", correto: false },
            { opcao: "Permitirem que qualquer pessoa acesse, modifique e distribua seu código-fonte", correto: true },
            { opcao: "Não permitirem a instalação de novos aplicativos pelo usuário", correto: false },
            { opcao: "Funcionarem exclusivamente em dispositivos móveis e smartphones", correto: false },
        ],
    },
    {
        question: "Qual componente do Sistema Operacional organiza e controla a gravação e leitura de dados no HD ou SSD?",
        respostas: [
            { opcao: "Sistema de Arquivos (ex: NTFS, EXT4, FAT32)", correto: true },
            { opcao: "Gerenciador de downloads do navegador", correto: false },
            { opcao: "Driver de áudio do sistema", correto: false },
            { opcao: "Compilador da linguagem C", correto: false },
        ],
    },
    {
        question: "Como é chamada a interface de sistema operacional baseada na digitação de comandos em texto?",
        respostas: [
            { opcao: "GUI (Graphical User Interface)", correto: false },
            { opcao: "CLI (Command Line Interface / Linha de Comando)", correto: true },
            { opcao: "API (Application Programming Interface)", correto: false },
            { opcao: "BIOS (Basic Input Output System)", correto: false },
        ],
    },
    {
        question: "Quais dos itens a seguir são exemplos de Sistemas Operacionais?",
        respostas: [
            { opcao: "Google Chrome, WhatsApp e Microsoft Word", correto: false },
            { opcao: "Windows, Linux e Android", correto: true },
            { opcao: "Intel Core i7, AMD Ryzen e Apple M1", correto: false },
            { opcao: "HTML, CSS e JavaScript", correto: false },
        ],
    },
    {
        question: "O que significa dizer que um Sistema Operacional é 'multitarefa'?",
        respostas: [
            { opcao: "Que ele é capaz de gerenciar e alternar a execução de vários programas simultaneamente", correto: true },
            { opcao: "Que ele só consegue rodar um único programa de cada vez", correto: false },
            { opcao: "Que ele só funciona quando há mais de um monitor conectado", correto: false },
            { opcao: "Que ele faz a limpeza física das peças do computador", correto: false },
        ],
    },
    {
        question: "O que é o 'Kernel' (núcleo) de um Sistema Operacional?",
        respostas: [
            { opcao: "O componente principal do SO que gerencia o acesso aos recursos do hardware", correto: true },
            { opcao: "O aplicativo de calculadora nativo do sistema", correto: false },
            { opcao: "O cabo de energia que liga o computador na tomada", correto: false },
            { opcao: "A caixa de som interna do gabinete", correto: false },
        ],
    },
    {
        question: "Como é chamado o processo de carregamento e inicialização do Sistema Operacional quando o computador é ligado?",
        respostas: [
            { opcao: "Formatting", correto: false },
            { opcao: "Boot (ou Bootstrapping)", correto: true },
            { opcao: "Download", correto: false },
            { opcao: "Backup", correto: false },
        ],
    }
];

function adicionarCaixaDeTexto(x) {
    const titulo2 = document.querySelector('.titulo2')

    if (titulo2.innerHTML === 'Escolha o tipo de questão') {
        titulo2.innerHTML = 'Digite o seu nome de usuário'
    } else {
        titulo2.innerHTML = 'Escolha o seu nível de dificuldade'
    }

    const botoes = document.querySelector('.div-dos-botoes')

    console.log(x);
    materia = x;

    botoes.innerHTML = `<input type="text" id="caixa-de-texto" name="nome" placeholder="Digite seu nome"> 
    <button id = "jogar" onclick = "jogar('${x}');">JOGAR</button>`;
}

function mostrarQuestao(x) {
    if (x === 'Algoritmos') {
        var questaoAtual = questoesAlgoritmos[questaoAtualIndice];
    } else if (x === 'Redes') {
        var questaoAtual = questoesRedes[questaoAtualIndice];
    } else {
        var questaoAtual = questoesSO[questaoAtualIndice];
    }

    const enunciadoElemento = document.getElementById('questao');
    const numQuestaoElemento = document.getElementById('numero-questao')
    const containerAlternativas = document.getElementById('container-alternativas');

    numQuestaoElemento.innerHTML = `Questão ${questaoAtualIndice + 1}`;
    enunciadoElemento.innerHTML = questaoAtual.question;

    containerAlternativas.innerHTML = "";

    questaoAtual.respostas.forEach(resposta => {
        const novoBotao = document.createElement('button');
        novoBotao.innerHTML = resposta.opcao;
        novoBotao.classList.add('btn');

        novoBotao.onclick = (e) => {
            if (x === 'Algoritmos') {
                verificarResposta(resposta.correto, e.target, 'Algoritmos');
            } else if (x === 'Redes') {
                verificarResposta(resposta.correto, e.target, 'Redes');
            } else {
                verificarResposta(resposta.correto, e.target, 'SO')
            }
        };

        containerAlternativas.appendChild(novoBotao);
    });
}

function jogar(x) {
    console.log(x);
    var input = document.getElementById('caixa-de-texto');
    nome = input.value;
    const corpo = document.querySelector('#corpo')
    corpo.innerHTML = `
    <div class="topo">
        <div id="nome">${nome}</div>
        <div id="numero-questao"></div>
        <div id="pontuacao">Acertos: ${acertos} | Pontos: ${pontuacao}</div>
    </div>

    <div class="enunciado">
        <p id="questao">Esse é o enunciado da questão</p>
    </div>

    <div id = "container-alternativas"class="alternativas"></div>
      
    <div class = "barra">
        <div></div>
    </div>
      `;

    questaoAtualIndice = 0;
    acertos = 0;
    pontuacao = 0;

    mostrarQuestao(x);
    barraProgresso(x);
}

function verificarResposta(foiCorreto, botaoClicado, disciplina) {
    clearInterval(timerIntervalo);

    const botoes = document.querySelectorAll('.btn');

    let lista;
    if (disciplina === 'Algoritmos') lista = questoesAlgoritmos;
    else if (disciplina === 'Redes') lista = questoesRedes;
    else lista = questoesSO;

    const questaoAtual = lista[questaoAtualIndice];

    botoes.forEach(btn => {
        btn.disabled = true;

        const respostaDados = questaoAtual.respostas.find(r => r.opcao === btn.innerHTML);
        if (respostaDados && respostaDados.correto) {
            btn.classList.add('correto');
        }
    });

    if (botaoClicado && !foiCorreto) {
        botaoClicado.classList.add('errado');
    }

    if (foiCorreto) {
        acertos++;

        const tempoMaximo = 15000;
        const tempoRestante = tempoMaximo - tempoDeResposta;
        const bonus = Math.round(tempoRestante / 100);
        pontuacao += 100 + bonus;
    }

    document.getElementById('pontuacao').innerHTML = `Acertos: ${acertos} | Pontos: ${pontuacao}`;

    setTimeout(() => {
        questaoAtualIndice++;
        if (questaoAtualIndice < lista.length) {
            mostrarQuestao(disciplina);
            barraProgresso(disciplina);
        } else {
            finalizarJogo();
        }
    }, 800);
}

function finalizarJogo() {
    const corpo = document.querySelector('#corpo');

    corpo.innerHTML = `
        <div class="resultado-final">
            <h2>Fim de jogo, ${nome}!</h2>
            <p>Acertos: ${acertos}</p>
            <p>Pontuação: ${pontuacao}</p>
            <button class="botao-final" onclick="location.reload()">Jogar Novamente</button>
        </div>
    `;
}

function barraProgresso(disciplina) {
    clearInterval(timerIntervalo);
    tempoDeResposta = 0;

    const barra = document.querySelector(".barra div");
    let progresso = 0;
    const tempoTotal = 15000;
    const passo = 100;

    barra.style.width = "0%";
    barra.style.opacity = "1";
    barra.classList.remove("perigo");

    timerIntervalo = setInterval(() => {
        tempoDeResposta += passo;
        progresso += (passo / tempoTotal) * 100;
        const hue = 120 - (progresso * 1.2);
        barra.style.background =
            `linear-gradient(
                90deg,
                hsl(${hue},100%,55%),
                hsl(${Math.max(hue-20,0)},100%,40%)
            )`;

        if (progresso >= 100) {
            barra.style.width = "100%";
            clearInterval(timerIntervalo);
            verificarResposta(false, null, disciplina);
            return;
        }

        barra.style.width = progresso + "%";

        if(progresso >= 80){
            barra.classList.add("perigo");

            barra.style.opacity =
                barra.style.opacity === "1"
                    ? "0.35"
                    : "1";
        }
        else {
            barra.classList.remove("perigo");
            barra.style.opacity = "1";
        }
    }, passo);
}
