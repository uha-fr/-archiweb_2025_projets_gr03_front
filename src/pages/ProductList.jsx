import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Container, Box } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://127.0.0.1:8000/api/products');
                console.log(response.data['hydra:member']); // Vérifiez la structure des données
                setProducts(response.data['hydra:member']); // Assurez-vous d'accéder à la bonne propriété
            } catch (err) {
                setError(err);
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <div>Erreur lors du chargement des produits : {error.message}</div>;
    }

    return (
        <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {products.map((product) => (
                    <Box key={product.id} sx={{ flex: '1 1 30%', minWidth: '250px', maxWidth: '100%' }}>
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default ProductList;
