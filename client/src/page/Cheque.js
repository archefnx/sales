import React, { useEffect, useState, useRef } from 'react';
import 'smart-webcomponents/source/modules/smart.grid.js';
import 'smart-webcomponents/source/styles/smart.default.css';
import { getCheque } from '../http/api';
import Modal from '../components/addCheque'; // Импортируем компонент Modal

const Cheque = () => {
  const [data, setData] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
  const gridRef = useRef(null); // Создаем ссылку на компонент smart-grid

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCheque(); 
        setData(response.data); 
      } catch (error) {
        console.error("Ошибка при получении данных продавца: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (gridRef.current) { // Проверяем, что gridRef.current существует
      const dataSource = new window.Smart.DataAdapter({
        dataSource: data.map(item => ({
          num: item.num,
          seller: item.seller.name, 
          product: item.product.name 
        })),
        dataFields: [
          'num: string',
          'seller: string',
          'product: string'
        ]
      });

      const columns = [
        { label: 'Номер', dataField: 'num', dataType: 'string' },
        { label: 'Продавец', dataField: 'seller', dataType: 'string' },
        { label: 'Продукт', dataField: 'product', dataType: 'string'}
      ];

      gridRef.current.dataSource = dataSource; // Устанавливаем dataSource через gridRef
      gridRef.current.columns = columns; // Устанавливаем columns через gridRef
      gridRef.current.filtering = {
        enabled: true,
        filterRow: {
          visible: true
        }
      };
    }
  }, [data]); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Добавить продавца</button> {/* Кнопка для открытия модального окна */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <smart-grid ref={gridRef} style={{ width: '100%', height: '400px' }}></smart-grid>
    </>
  );
};

export default Cheque;
