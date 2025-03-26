package com.aschade.ecommerce.service;

import com.aschade.ecommerce.entity.Address;
import com.aschade.ecommerce.repository.AddressRepository;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    private AddressRepository addressRepository;

    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public Address findById(Long id) {
        return addressRepository.findById(id).orElse(null);
    }
}
