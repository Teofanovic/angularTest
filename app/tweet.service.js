System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [{ author: "Uros Teo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "uteo", isLiked: true, likes: 10, imageUrl: "http://lorempixel.com/100/100/people" }, { author: "Milos milo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "mmilos", "isLiked": false, "likes": 15, imageUrl: "http://lorempixel.com/100/100/people" }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map