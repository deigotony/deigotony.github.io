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
        question: "O que é um laço de repetição?",
        respostas: [
            { opcao: "Um acessório para cabelo, roupas e várias outras coisas", correto: false },
            { opcao: "Um trecho de código que se repete até que algo o interrompa", correto: true },
            { opcao: "Um trecho de código que sempre roda infinitamente", correto: false },
            { opcao: "Um trecho de código que só é executado se uma condição for verdadeira", correto: false },
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
    },
];

const questoesRedes = [
    {
        question: "Questão sobre Redes",
        respostas: [
            { opcao: "falsa", correto: false },
            { opcao: "verdadeira", correto: true },
            { opcao: "falsa", correto: false },
        ],
    },
    {
        question: "Qual é a melhor turma de informática do IFPB?",
        respostas: [
            { opcao: "1º A", correto: false },
            { opcao: "1º B", correto: false },
            { opcao: "2º A", correto: false },
            { opcao: "2º B", correto: false },
            { opcao: "3º", correto: true }
        ],
    },
    {
        question: "Qual é a melhor instituição de ensino médio de Campina Grande?",
        respostas: [
            { opcao: "Motiva", correto: false },
            { opcao: "IFPB", correto: true },
            { opcao: "ECIT", correto: false },
            { opcao: "UFCG", correto: false },
        ],
    },
    {
        question: "Quanto é 10 - 3?",
        respostas: [
            { opcao: "9", correto: false },
            { opcao: "8", correto: false },
            { opcao: "7", correto: true },
        ],
    },
    {
        question: "Quanto é 5 * 3?",
        respostas: [
            { opcao: "15", correto: true },
            { opcao: "20", correto: false },
            { opcao: "25", correto: false },
        ],
    },
    {
        question: "Em 1665, Isaac Newton",
        respostas: [
            { opcao: "Aviadou a luz", correto: false },
            { opcao: "Mostrou a dispersão da luz com um prisma", correto: true },
            { opcao: "OuuoOoOooOoeeeeeeeeaaaAAAuUuuu", correto: false },
            { opcao: "Criou a capa do Pink Floyd", correto: false },
            { opcao: "Criou o arco-íris", correto: false },
        ],
    },
    {
        question: "Quantos cursos técnicos de ENSINO MÉDIO existem no IFPB Campus Campina Grande?",
        respostas: [
            { opcao: "3", correto: false },
            { opcao: "4", correto: false },
            { opcao: "5", correto: true },
            { opcao: "6", correto: false },
        ],
    },
    {
        question: "Qual é o melhor curso do IFPB?",
        respostas: [
            { opcao: "Edificações", correto: false },
            { opcao: "Informática", correto: true },
            { opcao: "Mineração", correto: false },
            { opcao: "Petróleo e Gás", correto: false },
            { opcao: "Química", correto: false }
        ]
    }

];

const questoesSO = [
    {
        question: "Questão sobre Sistemas Operacionais",
        respostas: [
            { opcao: "falsa", correto: false },
            { opcao: "verdadeira", correto: true },
            { opcao: "falsa", correto: false },
        ],
    },
    {
        question: "Qual é a melhor turma de informática do IFPB?",
        respostas: [
            { opcao: "1º A", correto: false },
            { opcao: "1º B", correto: false },
            { opcao: "2º A", correto: false },
            { opcao: "2º B", correto: false },
            { opcao: "3º", correto: true }
        ],
    },
    {
        question: "Qual é a melhor instituição de ensino médio de Campina Grande?",
        respostas: [
            { opcao: "Motiva", correto: false },
            { opcao: "IFPB", correto: true },
            { opcao: "ECIT", correto: false },
            { opcao: "UFCG", correto: false },
        ],
    },
    {
        question: "Quanto é 10 - 3?",
        respostas: [
            { opcao: "9", correto: false },
            { opcao: "8", correto: false },
            { opcao: "7", correto: true },
        ],
    },
    {
        question: "Quanto é 5 * 3?",
        respostas: [
            { opcao: "15", correto: true },
            { opcao: "20", correto: false },
            { opcao: "25", correto: false },
        ],
    },
    {
        question: "Em 1665, Isaac Newton",
        respostas: [
            { opcao: "Aviadou a luz", correto: false },
            { opcao: "Mostrou a dispersão da luz com um prisma", correto: true },
            { opcao: "OuuoOoOooOoeeeeeeeeaaaAAAuUuuu", correto: false },
            { opcao: "Criou a capa do Pink Floyd", correto: false },
            { opcao: "Criou o arco-íris", correto: false },
        ],
    },
    {
        question: "Quantos cursos técnicos de ENSINO MÉDIO existem no IFPB Campus Campina Grande?",
        respostas: [
            { opcao: "3", correto: false },
            { opcao: "4", correto: false },
            { opcao: "5", correto: true },
            { opcao: "6", correto: false },
        ],
    },
    {
        question: "Qual é o melhor curso do IFPB?",
        respostas: [
            { opcao: "Edificações", correto: false },
            { opcao: "Informática", correto: true },
            { opcao: "Mineração", correto: false },
            { opcao: "Petróleo e Gás", correto: false },
            { opcao: "Química", correto: false }
        ]
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

        const tempoMaximo = 10000;
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
    enviarResultado();

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
    const tempoTotal = 10000;
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

function enviarResultado() {
    const url = "https://script.google.com/macros/s/AKfycbyAkuvxExKhIlKrhEXecMj7HKe1mQ2v26-cdceC1h_oCJm75mO7S1dfcHNXHDwVThERjg/exec";

    // Criamos um formulário simples (evita erro de JSON no Apps Script)
    const formData = new URLSearchParams();
    formData.append("nome", nome);
    formData.append("materia", materia);
    formData.append("acertos", acertos);
    formData.append("totalQuestoes", questaoAtualIndice);
    formData.append("navegador", navigator.userAgent);

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData
    })
    .then(() => {
        console.log("Resultado enviado com sucesso!");
    })
    .catch(err => {
        console.error("Erro ao enviar resultado:", err);
    });
}