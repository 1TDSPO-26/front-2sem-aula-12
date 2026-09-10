
import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaProdutos";
import { Link } from "react-router";
Link


export default function Produtos() {
  document.title = "Produtos"

 const [produtos, setProdutos] = useState<TipoProduto[]>([])

 useEffect(() => {
  setProdutos(listaProdutos);
  }, [])

  return (
    <main>
      <h2>Produtos</h2>

    <table border={1} cellPadding={10} style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#be7310', color: '#050505' }}>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Descrição</th>
          <th>Avatar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nome}</td>
            <td>{p.preco.toFixed(2)}</td>
            <td>{p.descricao}</td>
            <td><img src={p.avatar} alt={p.nome} width={60} height={60} style={{ objectFit: 'cover' }} /></td>
            <td><Link to={`/produtos/${p.id}`}>Editar</Link></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
    </tfoot>
    <tr>
      <td>Quantidade de produtos - {produtos.length}</td>
    </tr>
    </table>
  
    </main>
  )
}
