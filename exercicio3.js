const muURL = new URL('https://exemple.org:81/foo');
console.log(myURL.host);
//prints exemple.org:81
myURL.host = 'example.com:82';
console.log(myURL.href);
//prints https://example.com:82//foo