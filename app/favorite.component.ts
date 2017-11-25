import { Component, Input, EventEmitter, Output } from "angular2/core";

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star{
            color: orange;
        }
    `]
})
export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onStarClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}