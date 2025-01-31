package com.aschade.orderservice.service;

import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStockRequest;
import com.aschade.ecommerce.entity.result.StockCheckResult;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public StockCheckResult checkStockAvailability(List<ProductDTO> productDTOList, String orderId) {
        OrderStockRequest stockRequest = createStockRequest(productDTOList);
        stockRequest.setOrderId(orderId);

        return sendTostockServiceStockCheck(stockRequest);
    }

    private StockCheckResult sendTostockServiceStockCheck(OrderStockRequest orderStockRequest) {
        rabbitTemplate.setReplyTimeout(60000);
        return (StockCheckResult) rabbitTemplate.convertSendAndReceive("stock.exchange", "stock.checkStock", orderStockRequest);
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
