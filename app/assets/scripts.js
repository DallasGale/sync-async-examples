(test = () => {
  console.log('here');
})();


/////////////////////////////// XMLHttpRequest() ///////////////////////////////

// async example
const xhr = new XMLHttpRequest();
      xhr.open('GET', 'docs/hello.txt', true); // true signifies that the request is to be handled asynchronous
      // xhr.send();
      xhr.onload = function(e) {
        if ( xhr.readyState === 4 ) { //4 means complete
          console.log('xhr.readyState = ' + xhr.readyState);
          if ( xhr.status === 200 ) {
            console.log('xhr.status = ' + xhr.status);
          } else {
            console.error('xhr.statusText = ' + xhr.statusText);
          }
        }
        console.log('Asynchronous hello.txt: ', this.response);
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(); // initiates the request

/////////////////////////////// XMLHttpRequest() ///////////////////////////////

function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function showMessage(message) {
  console.log(message + this.responseText);
}

function loadFile(url, callback) { // hello.txt, showMessage() //
  var xhr = new XMLHttpRequest();
      xhr.callback = callback;
      xhr.arguments = Array.prototype.slice.call(arguments, 2);
      xhr.onload = xhrSuccess;
      xhr.onerror = xhrError;
      xhr.open('GET', url, true);
      xhr.send();
}

loadFile('docs/hello.txt', showMessage, 'New message!\n\n');




//////////////////////////////////// fetch() ///////////////////////////////////

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function asyncAwait() {
  console.log('1');

  await delay(1000);
  console.log('2');

  await delay(1000);
  console.log('3');
}

asyncAwait();
