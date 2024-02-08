const perguntas = [
    {
      pergunta: "Qual é o nome do personagem principal de The Office?",
      respostas: [
        "a) Jim Halpert",
        "b) Michael Scott",
        "c) Dwight Schrute"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da empresa onde se passa a série The Office?",
      respostas: [
        "a) Dunder Mifflin",
        "b) Scranton Paper Company",
        "c) Dundler Muffler"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o gerente regional da filial da Dunder Mifflin em Scranton?",
      respostas: [
        "a) Jim Halpert",
        "b) Michael Scott",
        "c) Pam Beesly"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do programa de televisão que Michael Scott queria começar após deixar a Dunder Mifflin?",
      respostas: [
        "a) Scott's Tots",
        "b) Threat Level Midnight",
        "c) The Michael Scott Show"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o apelido carinhoso que Jim Halpert dá a Pam Beesly?",
      respostas: [
        "a) Pamy",
        "b) Bees",
        "c) Pamzinha"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do chefe de Dwight Schrute na segunda temporada?",
      respostas: [
        "a) Jan Levinson",
        "b) Ryan Howard",
        "c) Charles Miner"
      ],
      correta: 2
    },
    {
      pergunta: "Qual personagem é conhecido por sua frase 'That's what she said'?",
      respostas: [
        "a) Jim Halpert",
        "b) Dwight Schrute",
        "c) Michael Scott"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do ator que interpreta Michael Scott?",
      respostas: [
        "a) John Krasinski",
        "b) Rainn Wilson",
        "c) Steve Carell"
      ],
      correta: 2
    },
    {
      pergunta: "Qual personagem é dono de um bobblehead de si mesmo na série?",
      respostas: [
        "a) Jim Halpert",
        "b) Michael Scott",
        "c) Dwight Schrute"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da recepcionista da Dunder Mifflin em Scranton?",
      respostas: [
        "a) Kelly Kapoor",
        "b) Erin Hannon",
        "c) Angela Martin"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }