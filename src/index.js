// Definindo uma matriz com o nome e a quantidade de experiência do herói
let herois = [
    ["Anitta", 5000],
    ["Lady gaga", 7000],
    ["Rosalía", 10000]
];

// Percorrendo a matriz e classificando o nível de cada herói
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i][0];
    let xp = herois[i][1];

    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo a mensagem
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
