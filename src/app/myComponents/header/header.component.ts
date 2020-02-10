import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _infopagesservice: InfoPaginaService) { }

  ngOnInit() {
  }

}
