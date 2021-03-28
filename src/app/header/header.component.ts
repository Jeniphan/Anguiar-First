import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input("medie_query") mobileQueryMax: boolean;
  @Output("toggle") navtoggle = new EventEmitter();
  demoMailNoti = 60;

  constructor() {
    console.log(this.mobileQueryMax);
  }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navtoggle.emit();
  }

}
