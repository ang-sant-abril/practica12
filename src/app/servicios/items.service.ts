import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: any = [];
  private contador = new Subject<any>()

  constructor() { }

  addItem(item: any): void {
    this.items.push(item);
    this.contador.next({numeroItems: this.items.length});
  }

  getNumeroItems(): Observable<any> {
    return this.contador.asObservable()
  }

}
