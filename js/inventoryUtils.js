/**
 * Search products by name.
 * Search is case-insensitive.
 *
 * @param {Array} products
 * @param {String} query
 * @returns {Array}
 */
export function searchProducts(products, query) {

    const searchQuery = query.trim().toLowerCase();

    return products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );
}


/**
 * Filter products by category.
 * "All" returns all products.
 *
 * @param {Array} products
 * @param {String} category
 * @returns {Array}
 */
export function filterProductsByCategory(products, category) {

    if (category === "All") {
        return products;
    }

    return products.filter(product =>
        product.category === category
    );
}


/**
 * Get the stock status of a product.
 *
 * @param {Number} stock
 * @returns {String}
 */
export function getStockStatus(stock) {

    if (stock === 0) {
        return "Out of Stock";
    }

    if (stock >= 1 && stock <= 5) {
        return "Low Stock";
    }

    return "In Stock";
}


/**
 * Calculate the total inventory value.
 * Formula: price × stock
 *
 * @param {Array} products
 * @returns {Number}
 */
export function calculateTotalInventoryValue(products) {

    return products.reduce(
        (total, product) => total + (product.price * product.stock),
        0
    );
}


/**
 * Count products with stock from 1 to 5.
 *
 * @param {Array} products
 * @returns {Number}
 */
export function countLowStockProducts(products) {

    return products.filter(product =>
        product.stock >= 1 && product.stock <= 5
    ).length;
}


/**
 * Count products with stock equal to 0.
 *
 * @param {Array} products
 * @returns {Number}
 */
export function countOutOfStockProducts(products) {

    return products.filter(product =>
        product.stock === 0
    ).length;
}