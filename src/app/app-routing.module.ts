import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { GameBoardComponent } from './game-board/game-board.component';

const routes: Routes = [
    {
        path: 'lobby',
        component: LobbyComponent
    },
    {
        path: 'board',
        component: GameBoardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
