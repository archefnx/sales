import React, { useEffect } from 'react';
// Убедитесь, что вы импортировали Grid и стили через ваш entry-point файл или напрямую здесь
import 'smart-webcomponents/source/modules/smart.grid.js';
import 'smart-webcomponents/source/styles/smart.default.css';

const Seller = () => {
  useEffect(() => {
    // Инициализация данных для грида
    const data = [
      { id: 1, name: 'Товар 1', price: 100 },
      { id: 2, name: 'Товар 2', price: 200 },
      // Добавьте больше данных согласно вашим требованиям
    ];

    // Настройка источника данных
    const dataSource = new window.Smart.DataAdapter({
      dataSource: data,
      dataFields: [
        'id: number',
        'name: string',
        'price: number'
      ]
    });

    // Настройка колонок грида
    const columns = [
      { label: 'ID', dataField: 'id', dataType: 'number' },
      { label: 'Название', dataField: 'name', dataType: 'string' },
      { label: 'Цена', dataField: 'price', dataType: 'number', cellsFormat: 'c2' }
    ];

    // Создание экземпляра грида
    const grid = document.querySelector('smart-grid');
    grid.dataSource = dataSource;
    grid.columns = columns;
  }, []);

  return <smart-grid style={{ width: '100%', height: '400px' }}></smart-grid>;
};

export default Seller;
