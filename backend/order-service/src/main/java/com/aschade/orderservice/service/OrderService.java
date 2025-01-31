package com.aschade.orderservice.service;

import com.aschade.ecommerce.dto.ProductDTO;
import com.aschade.ecommerce.entity.Order;
import com.aschade.ecommerce.entity.OrderItem;
import com.aschade.ecommerce.entity.OrderRequest;
import com.aschade.ecommerce.entity.Product;
import com.aschade.ecommerce.enums.OrderStatus;
import com.aschade.orderservice.exception.SagaFlowException;
import com.aschade.orderservice.repository.OrderRepository;
import com.aschade.orderservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class OrderService {


    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private StockService stockService;

    @Autowired
    private ProductRepository productRepository;




    public String generateOrderTrackingNumber() {
        return null;

    }

    public Order createOrder(OrderRequest orderRequest, String orderId) {
        Order order = findOrder(orderId);

        int totalItems = orderRequest.getProducts().stream().mapToInt(ProductDTO::getQuantity).sum();

        order.setTotalItems(totalItems);
        order.setStatus(OrderStatus.CREATED);
        order.setTotalPrice(orderRequest.getTotalValue());
        createOrderItems(order, orderRequest);

        return order;
    }

    private void createOrderItems(Order order, OrderRequest orderRequest) {
        for (ProductDTO requestProduct : orderRequest.getProducts()) {

            Product product = productRepository.findByCode(requestProduct.getCode());
            OrderItem orderItem = OrderItem.builder()
                    .order(order)
                    .subtotal(BigDecimal.valueOf(requestProduct.getQuantity() * requestProduct.getUnitPrice()))
                    .unitPrice(BigDecimal.valueOf(requestProduct.getUnitPrice()))
                    .quantity(requestProduct.getQuantity())
                    .product(product)
                    .build();
        }
    }

    private Order findOrder(String orderId) {
        return orderRepository.findById(orderId).orElseThrow(() -> new SagaFlowException("Order not found"));
    }



    @Transactional
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

}
