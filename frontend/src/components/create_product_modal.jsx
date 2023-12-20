import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const CreateProductModal = ({ showModal, handleCloseModal, formData, handleInputChange, handleCreateProduct }) => (
  <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Criar Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
    <Form.Group controlId="formProductName">
      <Form.Label>Nome</Form.Label>
      <Form.Control
        type="text"
        placeholder="Digite o nome do produto"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
    </Form.Group>

    <Form.Group controlId="formProductCode">
      <Form.Label>Código</Form.Label>
      <Form.Control
        type="text"
        placeholder="Digite o código do produto"
        name="code"
        value={formData.code}
        onChange={handleInputChange}
      />
    </Form.Group>

    <Form.Group controlId="formProductDescription">
      <Form.Label>Descrição</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Digite a descrição do produto"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
    </Form.Group>

    <Form.Group controlId="formProductPrice">
      <Form.Label>Preço</Form.Label>
      <Form.Control
        type="text"
        placeholder="Digite o preço do produto"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
      />
    </Form.Group>
  </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Fechar
      </Button>
      <Button variant="primary" onClick={handleCreateProduct}>
        Criar Produto
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CreateProductModal;
