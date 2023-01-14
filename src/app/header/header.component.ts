import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  numberOfMessage: number;
  a: Observable<number>;
  constructor(private msgSvc: MessageService) {}

  ngOnInit(): void {
    this.a = this.msgSvc.message.pipe(
      map((data) => {
        return data.length;
      })
    );

    this.a.subscribe((x) => (this.numberOfMessage = x));
  }

  clear():void{
    this.msgSvc.clearAll()
  }
}
