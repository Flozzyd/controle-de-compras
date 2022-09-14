//Array com objetos que possuem atributos
let list =[
    {descricao:"arroz", quantidade:"1", preco:"5.40"},
    {descricao:"feijão", quantidade:"1", preco:"9"},
    {descricao:"ovos", quantidade:"10", preco:"0.30"}
]
//função que faz a variavel percorrer o array e encontrar no objeto o atributo 'preço' e o atributo 'quantidade' e multiplica eles, retornando o total de todos os objetos criados
function valorDaCompra (list){
    let total = 0;
    for (let elemento of list){
        total += elemento.preco * elemento.quantidade;
    }
    return total;
}

//função que define e insere no documento html uma tabela com os valores dos objetos instaurados no array
function setList (list){
    let table = "<thead><tr><td>Descrição</td><td>Quantidade</td><td>Preco</td><td>Ação</td></tr></thead><tbody>"
    for (let key in list){
        table += '<tr><td>' + formatDesc(list[key].descricao) + '</td><td>' + list[key].quantidade + '</td><td>' + formatPreco(list[key].preco) +'</td><td>Editar | Remover</td></tr>'
    }
    table += '</tbody>'
    document.getElementById("listTable").innerHTML= table
}

//função que seleciona o elementro descrição e atribui a ele, em primeiro momento, todos os caracteres em letra minuscula por meio do '.toLowerCase()' e, em seguida, atraves do '.charAt(0) determinando a primeira posição com o valor maiusculo usando o metodo .toUpperCase()' e soma ao restante que tinha sido transformado em valores de letra minuscula
function formatDesc (descricao) {
    let str = descricao.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
//formata o preço do produto tranformando em parsetfloat e fixando somente duas casas decimais depois da virgula, substituir o ponto por , e concatena o $ com o valor retornado
function formatPreco(preco){
    let str = parseFloat(preco).toFixed(2) + "";
    str = str.replace(".",",");
    str = "$" + str
    return str

}

function addData(){
    let descricao = document.querySelector('#desc').value;
    let quantidade = document.querySelector('#quantidade').value;
    let preco = document.querySelector('#preco').value;
    list.unshift({"descricao":descricao, "quantidade":quantidade, "preco":preco});
    setList(list)   
}

setList(list);
console.log (valorDaCompra(list));