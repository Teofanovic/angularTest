import { Component, Input } from "angular2/core";
import { LikeComponent } from "./like.component";

@Component({
    selector: "tweet",
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="mr-3" src="{{ data.imageUrl }}" alt="{{ data.author }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="mt-0 media-heading">
                    {{ data.author }} <span class="handle">{{ data.handle }}</span>
                </h4>
                {{data.body}}
            </div>
            <div>
                <like [likes]="data.likes" [isLiked]="data.isLiked"></like>
            </div>
        </div>
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [LikeComponent]

})
export class TweetComponent {
    @Input() data;
}