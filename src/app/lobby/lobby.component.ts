import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodenamesCardService } from '../codenames/codenames-card.service';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
    constructor(private router: Router, private codenamesService: CodenamesCardService) {}

    ngOnInit() {}

    newGame(): void {
        // prompt for game length (4x4, 5x5, 6x6)

        // generate game id

        // call game service to:
        //   - get keywords for board
        //   - determine placement

        // route to game board

        this.codenamesService.newGame().subscribe(game => {
            this.router.navigate(['/board', game.id]);
        });
    }

    joinGame(): void {
        this.router.navigate(['/join']);
    }
}
