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
                    return [{ author: "Uros Teo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "uteo", "isLiked": true, "likes": 10 }, { author: "Milos milo", body: "LOrem sidufhsdiuf buisbd fsdui fbsd ifubds", handle: "mmilos", "isLiked": false, "likes": 15 }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map