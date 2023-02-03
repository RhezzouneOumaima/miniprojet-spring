package com.example.etablissementbackend.web;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.exceptions.EtudiantNotFoundException;
import com.example.etablissementbackend.mappers.EtudiantMapperImpl;
import com.example.etablissementbackend.repositories.EtudiantRepository;
import com.example.etablissementbackend.services.EtudiantService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class EtudiantRestController {
    private EtudiantService etudiantService;
    private EtudiantRepository etudiantRepository;
    private EtudiantMapperImpl dtoMapper;

    @DeleteMapping("/etudiant/{id}")
    public void deleteEtd(@PathVariable Long id){
        etudiantService.deleteEtd(id);
    }
    @PostMapping("/etudiant")
    public EtudiantDTO saveEtd(@RequestBody EtudiantDTO etudiantDTO)  {
        return etudiantService.saveEtd(etudiantDTO);
    }

    @PutMapping("/etudiant/{id}")
    public EtudiantDTO updateEtd(@PathVariable Long id,@RequestBody EtudiantDTO etudiantDTO) {
        return etudiantService.updateEtd(id,etudiantDTO);
    }

    @GetMapping("/etudiants/{id}")
    public  EtudiantDTO getEtd(@PathVariable(name = "id") Long etdId) throws EtudiantNotFoundException {
        return etudiantService.getEtd(etdId);

    }
    @GetMapping("/etdNbr")
    public List<Integer> nbrEtdPourChaqueDep(){

        return etudiantService.nbrEtdPourChaqueDep();
    }
    @GetMapping("/pourcentagedechaqueEtat")
    public List<Integer> pourcentageDechaqueEat(){

        return etudiantService.pourcentage();
    }

    @GetMapping("/etudiants")
    public List<EtudiantDTO> etudiants(){
        return etudiantService.etudiantlist();

    }
    @GetMapping("/etudiants/search")
    public List<EtudiantDTO> searchModules(@RequestParam(name ="keyword",defaultValue = "") String keyword){
        return etudiantService.alletd("%"+keyword+"%");
    }


}
