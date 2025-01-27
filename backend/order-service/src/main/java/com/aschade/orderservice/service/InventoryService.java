package com.aschade.orderservice.service;

import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.UUID.randomUUID;

@Service
public class InventoryService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public StockCheckResult checkStockAvailability(List<ProductDTO> productDTOList, String orderId) {
        OrderStockRequest stockRequest = createStockRequest(productDTOList);
        stockRequest.setOrderId(orderId);

        return sendToInventoryServiceStockCheck(stockRequest);
    }

    private StockCheckResult sendToInventoryServiceStockCheck(OrderStockRequest orderStockRequest) {
        String correlationId = randomUUID().toString();
        MessageProperties messageProperties = new MessageProperties();
        messageProperties.setReplyTo("inventory.checkStock.reply.qe");
        messageProperties.setCorrelationId(correlationId);
        messageProperties.setContentType("application/json");
        Message message = new Message(orderStockRequest.toString().getBytes(), messageProperties);

        return (StockCheckResult) rabbitTemplate.convertSendAndReceive("inventory.exchange", "inventory.checkStock", orderStockRequest);
    }



    private OrderStockRequest createStockRequest(List<ProductDTO> productDTOList) {
        OrderStockRequest orderStockRequest = new OrderStockRequest();
        for (ProductDTO productDTO : productDTOList) {
            ProductStockRequest productStockRequest = createProductStockRequest(productDTO);
            orderStockRequest.addStockRequest(productStockRequest);
        }
        return orderStockRequest;
    }

    private ProductStockRequest createProductStockRequest(ProductDTO productDTO) {
        ProductStockRequest productStockRequest = new ProductStockRequest();
        productStockRequest.setProductCode(productDTO.getCode());
        productStockRequest.setQuantity(productDTO.getQuantity());
        return productStockRequest;
    }
}
