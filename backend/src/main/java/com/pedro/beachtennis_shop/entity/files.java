package com.pedro.beachtennis_shop.entity;

import jakarta.persistence.*;

@Entity
@Table
public class files {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;

    private String name;
    private String url;
    private String type;
    private long size;

    public files(String name, String url, String type, long size) {
        this.name = name;
        this.url = url;
        this.type = type;
        this.size = size;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public String getType() {
        return type;
    }

    public long getSize() {
        return size;
    }
}
