import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

@Input() totalcount!:number;
@Input() pageSize!:number;
@Output() eventChanged=new EventEmitter<any>();

onPagerChanged(event:any)
{debugger
  this.eventChanged.emit(event);
}
}
