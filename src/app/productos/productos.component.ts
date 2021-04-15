import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
  }

  addCesta(item) {
    this.itemsService.addItem(item);
  }

}
