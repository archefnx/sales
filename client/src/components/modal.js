import React, { useState } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { createSeller } from '../http/api';

const Modal = ({ isOpen, onClose, onAddSeller }) => {
  const [newSellerName, setNewSellerName] = useState('');

  const handleAddSeller = async () => {
    try {
      const response = await createSeller(newSellerName);

      onClose(); 
      if (onAddSeller) {
        onAddSeller(response.data);
      }
    } catch (error) {
      console.error("Ошибка при добавлении продавца: ", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal" style={{ display: 'block', position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <div className="modal-content" style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%', borderRadius: '8px' }}>
            <span className="close" style={{ color: '#aaa', float: 'right', fontSize: '28px', fontWeight: 'bold' }} onClick={onClose}>&times;</span>
            <div>
              <label htmlFor="sellerName">Наименование продавца:</label>
              <input type="text" id="sellerName" value={newSellerName} onChange={(e) => setNewSellerName(e.target.value)} style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>
            <Button onClick={handleAddSeller} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Добавить продавца</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
