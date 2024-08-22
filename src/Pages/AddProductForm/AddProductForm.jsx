import React, { useState, useEffect } from 'react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    id: '', // will be set to the current date and time
    title: '',
    img: '',
    img2: '',
    category: '',
    oldPrice: '',
    price: '', // This will now hold the user-inputted price or calculated price
    sale: '',
    isSale: false,
    isFeatured: false,
    isTrending: false,
    colors: [],
    fittings: '',
    size: [],
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Set id to the current date and time when the component is first rendered
    const currentId = new Date().toISOString();
    setProductData((prevData) => ({ ...prevData, id: currentId }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setProductData({ ...productData, [name]: checked });
    } else if (name === 'colors' || name === 'size') {
      const values = value.split(',').map((item) => item.trim());
      setProductData({ ...productData, [name]: values });
    } else {
      setProductData({ ...productData, [name]: value });
    }

    // Recalculate the price if the sale checkbox is checked
    if (name === 'sale' || name === 'oldPrice') {
      if (productData.isSale) {
        const newPrice = (value * (1 - productData.sale / 100)).toFixed(2);
        setProductData((prevData) => ({ ...prevData, price: newPrice }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!productData.title || !productData.img || !productData.category || !productData.price) {
      setErrorMessage('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productData,
          price: parseFloat(productData.price),
          oldPrice: parseFloat(productData.oldPrice),
          sale: productData.isSale ? parseFloat(productData.sale) : 0,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setProductData({
          id: new Date().toISOString(), // Reset id to the current date and time for the next product
          title: '',
          img: '',
          img2: '',
          category: '',
          oldPrice: '',
          price: '',
          sale: '',
          isSale: false,
          isFeatured: false,
          isTrending: false,
          colors: [],
          fittings: '',
          size: [],
        });
      } else {
        setErrorMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Product</h2>
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="hidden" name="id" value={productData.id} />

        <div style={styles.formGroup}>
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="img">Image URL *</label>
          <input
            type="text"
            id="img"
            name="img"
            value={productData.img}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="img2">Secondary Image URL</label>
          <input
            type="text"
            id="img2"
            name="img2"
            value={productData.img2}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="category">Category *</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="oldPrice">Old Price *</label>
          <input
            type="number"
            id="oldPrice"
            name="oldPrice"
            value={productData.oldPrice}
            onChange={handleChange}
            required
            style={styles.input}
            step="0.01"
            min="0"
          />
        </div>

        <div style={styles.formGroupCheckbox}>
          <label>
            <input
              type="checkbox"
              name="isSale"
              checked={productData.isSale}
              onChange={handleChange}
            />
            {' '}On Sale
          </label>
        </div>

        {productData.isSale && (
          <div style={styles.formGroup}>
            <label htmlFor="sale">Sale Percentage *</label>
            <input
              type="number"
              id="sale"
              name="sale"
              value={productData.sale}
              onChange={handleChange}
              required
              style={styles.input}
              step="1"
              min="0"
              max="100"
            />
          </div>
        )}

        <div style={styles.formGroup}>
          <label htmlFor="price">New Price *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            style={styles.input}
            step="0.01"
            min="0"
          />
        </div>

        <div style={styles.formGroupCheckbox}>
          <label>
            <input
              type="checkbox"
              name="isFeatured"
              checked={productData.isFeatured}
              onChange={handleChange}
            />
            {' '}Is Featured
          </label>
        </div>

        <div style={styles.formGroupCheckbox}>
          <label>
            <input
              type="checkbox"
              name="isTrending"
              checked={productData.isTrending}
              onChange={handleChange}
            />
            {' '}Is Trending
          </label>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="colors">Colors (comma-separated)</label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={productData.colors.join(', ')}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="fittings">Fittings</label>
          <input
            type="text"
            id="fittings"
            name="fittings"
            value={productData.fittings}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="size">Sizes (comma-separated)</label>
          <input
            type="text"
            id="size"
            name="size"
            value={productData.size.join(', ')}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button
          type="submit"
          style={loading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formGroupCheckbox: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#a0a0a0',
  },
  success: {
    color: 'green',
    marginBottom: '15px',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
};

export default AddProductForm;
