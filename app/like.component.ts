import { Component, Input } from "angular2/core";

@Component({
    selector: 'like',
    template: `
        <i (click)="onLikeClick()" [class.highlighted]="isLiked" class="glyphicon glyphicon-heart"></i>
        <span>{{likes}}</span>
    `,
    styles: [`
        .glyphicon-heart{
            font-size: 2.1em;
            color: #ccc;
            cursor: pointer;
        }

        .highlighted{
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() likes = 0;

    onLikeClick() {
        this.likes += this.isLiked ? -1 : 1;
        this.isLiked = !this.isLiked;
    }
}