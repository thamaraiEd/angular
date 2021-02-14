import { Component } from '@angular/core';
import { Fanss } from './mock-fans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-heros';
  name = 'Thamarai';
  Fangg = Fanss;
  isAscendic = true;
  fruits: any;
  // fruits: string[] = ["Cffpple", "Zanana", "Orange", "Peach", "Pear",];

  send() {
    this.isAscendic ? this.ascendic() : this.descendic();
  }

  ascendic() {
    this.isAscendic = false;
    this.fruits = this.fruits.sort((n1, n2) => {
      if (n1 < n2) {
        return 1;
      }
      if (n1 > n2) {
        return -1;
      }
      return 0;
    });
  }

  descendic() {
    this.isAscendic = true;
    this.fruits = this.fruits.sort((n1, n2) => {
      if (n1 > n2) {
        return 1;
      }
      if (n1 < n2) {
        return -1;
      }
      return 0;
    });
  }
  /*public ascClick(){
    //console.log(this.Fangg);
    this.Fangg = this.Fangg.sort((n1,n2) => {
      if(n1 < n2)
      {

      }
    }
    );
  }*/
}
