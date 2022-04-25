let pessoas = [
    {nome:'Paulo', idade:23, altura: 1.77, sexo:'Masculino', peso:70, cidade:'Santo Andre', estado: 'SP'},
    {nome:'Bárbara', idade:26, altura: 1.65, sexo:'Feminino', peso:60, cidade:'Novo Hamburgo', estado: 'RS'},
    {nome:'Gustavo', idade:31, altura: 1.90, sexo:'Masculino', peso:77,cidade:'Curitiba', estado: 'PR'},
    {nome:'Lais', idade:28, altura: 1.64, sexo:'Feminino', peso:71, cidade:'Goiânia', estado: 'GO'},
    {nome:'Pedro', idade:34, altura: 1.78, sexo:'Masculino', peso:75, cidade:'Rio de Janeiro', estado: 'RJ'},
    {nome:'Arthur', idade:31, altura: 1.67, sexo:'Masculino', peso:72, cidade:'São Paulo', estado: 'SP'},
    {nome:'Douglas', idade:36, altura: 1.74, sexo:'Masculino', peso:76, cidade:'Rio de Janeiro', estado: 'RJ'},
    {nome:'Lina', idade:30, altura: 1.75, sexo:'Feminino', peso:78, cidade:'São paulo', estado: 'SP'},
    {nome:'Jade', idade:22, altura: 1.57, sexo:'Feminino', peso:63, cidade:'São paulo', estado: 'SP'},
    {nome:'Eslovênia', idade:23, altura: 1.56, sexo:'Feminino', peso:64, cidade:'Caruaru', estado: 'PE'},
    {nome:'Eliezer', idade:31, altura: 1.80, sexo:'Masculino', peso:78, cidade:'São paulo', estado: 'SP'}
];
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');

const exibirLista = () =>{
    lista.innerHTML = '';
    let linha;
    let coluna;

    for (let i = 0; i < pessoas.length; i++) {

        linha = document.createElement('tr')
        let {nome,idade,altura,sexo,peso,cidade,estado} = pessoas[i]

        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(nome))
        linha.appendChild(coluna)
        lista.appendChild(linha)

        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(idade))
        linha.appendChild(coluna)
        lista.appendChild(linha)


        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(altura))
        linha.appendChild(coluna)


        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(sexo))
        linha.appendChild(coluna)

        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(peso))
        linha.appendChild(coluna)

        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(cidade))
        linha.appendChild(coluna)

        coluna = document.createElement('td')
        coluna.appendChild(document.createTextNode(estado))
        linha.appendChild(coluna)
    }
}

btn.onclick = exibirLista