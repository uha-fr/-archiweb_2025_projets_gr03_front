import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://127.0.0.1:8000/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Erreur lors du chargement du produit : {error.message}</div>;
    }

    if (!product) {
        return <div>Chargement...</div>;
    }

    return (
        <Container className="product-detail">
            <Paper elevation={3} sx={{ p: 3, my: 4, borderRadius: 2 }}>
                <Box container spacing={2}>
                    <Box item xs={12}>
                        <Typography variant="h4" gutterBottom>
                            {product.name}
                        </Typography>
                    </Box>
                    <Box item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                            Fournisseur: <a href={product.supplier} target="_blank" rel="noopener noreferrer">{product.supplier}</a>
                        </Typography>
                    </Box>
                    <Box item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                            Catégorie: <a href={product.category} target="_blank" rel="noopener noreferrer">{product.category}</a>
                        </Typography>
                    </Box>
                    <Box item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                            Prix par kWh: {product.prix_kWh} €
                        </Typography>
                    </Box>
                    <Box item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                            Quantité disponible: {product.qte_disponible}
                        </Typography>
                    </Box>
                    <Box item xs={12} sm={6}>
                        <Typography variant="body1" gutterBottom>
                            Émission de CO2 par kWh: {product.emission_co2_kWh} g
                        </Typography>
                    </Box>
                    <Box item xs={12}>
                        <Typography variant="body2" gutterBottom>
                            {product.description}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            <style>
                {`
                /* styles.css */
                .product-detail {
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .product-detail h4 {
                font-weight: bold;
                margin-bottom: 16px;
                }

                .product-detail p {
                margin-bottom: 8px;
                color: #333;
                }

                .product-detail a {
                color: #1976d2;
                text-decoration: none;
                }

                .product-detail a:hover {
                text-decoration: underline;
                }
            `}
            </style>
        </Container>
    );
};

export default ProductDetail;
