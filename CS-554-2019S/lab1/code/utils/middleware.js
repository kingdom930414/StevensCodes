"use strict";

// The first will log all request bodies, as well as the url path 
// they are requesting, and the HTTP verb they are using to make the request

function mid1(request, response, next) {
    const currentBody = JSON.stringify(request.body);
    const currentPath = request.path ;
    const currentHTTP = request.method;

    console.log(`---------------------------------------------
    HTTP header: ${currentHTTP}, for URL: ${currentPath},
    with body: ${currentBody}`);

    next();
}

// The second will keep track of many times a particular URL has been requested, 
// updating and logging with each request.
let currentNumberOfRequests = 0,
    pathsAccessed = {};

function mid2(request, response, next) {
    const currentPath = request.path ;

    if (!pathsAccessed[currentPath]) {
        pathsAccessed[currentPath] = 0
    }

    pathsAccessed[currentPath]++;
    currentNumberOfRequests++;

    console.log(`
    There have now been ${currentNumberOfRequests} requests made to the website.
    Where ${pathsAccessed[currentPath]} requests were made to ${currentPath}`);

    next();
}

module.exports = {
    mid1,
    mid2
};