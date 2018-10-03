import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-codenames-join',
    templateUrl: './codenames-join.component.html',
    styleUrls: ['./codenames-join.component.scss']
})
export class CodenamesJoinComponent implements OnInit {
    code: string = 'test';

    constructor() {}

    ngOnInit() {}
}
