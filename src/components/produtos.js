import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    console.log('Fazendo requisição para a API');
    axios.get('/ServerIntegracao/PesquisaProduto', {
      headers: {
        'Content-Type': 'application/json',
        'X-Embarcadero-App-Secret': 'DE1BA56B-43C5-469D-9BD2-4EB146EB8473'
      },
      params: {
        Grupo: '264',
        Empresa: '570',
        Token: '9986PTKHUM6DL9X863TU',
        TipoPesquisa: 'G',
        Campo: '',
        Valor: '',
        limite: '3',
        Paginacao: '1'
      }
    })
    .then(response => {
      console.log('Resposta da API:', response.data);  // Verifique se os dados estão sendo retornados corretamente
      setProdutos(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar os produtos:', error);
    });
  }, []);

  return (
    <div>
      {produtos.length > 0 ? (
        <ul>
          {produtos.map(produto => (
            <li key={produto.IDProduto}>
              <h2>{produto.Produto}</h2>
              <p>Preço: {produto.Varejo}</p>
              <p>Quantidade: {produto.Qtde}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando produtos...</p>
      )}
    </div>
  );
};

export default Produtos;

