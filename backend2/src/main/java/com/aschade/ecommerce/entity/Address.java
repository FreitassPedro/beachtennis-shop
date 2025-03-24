package com.aschade.ecommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String addressName;
    private String recipient;
    private String number;
    private String street;
    private String  neighborhood;
    private String complement;
    private String  city;
    private String  state;
    private String  zip;
    private String  referencePoint;

}
