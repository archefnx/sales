import React, { useEffect, useState } from 'react';
import 'smart-webcomponents/source/modules/smart.grid.js';
import 'smart-webcomponents/source/styles/smart.default.css';
import { Button } from 'smart-webcomponents-react/button';
import { getProducts, getSeller } from '../http/api';
import Modal from '../components/modal';

const Product = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const dataSource = new window.Smart.DataAdapter({
      dataSource: data,
      dataFields: [
        'name: string'
      ]
    });

    const columns = [
      { label: 'Название', dataField: 'name', dataType: 'string' }
    ];

    const grid = document.querySelector('smart-grid');
    grid.dataSource = dataSource;
    grid.columns = columns;
    grid.filtering = {
      enabled: true,
      filterRow: {
        visible: true
      }
    };
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await getProducts();
      setData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных продавца: ", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    fetchData(); // Пересобрать данные после закрытия модального окна
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
      <Button onClick={() => setIsModalOpen(true)}>Добавить нового продавца</Button>
      <smart-grid style={{ width: '100%', height: '400px' }}></smart-grid>
    </>
  );
};

export default Product;
