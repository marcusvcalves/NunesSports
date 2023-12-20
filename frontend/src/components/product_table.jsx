import React from 'react';
import { Button } from 'react-bootstrap';

const ProductTable = ({ products, handleEditProduct, handleDeleteProduct }) => (
  <table className="product-table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Código</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {products &&
        products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.code}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="info" onClick={() => handleEditProduct(product.id)}>
                Editar
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
                Excluir
              </Button>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default ProductTable;
