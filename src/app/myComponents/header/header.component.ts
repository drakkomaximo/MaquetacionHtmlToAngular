import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _infopagesservice: InfoPaginaService,
              public router: Router) { }

  buscarProducto(productoBuscado:string){

    if(productoBuscado.length < 1){
      return
    }

    this.router.navigate(['/search', productoBuscado])
  }

  ngOnInit() {
  }

}
