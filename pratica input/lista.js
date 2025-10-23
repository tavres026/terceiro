let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista inicial:", listaDeAfazeres);
console.log("Primeiro item:", listaDeAfazeres[0]);
console.log("Total de afazeres:", listaDeAfazeres.length);

listaDeAfazeres.push("Fazer exercícios");
listaDeAfazeres.unshift("Agendar médico");
console.log("\nApós adicionar itens:", listaDeAfazeres);

let removidoFinal = listaDeAfazeres.pop();
console.log("\nAfazer removido do final:", removidoFinal);

let removidoInicio = listaDeAfazeres.shift();
console.log("Afazer removido do início:", removidoInicio);

console.log("Após remoções:", listaDeAfazeres);

let listaOrganizada = [...listaDeAfazeres];
listaOrganizada.sort();
console.log("\nLista organizada (A–Z):", listaOrganizada);

listaOrganizada.reverse();
console.log("Lista invertida (Z–A):", listaOrganizada);

console.log("\nLista original permanece inalterada:", listaDeAfazeres);
