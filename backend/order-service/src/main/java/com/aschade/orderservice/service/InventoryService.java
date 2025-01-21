package com.aschade.orderservice.service;

import com.aschad.ecommerce.dto.ProductDTO;
import com.aschad.ecommerce.entity.OrderStockRequest;
import com.aschad.ecommerce.entity.ProductStockRequest;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void checkStockAvailability(List<ProductDTO> productDTOList, String orderId) {
        OrderStockRequest orderStockRequest = new OrderStockRequest();
        orderStockRequest.setOrderId(orderId);

        for(ProductDTO productDTO : productDTOList) {
            ProductStockRequest productStockRequest = createStockRequestByProductDTO(productDTO);
            orderStockRequest.addStockRequest(productStockRequest);
        }

        if (orderStockRequest.getProductStockRequests().isEmpty()) {
            throw new RuntimeException("No stock requests found");
        }

        sendToInventoryStockCheck(orderStockRequest);
    }

    private void sendToInventoryStockCheck(OrderStockRequest orderStockRequest) {
        rabbitTemplate.convertSendAndReceive("inventory.exchange", "inventory.checkStock", orderStockRequest);
    }

    private ProductStockRequest createStockRequestByProductDTO(ProductDTO productDTO) {
        ProductStockRequest productStockRequest = new ProductStockRequest();
        productStockRequest.setProductCode(productDTO.getCode());
        productStockRequest.setQuantity(productDTO.getQuantity());
        return productStockRequest;
    }
}
