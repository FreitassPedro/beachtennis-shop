# TODO-LIST

- Pensar na lógica para separar os produtos de algum microserviço. Seus atributos incluem FOTO, MARCA, MODELO, DESC, TAMANHO, COR
- Criar FRONTEND completo do site
- Desenvolver o RabbitMQ com o Orchestrator para consumir os pedidos, avaliar estoque, gerar pagamento, nota fiscal, calcular frete e enviar  o produto
- Criar o microserviço de pagamento

- Ao adicionar no carrinho ou finalizar a compra, o sistema deve verificar se o produto ainda está disponível no estoque. Caso não esteja, o sistema deve informar ao usuário que o produto não está mais disponível.
- A atualização do estoque após a confirmação do pedido (ou pagamento) é uma prática comum em e-commerce para evitar problemas de overbooking (vender mais do que o estoque disponível). Contudo, ainda é importante implementar um sistema de reserva de estoque para garantir que o produto estará disponível para o usuário que o adicionou ao carrinho.

# Project Diagram 

## Workflow Diagram
<div align="center">
  <img src="backend/assets/Aschad%20Backend%20Diagram.drawio.svg" width="100%" height="100%">
</div>

## RabbitMQ Diagram
  <img src="backend/assets/RabbitMQ Diagram.svg" width="100%" height="100%">
<div align="center">
</div>
