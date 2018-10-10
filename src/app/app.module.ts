import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatGridListModule, MatButtonToggleModule, MatDialogModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { CodenamesBoardComponent, ConfirmNavigateToKeyDialogComponent } from './codenames/codenames-board/codenames-board.component';

import { CodenamesCardService } from './codenames/codenames-card.service';
import { CodenamesKeyComponent } from './codenames/codenames-key/codenames-key.component';

import { firebaseConfig } from './../firebase';
import { CodenamesJoinComponent } from './codenames/codenames-join/codenames-join.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDialogModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule
    ],
    declarations: [
        AppComponent,
        LobbyComponent,
        CodenamesBoardComponent,
        CodenamesKeyComponent,
        CodenamesJoinComponent,
        ConfirmNavigateToKeyDialogComponent
    ],
    entryComponents: [ConfirmNavigateToKeyDialogComponent],
    providers: [CodenamesCardService],
    bootstrap: [AppComponent]
})
export class AppModule {}
