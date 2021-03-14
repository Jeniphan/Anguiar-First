import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navtoggle = new EventEmitter();
  demoMailNoti = 50;
  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navtoggle.emit();
  }

}
