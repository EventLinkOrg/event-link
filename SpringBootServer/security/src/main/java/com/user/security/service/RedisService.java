package com.user.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class RedisService {

    @Value("${constants.email-sender.lifespan}")
    public int EMAIL_TOKEN_LIFESPAN;

    @Value("${constants.jwt.lifespan}")
    public int AUTH_JWT_TOKEN_LIFESPAN;

    @Qualifier("jwtRedisTemplate")
    private final RedisTemplate<String, Object> redisTemplate;


    public void setValue(String key, Object value, int minutes) {
        redisTemplate.opsForValue().set(key, value, Duration.ofMinutes(minutes));
    }

    public Object getValue(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    public void deleteRow(String key){
        redisTemplate.delete(key);
    }



}
