# api-demo
please run
npm install hateoas-client
at project foldeer: {path-to-api-demo} which will create a folder called node_modules as in: api-demo/node_modules


change
HttpAgent.registerResponseContentTypes(['application/json'], JsonHttpResponse);
to
HttpAgent.registerResponseContentTypes(['application/json'], JsonHalHttpResponse);
and move it to line 619
