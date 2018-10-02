import { Component, OnInit, Input } from '@angular/core';
import { CodenamesCardService, IGame } from '../codenames-card.service';
import { CodenamesCard } from '../codenames-card.class';
import { map, mergeMap, switchMap, flatMap, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

// TODO:
//   - validate game board

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

    constructor(private route: ActivatedRoute, private cardService: CodenamesCardService) {}

    ngOnInit() {
        // this.cardService.newGame().subscribe(game => {
        //     this.game = game;
        //     this.cards = game.cards;
        // });

        // this.route.params.subscribe(params => {
        //     this.cardService.getGameObservable(params['id']).subscribe(game => {
        //         console.log('heres the game', game);
        //         this.game = game;
        //         this.cards = game.cards;
        //     });
        // });

        this.route.params
            .pipe(
                flatMap(params => {
                    this.id = params['id'];
                    return this.cardService.getGameObservable(params['id']);
                })
            )
            .subscribe(game => {
                console.log(game);
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
}
