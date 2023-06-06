import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/models/game';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router, private route: ActivatedRoute, private firestore: AngularFirestore) {}

  newGame() {
    //Start game
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJson())
    .then((gameInfo:any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });

    //Start new game
    //const itemCollection = collection(this.firestore, 'games');
    //addDoc(itemCollection, this.game.toJson());

    //this.router.navigateByUrl('/game/:id');
  }
}
