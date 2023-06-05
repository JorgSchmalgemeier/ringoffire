import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  newGame() {
    //Start new game
    this.router.navigateByUrl('/game/:id');
  }
}
