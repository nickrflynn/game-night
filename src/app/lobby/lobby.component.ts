import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    newGame(): void {
        // prompt for game length (4x4, 5x5, 6x6)

        // generate game id

        // call game service to:
        //   - get keywords for board
        //   - determine placement

        // route to game board
        this.router.navigate(['/board']);
    }

    joinGame(): void {
        // prompt for game id
        // route to game board
    }
}
