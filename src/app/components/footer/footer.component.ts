import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test: Date = new Date();
  public version: string = packageInfo.version;

  constructor() { }

  ngOnInit() {
  }

}
