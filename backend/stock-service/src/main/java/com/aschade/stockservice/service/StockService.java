package com.aschade.stockservice.service;

import com.aschade.stockservice.repository.ProductStockRepository;
import com.aschade.ecommerce.entity.ProductStock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private ProductStockRepository productStockRepository;

    @Autowired
    private OrderReservationService orderReservationService;




    public void saveAllProductStock(List<ProductStock> productStock) {
        productStockRepository.saveAll(productStock);
    }


}
