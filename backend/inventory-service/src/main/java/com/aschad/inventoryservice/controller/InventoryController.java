package com.aschad.inventoryservice.controller;


import com.aschad.ecommerce.entity.OrderStockRequest;
import com.aschad.inventoryservice.entity.ProductInventory;
import com.aschad.inventoryservice.service.InventoryService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/inventory")
public class InventoryController {

    private static final Logger log = LoggerFactory.getLogger(InventoryController.class);



}
