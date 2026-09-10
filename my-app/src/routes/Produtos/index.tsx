import { useEffect, useState } from "react"
import type { TipoProduto } from "../../types/types";
import { listaProdutos } from "../../data/listaProdutos";
import { Link } from "react-router";

export default function Produtos(){

    document.title = "Produtos"

    const[produtos, setProdutos] = useState<TipoProduto[]>([]);
    
    useEffect( ()=>{

        setProdutos(listaProdutos);

    },[] );

    return(
        <main>
            <h2>Produtos</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                        <th>Avatar</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map( ( p )=> (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.descricao}</td>
                            <td><img src={p.avatar} alt={p.descricao} /></td>
                            <td><Link to={`/editar-produtos/${p.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Quantidade de produtos = {produtos.length}</td>
                    </tr>
                </tfoot>
            </table>

        </main>
    )
}