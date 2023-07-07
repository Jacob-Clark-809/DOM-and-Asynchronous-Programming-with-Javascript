let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();

request.responseText; // Contains the response body once the request has completed