const melhorSeleção = {
    probablyWords: ["Qual", "Quais", "a", "o", "as", "os", "melhor", "melhores", "ótima", "excelente", "seleção", "equipe", "time", "de", "volei", "vôlei", "voleibol", "volleyball", "do", "da", "dos", "das", "mundo", "global", "internacional"],
    matched: 0,
}

//Exemplo de pergunta: "Quais as posições do vôlei?"
const posicoesVolei = {
    probablyWords: ["Qual", "Quais", "o", "a", "os", "as", "posições", "posição", "função", "funções", "do", "da", "dos", "das", "volei", "vôlei", "voleibol", "volleyball"],
    matched: 0,
}

//Exemplo de pergunta: "Quais as regras do vôlei?"
const regrasVolei = {
    probablyWords: ["Quais", "Qual", "as", "os", "a", "o", "regras", "regra", "do", "da", "dos", "das", "volei", "vôlei", "voleibol", "volleyball"],
    matched: 0,
}

//Exemplo de pergunta: "Quais os tipos de saque do volei?"
const saquesVolei = {
    probablyWords: ["Quais", "Qual", "os", "as", "o", "a", "tipos", "tipo", "de", "saque", "saques", "do", "da", "dos", "das", "volei", "vôlei", "voleibol", "volleyball"],
    matched: 0,
}

//Caso haja perguntas fora do tema
const papoFurado = {
    probablyWords: ["oi", "tudo", "bem", "quem", "é", "você", "vc", "piada", "idade", "sua", "onde", "mora", "gosta", "de", "que", "futebol", "política", "receitas", "notícias", "negócios", "tecnologia", "história", "ciência", "saúde"],
    matched: 0,
}

export const todosBancos = [melhorSeleção, posicoesVolei, regrasVolei, saquesVolei, papoFurado]

//Respostas
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("Históricamente a melhor seleção de volei do mundo é a seleção Brasileira.")
        case 1:
            return console.log("As posições do vôlei são: Levantador, Oposto, Ponteiro, Central e Líbero.")
        case 2:
            return console.log("Temos algumas regras como: 5 sets, proibido mais de um toque consecutivo na bola, cada equipe tem direito a tres toques antes de devolver a bola, etc...")
        case 3:
            return console.log("Os tipos de saque saque são: Saque por cima, saque viagem, saque flutuante, saque por baixo, saque jornada nas estrelas.")
        default:
            return console.log("Infelizmente não posso ajudá-lo com este assunto. Mas se quiser fazer uma pergunta sobre volei posso ser útil.")
    }
}

//Deduzir resposta
export function mostProbablyQuestion() {
    let matches = [
        melhorSeleção.matched, 
        posicoesVolei.matched, 
        regrasVolei.matched,
        saquesVolei.matched, 
        papoFurado.matched
    ]

    return showAnswer(matches.indexOf(Math.max(...matches)))
}