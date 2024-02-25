import React, { useState, useEffect } from 'react';
import { Button } from 'smart-webcomponents-react/button';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';


import { getProducts, getSeller, createCheque } from '../http/api';

const Modal = ({ isOpen, onClose, onAddSeller }) => {
    const [newSellerName, setNewSellerName] = useState('');
    const [sellers, setSellers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSeller, setSelectedSeller] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responseSellers = await getSeller(); // Получение всех продавцов
          const responseProducts = await getProducts(); // Получение всех продуктов
          setSellers(responseSellers.data); // Обновление состояния продавцов
          setProducts(responseProducts.data); // Обновление состояния продуктов
        } catch (error) {
          console.error("Ошибка при получении данных продавца или продукта: ", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleAddSeller = async () => {
        try {
          const response = await createCheque({
            name: newSellerName, // Передача Наименования продавца
            productId: selectedProduct, // Передача ID продукта
            sellerId: selectedSeller // Передача ID продавца
          });
      
          onClose(); // Закрытие модального окна
      
          if (onAddSeller) {
            onAddSeller(response.data); // Вызов колбэка onAddSeller с добавленным чеком
          }
        } catch (error) {
          console.error("Ошибка при добавлении чека: ", error);
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
              <div>
                <label htmlFor="sellerSelect">Выберите продавца:</label>
                <DropDownList 
                  id="sellerSelect" 
                  dataSource={sellers} 
                  displayMember={'name'} 
                  valueMember={'id'} 
                  filterable={true} 
                  onChange={(e) => setSelectedSeller(e.target.value)} 
                  style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
              </div>
              <div>
                <label htmlFor="productSelect">Выберите продукт:</label>
                <DropDownList 
                  id="productSelect" 
                  dataSource={products} 
                  displayMember={'name'} 
                  valueMember={'id'} 
                  filterable={true} 
                  onChange={(e) => setSelectedProduct(e.target.value)} 
                  style={{ marginBottom: '10px', width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
              </div>
              <Button onClick={handleAddSeller} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Добавить продавца</Button>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  