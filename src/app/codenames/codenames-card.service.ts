import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { map, mergeMap, switchMap, flatMap, take } from 'rxjs/operators';
import { CodenamesCard } from './codenames-card.class';

export interface IGame {
    id: string;
    cards: Array<CodenamesCard>;
    complete: boolean;
}

interface IValues {
    values: Array<string>;
}

@Injectable({
    providedIn: 'root'
})
export class CodenamesCardService {
    constructor(private http: HttpClient, private db: AngularFirestore) {}

    private getGames(): AngularFirestoreCollection<IGame> {
        return this.db.collection('codenames/games/games');
    }

    private getGame(id: string): AngularFirestoreDocument<IGame> {
        return this.getGames().doc(id);
    }

    getGameObservable(id: string): Observable<any> {
        return this.getGame(id).valueChanges();
    }

    updateGame(id: string, game: IGame): Observable<any> {
        return from(this.getGame(id).set(JSON.parse(JSON.stringify(game))));
    }

    newGame(): Observable<IGame> {
        const id = this.generateRandomId();
        return this.getGame(id)
            .snapshotChanges()
            .pipe(
                take(1),
                flatMap(snapshot => {
                    if (snapshot.payload.exists) {
                        return this.newGame();
                    } else {
                        return this.addNewGameToDatabase(id);
                    }
                }),
                flatMap(() => {
                    return this.http.get('./../../assets/codenames-values.json').pipe(
                        map((response: IValues) => {
                            const values: Array<string> = response.values;
                            this.shuffleArray(values);

                            const cards: Array<CodenamesCard> = [];

                            for (let i = 0; i < 25; i++) {
                                cards.push(new CodenamesCard(values[i]));
                            }

                            this.setCardColors(cards);

                            this.db.doc(`codenames/games/games/${id}`).update({
                                cards: JSON.parse(JSON.stringify(cards))
                            });

                            return { id: id, cards: cards, complete: false };
                        })
                    );
                })
            );
    }

    getGameById(id: string): Observable<IGame> {
        return this.db.doc<IGame>(`codenames/games/games/${id}`).valueChanges();
    }

    setupNewGameAndGetId(): Observable<string> {
        const gameId: string = this.generateRandomId();

        return this.gameExistsInDatabase(gameId).pipe(
            flatMap(exists => {
                if (exists) {
                    console.log(`${gameId} already exists`);
                    return of('');
                } else {
                    return this.addNewGameToDatabase(gameId);
                }
            }),
            flatMap(() => {
                return this.addCardsToGameInDatabase(gameId);
            })
        );
    }

    gameExistsInDatabase(id: string): Observable<boolean> {
        return this.db
            .doc(`codenames/games/games/${id}`)
            .snapshotChanges()
            .pipe(
                take(1),
                flatMap(snapshot => {
                    if (snapshot.payload.exists) {
                        return of(true);
                    } else {
                        return of(false);
                    }
                })
            );
    }

    addNewGameToDatabase(id: string): Observable<any> {
        return from(
            this.db
                .collection(`codenames/games/games`)
                .doc(id)
                .set({})
        );
    }

    addCardsToGameInDatabase(id: string): Observable<string> {
        return this.http.get('./../../assets/codenames-values.json').pipe(
            map((response: IValues) => {
                const values: Array<string> = response.values;
                this.shuffleArray(values);

                const cards: Array<CodenamesCard> = [];

                for (let i = 0; i < 25; i++) {
                    cards.push(new CodenamesCard(values[i]));
                }

                this.setCardColors(cards);

                this.db.doc(`codenames/games/games/${id}`).update({
                    cards: JSON.parse(JSON.stringify(cards))
                });

                return id;
            })
        );
    }

    generateRandomId(): string {
        const prefixes = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
        const suffixes = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

        return `${prefixes[this.getRandomInteger(prefixes.length)]}-${suffixes[this.getRandomInteger(suffixes.length)]}`;
    }

    getRandomInteger(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    private setCardColors(cards: Array<CodenamesCard>): void {
        const redCount = 7;
        const blueCount = 6;
        const blackCount = 1;

        this.shuffleArray(cards);

        for (let i = 0; i < redCount; i++) {
            cards[i].red = true;
        }

        for (let i = redCount; i < redCount + blueCount; i++) {
            cards[i].blue = true;
        }

        for (let i = redCount + blueCount; i < redCount + blueCount + blackCount; i++) {
            cards[i].black = true;
        }

        this.shuffleArray(cards);
    }

    private cardColorUnassigned(card: CodenamesCard): boolean {
        return !card.red && !card.blue && !card.black;
    }

    // LOTS OF LAZY SHUFFLING GOING ON HERE -- NEED TO THINK THROUGH
    private shuffleArray(array: Array<any>) {
        let counter = array.length;

        while (counter > 0) {
            const index = Math.floor(Math.random() * counter);

            counter--;

            const temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }
}
