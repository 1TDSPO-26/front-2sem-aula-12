import { useParams } from "react-router";

//TAREFA 1: Para a AULA do dia 16/09/2026
//Recuperar o produto selecionado em Produtos que envia o id do produto
//Você deve utilizar os parâmetros do react-router
//e o id do produto para o componente EditarProduto
//Você deve utilizar os HOOKS useParams para recuperar o id do produto, o HOOK useState para armazenar o produto e o HOOK useEffect para atualizar o produto quando o id mudar.


export default function EditarProduto() {
  //Modificar o titulo da pagina
  document.title = "Editar Produtos";

  const { id } = useParams<string>();

  const produto = listaProdutos.find((p) => p.id === Number(id));


  return (
    <main>
      <h2>
        Editar Produtos
      </h2>
      <div>

        {produto ? (
          <div>
            <p>Nome do Produto: {produto.nome} </p>
            <p>R$: {produto.preco} </p>
          </div>
        ) :
          (
            <p>Produto não encontrado!</p>
          )
        }

      </div>
    </main>
  )
}
