import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
//import { CategoryIcon } from './CategoryIcon'; // Assurez-vous d'avoir un composant pour les icônes de catégorie

const ProductCard = ({ product }) => {
    return (
        <Box
            sx={{
                border: 1,
                borderColor: 'grey.300',
                borderRadius: 2,
                p: 2,
                mb: 2,
            }}
        >
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body2" color="text.secondary">
                Ajouté le {new Date(product.dateAdded).toLocaleDateString()}
            </Typography>
            {/* <CategoryIcon category={product.category} /> */}
        </Box>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        dateAdded: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
