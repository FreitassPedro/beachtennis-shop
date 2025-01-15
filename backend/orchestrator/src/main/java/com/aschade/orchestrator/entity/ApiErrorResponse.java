package com.aschade.orchestrator.entity;

import java.util.List;

public class ApiErrorResponse {

    private int status;
    private long timestamp;
    private String message;
    private String error;
    private String path;

    public ApiErrorResponse() {
    }

    public ApiErrorResponse(int status, long timestamp, String message, String error, String path) {
        this.status = status;
        this.timestamp = timestamp;
        this.message = message;
        this.error = error;
        this.path = path;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
