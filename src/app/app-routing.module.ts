import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby/lobby.component';
import { CodenamesBoardComponent } from './codenames/codenames-board/codenames-board.component';
import { CodenamesKeyComponent } from './codenames/codenames-key/codenames-key.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lobby',
        pathMatch: 'full'
    },
    {
        path: 'lobby',
        component: LobbyComponent
    },
    {
        path: 'board/:id',
        component: CodenamesBoardComponent
    },
    {
        path: 'key/:id',
        component: CodenamesKeyComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
