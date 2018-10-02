export class CodenamesCard {
    public value: string;
    public locked: boolean = false;
    public red: boolean = false;
    public blue: boolean = false;
    public black: boolean = false;

    constructor(word: string) {
        this.value = word;
    }

    private isValid(): boolean {
        return !(this.red && this.blue) || !(this.red && this.black) || !(this.blue && this.black);
    }
}
