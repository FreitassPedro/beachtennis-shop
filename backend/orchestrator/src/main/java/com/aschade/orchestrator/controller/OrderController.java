package com.aschade.orchestrator.controller;


import com.aschade.orchestrator.entity.OrderRequest;
import com.aschade.orchestrator.entity.Workflow;
import com.aschade.orchestrator.entity.dto.BoletoPayment;
import com.aschade.orchestrator.entity.dto.CardPayment;
import com.aschade.orchestrator.entity.dto.OrderDTO;
import com.aschade.orchestrator.entity.dto.PaymentMethod;
import com.aschade.orchestrator.service.OrchestratorService;
import com.aschade.orchestrator.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    private static final Logger log = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrchestratorService orchestratorService;

    @PostMapping()
    public ResponseEntity<Workflow> createOrder(@RequestBody OrderRequest orderRequest) {
        log.info("Order request received: {}", orderRequest);

        resolvePaymentMethod(orderRequest.getPaymentMethod());

        if (!orderRequest.isValid()) return ResponseEntity.badRequest().build();

        OrderDTO orderDTO = orderService.createOrderDTO(orderRequest);
        Workflow workflow = orchestratorService.createWorkflow(orderDTO);

        return ResponseEntity.ok(workflow);
    }

    private void resolvePaymentMethod(PaymentMethod paymentMethod) {
        if (paymentMethod instanceof CardPayment) {
            CardPayment cardPayment = (CardPayment) paymentMethod;
            log.info("Card payment received: {}", cardPayment);

        } else if (paymentMethod instanceof BoletoPayment) {
            BoletoPayment boletoPayment = (BoletoPayment) paymentMethod;
            log.info("Boleto payment received: {}", boletoPayment);
        }
    }
}
