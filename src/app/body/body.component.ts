import { Component, OnInit } from '@angular/core';
import { Observable, of , pipe} from 'rxjs';
import {catchError, map, startWith, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { state } from '../common-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {

  message$ : any;
  constructor(
    private msgSvc:MessageService
  ) { }

  ngOnInit(): void {
      state(this.msgSvc.message).subscribe(x=>console.log(x));
  }

}