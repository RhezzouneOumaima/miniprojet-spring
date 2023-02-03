package com.example.etablissementbackend;

import com.example.etablissementbackend.services.EtablissementService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EtablissementBackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(EtablissementBackendApplication.class, args);
    }
//@Bean
    CommandLineRunner commandLineRunner(EtablissementService etablissementService)
{
    return args -> {


           etablissementService.moduleList();



    };
}
}
