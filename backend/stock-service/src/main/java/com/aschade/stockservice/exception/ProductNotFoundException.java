package com.aschade.stockservice.exception;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String productCode) {
        super("Product not found with code: " + productCode);
    }
}
