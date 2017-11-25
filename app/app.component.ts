import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

@Component({
    selector: 'my-app',
    template: `
        <voter 
            [myVote]="post.myVote" 
            [voteCount]="post.voteCount"
            (vote)="onVote($event)">
        </voter>,
    `,
    directives: [FavoriteComponent, LikeComponent, VoterComponent]
})
export class AppComponent {
    post = {
        voteCount: 10,
        myVote: 0
    };

    onVote($event) {
        console.log($event);
    }
}