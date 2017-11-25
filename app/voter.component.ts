import { Component, Input, Output, EventEmitter } from "angular2/core";

@Component({
    selector: 'voter',
    template: `
    <div class="voter">
        <i [class.highlighted]="myVote == 1" (click)="voteUp()" class="glyphicon glyphicon-menu-up"></i>
            <span>{{voteCount}}</span>
        <i [class.highlighted]="myVote == -1" (click)="voteDown()" class="glyphicon glyphicon-menu-down"></i>
    </div>
    `,
    styles: [`
        .voter {
            margin: 50px;
            width: 20px;
            text-align: center;
            color: #999;
        }

        .highlighted{
            color: orange;
            font-weight: bold;
        }

        .voter i{
            cursor: pointer;
        }

        .voter span{
            font-size: 1.5em;
        }
    `]
})
export class VoterComponent {

    @Input() voteCount;
    @Input() myVote;

    @Output() vote = new EventEmitter();

    voteUp() {
        if (this.myVote == 1) {
            return;
        }

        this.myVote++;
        this.voteCount++;

        this.vote.emit({ myVote: this.myVote });
    };

    voteDown() {
        if (this.myVote == -1) {
            return;
        }

        this.myVote--;
        this.voteCount--;

        this.vote.emit({ myVote: this.myVote });
    };
}