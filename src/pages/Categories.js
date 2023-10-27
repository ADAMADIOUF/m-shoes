import React, { useState } from 'react';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { FaList, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [isListView, setListView] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: products, isLoading: loading, error } = useGetProductsQuery();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter((item) => item.categories === selectedCategory)
    : products;

  const filteredByPrice = filteredProducts.filter((product) => {
    const price = parseFloat(product.price);
    return price >= priceRange[0] && price <= priceRange[1];
  });

  return (
    <>
      <div className='container-filter'>
        <div className='button-grid-list'>
          <button
            onClick={() => setListView(true)}
            className={isListView ? 'active' : ''}
          >
            <FaList />
          </button>
          <button
            onClick={() => setListView(false)}
            className={!isListView ? 'active' : ''}
          >
            <FaTh />
          </button>
        </div>
        <div>
          <form>
            <label htmlFor='priceRange'>Prix</label>

            <input
              type='range'
              id='priceRange'
              min={0}
              max={100000}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseFloat(e.target.value)])
              }
            />
          </form>
        </div>
      </div>

      <div className='product-container'>
        <article>
          <h3>Categories</h3>
          <div className='category-buttons'>
            <button
              onClick={() => setSelectedCategory(null)} // Set selectedCategory to null for the "All" button
              className={selectedCategory === null ? 'active-category' : ''} // Check if selectedCategory is null
            >
              All
            </button>
            {Array.from(new Set(products.map((item) => item.categories))).map(
              (category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    category === selectedCategory ? 'active-category' : ''
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>
        </article>
        <article>
          {filteredByPrice.length === 0 ? (
            <div className='no-products-message'>
              Aucun produit trouvé avec un prix de 0.
            </div>
          ) : isListView ? (
            <div className='categories-products'>
              {filteredByPrice.map((product, index) => (
                <div key={index}>
                  <div className='categories-products-info'>
                    <img src={product.img} alt='' className='categories-img' />
                    <div className='categories-products-details'>
                      <h3>{product.title}</h3>
                      <p>
                        Prix: {product.price} <span>CFA</span>
                      </p>
                      <Link to={`/product/${product.id}`}>
                        <button className='btn'>choix des options</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='categories-products-grid'>
              {filteredByPrice.map((product, index) => (
                <div key={index} className='grid-item'>
                  <img src={product.img} alt='' className='categories-img' />
                  <h3>{product.title}</h3>
                  <p>
                    Prix: {product.price} <span>CFA</span>
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <button className='btn'>choix des options</button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </>
  )
};

export default Categories;
