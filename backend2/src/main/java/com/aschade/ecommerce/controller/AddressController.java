package com.aschade.ecommerce.controller;

import com.aschade.ecommerce.entity.Address;
import com.aschade.ecommerce.service.AddressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/address")
public class AddressController {


    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAddressesById(@PathVariable Long id) {
        List<Address> byId = addressService.findAllById(id);
        System.out.println(byId);
        return ResponseEntity.ok().body(byId);
    }
}
