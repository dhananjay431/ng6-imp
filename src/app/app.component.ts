import { Component,Input } from '@angular/core';

@Component({
  selector: 'blist',
  template:`
		<ng-template #list listdata="ldata">
		  <div class="name">{{ldata | json }}</div>
		</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class blist {
	@Input() listdata:any;	
	const
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ldata:any={};
   myContext = {$implicit: 'World', localSk: 'Svet'};
	
  dataContext:any=[
  {
  	
  	name:'m1',
  	id:1,
  	child:[
  			{
  				name:'m2',flag:false,id:2,child:[
  				{
  				name:'m20',flag:false,id:20,child:[
  				{
  				name:'m30',flag:false,id:30,child:[]
  			}]
  				}]
  			},
  			{
  				name:'m5',id:7,flag:false,
  				child:[
  				{name:'m9',id:9,  	child:[
  			{
  				name:'m2',flag:false,id:2,child:[
  				{
  				name:'m20',flag:false,id:20,child:[
  				{
  				name:'m30',flag:false,id:30,  	child:[
  			{
  				name:'m2',flag:false,id:2,child:[
  				{
  				name:'m20',flag:false,id:20,child:[
  				{
  				name:'m30',flag:false,id:30,child:[]
  			}]
  				}]
  			},
  			{
  				name:'m5',id:7,flag:false,
  				child:[
  				{name:'m9',id:9,child:[]}
  				]
  			}
  		]
  			}]
  				}]
  			},
  			{
  				name:'m5',id:7,flag:false,
  				child:[
  				{name:'m9',id:9,child:[]}
  				]
  			}
  		]}
  				]
  			}
  		]},
  		{name:'m3',id:3,flag:false,child:[]},
  		{name:'mqw',id:4,flag:false,child:[]}
  		];
  		ctx  = {name:this.dataContext};
  		show(d){
  			console.log("d=",d);
  			if(d.flag == undefined)
  				d.flag = true;	
  			else
  				d.flag = !d.flag; 
  		}
}
