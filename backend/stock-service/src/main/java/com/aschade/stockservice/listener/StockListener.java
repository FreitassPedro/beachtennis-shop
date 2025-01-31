package com.aschade.stockservice.listener;

import com.aschade.ecommerce.entity.OrderReservation;
import com.aschade.ecommerce.entity.OrderStockRequest;
import com.aschade.ecommerce.entity.ProductStock;
import com.aschade.ecommerce.entity.result.StockCheckResult;

import com.aschade.stockservice.service.StockService;
import com.aschade.stockservice.service.OrderReservationService;
import com.aschade.stockservice.service.ProductStockService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class StockListener {

    @Autowired
    private ProductStockService productStockService;
    @Autowired
    private OrderReservationService orderReservationService;
    @Autowired
    private StockService stockService;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RabbitListener(queues = "stock.checkStock.qe")
    public StockCheckResult checkStockAvailability(OrderStockRequest orderStockRequest) {
        log.info("Checking stock availability for order: {}", orderStockRequest.toString());


        try {
            List<ProductStock> productsInStock = productStockService.findProductInventoriesByProductCodes(orderStockRequest.getProductStockRequests());

            List<OrderReservation> orderReservations = orderReservationService.checkDisponibility(productsInStock, orderStockRequest);
            orderReservationService.saveAllOrderReservations(orderReservations);
        } catch (RuntimeException e) {
            log.error("Stock check failed for order: {}", orderStockRequest.getOrderId());
            return new StockCheckResult(false, e.getMessage());
        }

    log.info("Stock check successful for order: {}", orderStockRequest.getOrderId());
        return new StockCheckResult(true, "Stock available");
    }

}


