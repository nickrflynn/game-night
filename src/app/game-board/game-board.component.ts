import { Component, OnInit } from '@angular/core';

export interface IGameCard {
    word: string;
    red: boolean;
    blue: boolean;
    black: boolean;
    revealed?: boolean;
}

// TODO:
//   - validate game board

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
    cards: Array<IGameCard> = [
        { word: 'Fox', red: true, blue: false, black: false },
        { word: 'Boston', red: false, blue: true, black: false },
        { word: 'Apple', red: false, blue: false, black: true },
        { word: 'Chair', red: false, blue: false, black: false },
        { word: 'Hat', red: false, blue: true, black: false },
        { word: 'Tooth', red: true, blue: false, black: false },
        { word: 'Plug', red: false, blue: false, black: false },
        { word: 'Speaker', red: false, blue: true, black: false },
        { word: 'Flower', red: true, blue: false, black: false },
        { word: 'Fox', red: true, blue: false, black: false },
        { word: 'Boston', red: false, blue: true, black: false },
        { word: 'Apple', red: false, blue: false, black: true },
        { word: 'Chair', red: false, blue: false, black: false },
        { word: 'Hat', red: false, blue: true, black: false },
        { word: 'Tooth', red: true, blue: false, black: false },
        { word: 'Plug', red: false, blue: false, black: false },
        { word: 'Speaker', red: false, blue: true, black: false },
        { word: 'Flower', red: true, blue: false, black: false },
        { word: 'Fox', red: true, blue: false, black: false },
        { word: 'Boston', red: false, blue: true, black: false },
        { word: 'Apple', red: false, blue: false, black: true },
        { word: 'Chair', red: false, blue: false, black: false },
        { word: 'Hat', red: false, blue: true, black: false },
        { word: 'Tooth', red: true, blue: false, black: false },
        { word: 'Plug', red: false, blue: false, black: false }
    ];

    constructor() {}

    ngOnInit() {}

    checkCard(card: IGameCard) {
        if (card.revealed) {
            console.log('already flipped');
        } else {
            card.revealed = true;
        }
    }

    getCardColor(card: IGameCard): string {
        if (card.revealed) {
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
