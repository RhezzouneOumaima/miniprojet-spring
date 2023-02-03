import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Profs} from "../model/prof.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfsService} from "../services/profs.service";
import {Etudiant} from "../model/etudiant.model";
import {Module} from "../model/module.model";
import {Observable} from "rxjs";
import {EtudiantService} from "../services/etudiant.service";
import  * as jspdf from 'jspdf'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";




@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.css']
})
export class DetailsEtudiantComponent implements OnInit {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  moduleId!: string;
  etd! : Etudiant ;
  constructor(private route : ActivatedRoute, private router :Router) {
    this.etd=this.router.getCurrentNavigation()?.extras.state as Etudiant;
  }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.params['id'];

  }

  printthis() {
    var elements = document.getElementById('reka')

    // @ts-ignore
    html2canvas(elements).then((canvas) => {
      var imgData = canvas.toDataURL('image/png')

      var doc = new jsPDF()
      var imgHeight = canvas.height * 208 / canvas.width
      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save("image.pdf")

    })

  }
}
