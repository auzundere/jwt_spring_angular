package com.uzundere.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Value("${spring.username}")
    public String username;

    @Value("${spring.password}")
    public String password;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        if(this.username.equals(username)){
            return new User(this.username, hash(password), new ArrayList<>());
        }else{
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    public static String hash(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt(10));
    }

}
