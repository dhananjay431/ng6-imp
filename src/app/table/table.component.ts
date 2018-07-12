import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'btable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	//  @Input() data:any;
	   @Input() nodes:any;
  constructor() { }

  ngOnInit() {
  	console.log(this.nodes);
  }

}
