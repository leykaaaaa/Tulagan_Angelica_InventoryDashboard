import { products } from "./products.js";

import {
    searchProducts,
    filterProductsByCategory,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from "./inventoryUtils.js";

import {
    displayProducts,
    displaySummary
} from "./display.js";


// =========================================
// SELECT HTML ELEMENTS
// =========================================

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const searchBtn =
    document.getElementById("searchBtn");

const resetBtn =
    document.getElementById("resetBtn");


// =========================================
// DISPLAY INITIAL DATA
// =========================================

function displayInitialData() {

    // Display all six products.
    displayProducts(products);


    // Calculate summary values.
    const totalInventoryValue =
        calculateTotalInventoryValue(products);

    const lowStockCount =
        countLowStockProducts(products);

    const outOfStockCount =
        countOutOfStockProducts(products);


    // Display summary values.
    displaySummary(
        totalInventoryValue,
        lowStockCount,
        outOfStockCount
    );
}


// =========================================
// SEARCH AND FILTER
// =========================================

function updateProductDisplay() {

    const query =
        searchInput.value;

    const category =
        categoryFilter.value;


    // First search products by name.
    let filteredProducts =
        searchProducts(products, query);


    // Then filter the search results by category.
    filteredProducts =
        filterProductsByCategory(
            filteredProducts,
            category
        );


    // Display the final results.
    displayProducts(filteredProducts);
}


// =========================================
// SEARCH BUTTON
// =========================================

searchBtn.addEventListener("click", () => {

    updateProductDisplay();

});


// =========================================
// CATEGORY FILTER
// =========================================

categoryFilter.addEventListener("change", () => {

    updateProductDisplay();

});


// =========================================
// ENTER KEY SEARCH
// =========================================

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        updateProductDisplay();

    }

});


// =========================================
// RESET BUTTON
// =========================================

resetBtn.addEventListener("click", () => {

    // Clear search field.
    searchInput.value = "";


    // Reset category to All.
    categoryFilter.value = "All";


    // Display all products again.
    displayInitialData();

});


// =========================================
// INITIAL PAGE LOAD
// =========================================

displayInitialData();