import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { TweetService } from './tweet.service';

@Component({
    selector: 'my-app',
    template: `
    <div *ngFor="#tweet of tweets">
        <tweet [data]="tweet"></tweet>
    </div>
    `,
    directives: [FavoriteComponent, LikeComponent, VoterComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets: object[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}