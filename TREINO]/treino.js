
const nome = "André"
function getEventoAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 3);
    
    let evento;
    if (numeroAleatorio === 0) {
        evento = 'Maratona';
    } else if (numeroAleatorio === 1) {
        evento = 'Triathlon';
    } else {
        evento = 'Pentathlon';
    }
    
    return evento;
}
const evento = getEventoAleatorio();
console.log(`${nome} vai participar do evento: ${evento}`);


function getDiasTreino(evento){
    if (evento === "Maratona"){
       return "Maratona, então treine  50 dias"
    } else if (evento === "Triathlon"){
        evento = "Triathlon, então treine 100 dias"
    } else (evento === 'Pentathlon')
}
console.log(` voce participara do evento ${evento}`)


function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento de ${evento}.`);
}

function logTempo(nome, dias) {
    console.log(`${nome} vai treinar por ${dias} dias.`);
}
const dias = Math.floor(Math.random() * 30) + 1; 

logEvento(nome, evento);
logTempo(nome, dias);



