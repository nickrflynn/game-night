import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { CodenamesBoardComponent } from './codenames/codenames-board/codenames-board.component';

import { CodenamesCardService } from './codenames/codenames-card.service';
import { CodenamesKeyComponent } from './codenames/codenames-key/codenames-key.component';

import { firebaseConfig } from './../firebase';

@NgModule({
    declarations: [AppComponent, LobbyComponent, CodenamesBoardComponent, CodenamesKeyComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [CodenamesCardService],
    bootstrap: [AppComponent]
})
export class AppModule {}
