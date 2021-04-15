import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  numeroItems: number;
  subscripcion: Subscription;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.subscripcion = this.itemsService.getNumeroItems()
                                         .subscribe((data: any) => {
                                             this.numeroItems = data.numeroItems;
                                         }, (error: any) => {
                                           console.log(error);
                                         })
  }

}
