export class TweetService {
    getTweets(): object[] {
        return [{author: "Uros Teo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "uteo", isLiked: true, likes: 10, imageUrl: "http://lorempixel.com/100/100/people"}, {author: "Milos milo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "mmilos", "isLiked": false, "likes": 15, imageUrl: "http://lorempixel.com/100/100/people"}]
    }
}