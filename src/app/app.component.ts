import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Joaquin';

  userData = {
    email: 'joaquin@gmail.com',
    role: 'Admin',
    
  }
  title = 'cursoangular2';
}
