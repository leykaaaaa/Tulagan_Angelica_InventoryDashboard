import { getStockStatus } from "./inventoryUtils.js";


/**
 * Display product cards.
 *
 * @param {Array} products
 */
export function displayProducts(products) {

    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");

    // Clear the existing product cards.
    productList.innerHTML = "";


    // Show "No products found" if there are no results.
    if (products.length === 0) {

        noResultsMessage.style.display = "block";

        return;
    }


    // Hide the no-results message.
    noResultsMessage.style.display = "none";


    // Create a card for every product.
    products.forEach(product => {

        // Object destructuring.
        const {
            id,
            name,
            category,
            price,
            stock
        } = product;


        const stockStatus = getStockStatus(stock);


        // Determine the CSS class for the stock status.
        let statusClass = "status-in-stock";

        if (stockStatus === "Low Stock") {
            statusClass = "status-low-stock";
        }

        if (stockStatus === "Out of Stock") {
            statusClass = "status-out-of-stock";
        }


        // Create product card.
        const productCard = document.createElement("article");

        productCard.classList.add("product-card");


        productCard.innerHTML = `
            <div class="product-card-header">

                <div>
                    <h3>${name}</h3>
                    <p class="product-id">Product ID: ${id}</p>
                </div>

                <span class="category">
                    ${category}
                </span>

            </div>


            <div class="product-details">

                <div class="detail-item">
                    <span class="detail-label">
                        Price
                    </span>

                    <span class="detail-value price">
                        ${formatCurrency(price)}
                    </span>
                </div>


                <div class="detail-item">
                    <span class="detail-label">
                        Stock
                    </span>

                    <span class="detail-value">
                        ${stock}
                    </span>
                </div>

            </div>


            <div class="stock-status ${statusClass}">
                ${stockStatus}
            </div>
        `;


        productList.appendChild(productCard);
    });
}


/**
 * Format a number as Philippine Peso.
 *
 * @param {Number} value
 * @returns {String}
 */
export function formatCurrency(value) {

    return `₱${value.toLocaleString("en-PH")}`;
}


/**
 * Display the total inventory value.
 *
 * @param {Number} total
 */
export function displayTotalInventoryValue(total) {

    const totalInventoryValue =
        document.getElementById("totalInventoryValue");

    totalInventoryValue.textContent = formatCurrency(total);
}


/**
 * Display the low-stock count.
 *
 * @param {Number} count
 */
export function displayLowStockCount(count) {

    const lowStockCount =
        document.getElementById("lowStockCount");

    lowStockCount.textContent = count;
}


/**
 * Display the out-of-stock count.
 *
 * @param {Number} count
 */
export function displayOutOfStockCount(count) {

    const outOfStockCount =
        document.getElementById("outOfStockCount");

    outOfStockCount.textContent = count;
}


/**
 * Display all inventory summary values.
 *
 * @param {Number} total
 * @param {Number} lowStock
 * @param {Number} outOfStock
 */
export function displaySummary(total, lowStock, outOfStock) {

    displayTotalInventoryValue(total);
    displayLowStockCount(lowStock);
    displayOutOfStockCount(outOfStock);
}