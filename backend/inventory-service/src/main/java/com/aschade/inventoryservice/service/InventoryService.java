package com.aschade.inventoryservice.service;

import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.inventoryservice.repository.ProductInventoryRepository;
import com.aschade.ecommerce.entity.ProductInventory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private ProductInventoryRepository inventoryRepository;

    @Autowired
    private OrderReservationService orderReservationService;




    public void saveAllOrderInventory(List<ProductInventory> productInventories) {
        inventoryRepository.saveAll(productInventories);
    }


}
