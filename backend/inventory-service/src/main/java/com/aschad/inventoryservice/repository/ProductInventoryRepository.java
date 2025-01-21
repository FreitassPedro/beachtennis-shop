package com.aschad.inventoryservice.repository;

import com.aschad.inventoryservice.entity.ProductInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductInventoryRepository extends JpaRepository<ProductInventory, Long> {

    Boolean existsByProductCode(String productCode);

    @Query("SELECT CASE WHEN COUNT(i) > 0 THEN true ELSE false END " +
            "FROM Inventory i " +
            "WHERE i.productCode = :productCode AND i.stock >= :quantity")
    boolean hasEnoughStock(@Param("productCode") String productCode, @Param("quantity") int quantity);

    Optional<ProductInventory> findByProductCode(String code);
}
