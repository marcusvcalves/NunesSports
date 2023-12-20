import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';
import ProductTable from './product_table';
import CreateProductModal from './create_product_modal';
import EditProductModal from './edit_product_modal';


const Table = () => {
  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    price: '',
  });
  const [editProductId, setEditProductId] = useState(null);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:5286/api/v1/products');
      const productsData = await response.json();

      setProducts(productsData);
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);

    setFormData({
      id: productId,
      name: productToEdit.name,
      code: productToEdit.code,
      description: productToEdit.description,
      price: productToEdit.price,
    });

    setEditProductId(productId);

    setShowEditModal(true);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setFormData({
      name: '',
      code: '',
      description: '',
      price: '',
    });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateProduct = async () => {
    try {
      const response = await fetch('http://localhost:5286/api/v1/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        getProducts();
        handleCloseModal();
      } else {
        console.error('Erro ao criar o produto:', response.status);
      }
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5286/api/v1/products/${editProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        getProducts();
        handleCloseEditModal();
      } else {
        console.error('Erro ao atualizar o produto:', response.status);
      }
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5286/api/v1/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        getProducts();
      } else {
        console.error('Erro ao excluir o produto:', response.status);
      }
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="table-buttons">
        <Button variant="success" onClick={handleShowModal}>
          Criar Produto
        </Button>
      </div>

      <ProductTable
        products={products}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />

      <CreateProductModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleCreateProduct={handleCreateProduct}
      />

      <EditProductModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleUpdateProduct={handleUpdateProduct}
      />
    </>
  );
};

export default Table;
