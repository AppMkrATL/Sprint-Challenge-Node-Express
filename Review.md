# Review Questions

## What is Node.js?
 Node.js is a JavaScript runtime built on Chrome's V8 engine. It is event-driven and asynchronous. The NPM ecosystem is the largest open source library of packages.

 ## What is Express?	
 A web application framework for Node.js. Express is specifically very minimal and lightweight. Common uses involve routing, middlewares, and quick API building.

## Mention two parts of Express that you learned about this week.
 Routing to an endpoint and middlewares.

## What is Middleware?
 A middleware is software that executes a function in between the request and response.

What is a Resource?
 A resource is the data targeted by an HTTP request.

## What can the API return to help clients know if a request was successful?
 They can return a status code (200 in this case).

## How can we partition our application into sub-applications?
 An appliction can be broken up into different end-points that each serve different types of data.

## What is express.json() and why do we need it?
In short; body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with. You don't need it per se, because you could do all of that yourself. However, it will most likely do what you want and save you the trouble.
To go a little more in depth; body-parser gives you a middleware which uses nodejs/zlib to unzip the incoming request data if it's zipped and stream-utils/raw-body to await the full, raw contents of the request body before "parsing it" (this means that if you weren't going to use the request body, you just wasted some time).

After having the raw contents, body-parser will parse it using one of four strategies, depending on the specific middleware you decided to use:
- bodyParser.raw(): Doesn't actually parse the body, but just exposes the buffered up contents from before in a Buffer on req.body.
- bodyParser.text(): Reads the buffer as plain text and exposes the resulting string on req.body.
- bodyParser.urlencoded(): Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.
- bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.

Only after setting the req.body to the desirable contents will it call the next middleware in the stack, which can then access the request data without having to think about how to unzip and parse it.