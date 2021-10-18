import { Component ,Input,OnChanges,OnInit,SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe-child1';

  @Input() message:string ="";

  constructor(){
    console.log("message is " + this.message);
    
  }




  ngOnInit() {
    console.log('message  ngOnInit=' + this.message);
    window.addEventListener('data-to-child', this.dataEventListner, true);
  }

  dataEventListner(event:any) {
    console.log('event detail - ' , event.detail);
  }

  ngOnChanges(changes: {[message: string]: SimpleChange}) {    
    console.log('message ngOnChanges=' + this.message);
  }

  ngOnDestroy(): void {
    window.removeEventListener('dataEventListner', this.dataEventListner, true);
  }
}
