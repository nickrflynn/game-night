import { Component, OnInit, Input } from '@angular/core';
import { CodenamesCardService, IGame } from '../codenames-card.service';
import { CodenamesCard } from '../codenames-card.class';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-confirm-navigate-to-key-dialog',
    templateUrl: './confirm-navigate-to-key-dialog.component.html',
    styleUrls: ['./confirm-navigate-to-key-dialog.component.scss']
})
export class ConfirmNavigateToKeyDialogComponent {}

@Component({
    selector: 'app-codenames-board',
    templateUrl: './codenames-board.component.html',
    styleUrls: ['./codenames-board.component.scss']
})
export class CodenamesBoardComponent implements OnInit {
    @Input()
    isKey: boolean = false;

    id: string;
    game: IGame;
    cards: Array<CodenamesCard>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private cardService: CodenamesCardService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.route.params
            .pipe(
                flatMap(params => {
                    this.id = params['id'];
                    return this.cardService.getGameObservable(params['id']);
                })
            )
            .subscribe(game => {
                this.game = game;
                this.cards = game.cards;
            });
    }

    checkCard(card: CodenamesCard) {
        if (!card.locked) {
            card.locked = true;
            this.cardService.updateGame(this.id, { id: this.id, cards: this.cards, complete: card.black });
        }
    }

    getCardColor(card: CodenamesCard, key: boolean = false): string {
        if (key || card.locked) {
            if (card.red) {
                return 'red';
            } else if (card.blue) {
                return 'blue';
            } else if (card.black) {
                return 'black';
            } else {
                return 'tan';
            }
        }

        return '';
    }

    navigateToKey(): void {
        const dialogRef = this.dialog.open(ConfirmNavigateToKeyDialogComponent);

        dialogRef.afterClosed().subscribe(viewKey => {
            if (viewKey) {
                this.router.navigate(['/key', this.id]);
            }
        });
    }

    navigateToBoard(): void {
        this.router.navigate(['/board', this.id]);
    }
}
