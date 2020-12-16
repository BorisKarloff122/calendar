import { Component} from '@angular/core';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent{
  public open: boolean = false;
  public constructor() { }

  public closeModal(): void{
    this.open = false;
  }
  public openModal(): void{
    this.open = !this.open;
  }

}
