import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameKeyComponent } from './game-key/game-key.component';

import { WordService } from './word.service';

@NgModule({
    declarations: [AppComponent, LobbyComponent, GameBoardComponent, GameKeyComponent],
    imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatCardModule, MatGridListModule],
    providers: [WordService],
    bootstrap: [AppComponent]
})
export class AppModule {}
