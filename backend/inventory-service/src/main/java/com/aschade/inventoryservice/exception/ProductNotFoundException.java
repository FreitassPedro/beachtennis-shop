package com.aschade.inventoryservice.exception;

public class ProductNotFoundException extends Throwable {
    public ProductNotFoundException(String productCode) {
        super("Product not found with code: " + productCode);
    }
}
