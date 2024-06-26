import React, { useEffect, useState } from 'react';
// products.json dosyasını doğrudan import ediyoruz
import productsData from '../products.json';

const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetchProducts fonksiyonuna gerek kalmadan, doğrudan productsData'yı kullanıyoruz
    const plushies = productsData.filter(product => product.category === 'PLUSHIES');
    setProducts(plushies);
  }, []);

  return (
    <div>
      <h2>Plushies TEST</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;