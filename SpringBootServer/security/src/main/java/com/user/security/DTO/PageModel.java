package com.user.security.DTO;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PageModel <T>{
    Integer page;
    Integer total;
    Integer size;
    String sortedColumn;
    private List<T> data;
}
