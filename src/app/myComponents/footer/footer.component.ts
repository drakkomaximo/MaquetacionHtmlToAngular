import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public anio:number = new Date().getFullYear()

  constructor(public _infopagesservice: InfoPaginaService) { 

  }

  ngOnInit() {
  }

}
