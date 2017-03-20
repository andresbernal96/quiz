var url = require('url');
var request = require('request');
var options = {
    protocol: "http:",
    host: "search.twitter.com",
    pathname: '/search.json',
    query: {
        q: "codeschool"
    }
};
var searchURL = url.format(options);
request(searchURL, function (error, response, body) {
    console.log('error:', error);
    console.log('body:', body);
});
