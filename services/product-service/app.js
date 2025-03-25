const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/products', { useNewUrlParser: true });

const Product = mongoose.model('Product', { name: String, price: Number });

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(3002, () => console.log('Product Service running on port 3002'));
