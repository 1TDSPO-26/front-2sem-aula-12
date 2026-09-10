import { useParams } from "react-router";


//TAREFA 1: para a AULA do dia 16/09/2026
//Recuperar o produto selecionado em Produtos que envia o id do produto
// Você deve utilizar os parâmetros do react-router
// e o id do produto para o componente EditarProdutos
// Você deve utilizar os HOOK useParams para recuperar o id do produto, o HOOK useState para
// armazenar o produto e o HOOK useEffect para atualizar o produto quando o id mudar.


const listaProdutos = [
  { id: 1, nome: "Produto 1", preco: 10.0 },
  { id: 2, nome: "Produto 2", preco: 20.0 },
  { id: 3, nome: "Produto 3", preco: 30.0 },
];

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const { id } = useParams<string>();

  const produto = listaProdutos.find((p) => p.id === Number(id));

  return (
    <main style={{ padding: '20px' }}>
      <h2>Editar produtos</h2>
      <div>
        {produto ? (
          <div>
          <p>Nome do Produto: {produto.nome}</p>
          <p> R$: {produto.preco}</p>
          </div>
        ) : (
          <p>Produto não encontrado!</p>
        )}
        <p>Identificador recebido pela rota: <strong>{id}</strong></p>
      </div>
    </main>
  );
}
