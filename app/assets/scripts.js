
 
  (test = () => {
    console.log('here');
  })();


  // XMLHttpRequest() 

  // async example
  xmlExample = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'docs/hello.txt', true); // true signifies that the request is to be handled asynchronous
    // xhr.send();
    xhr.onload = (e) => {
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
    xhr.onerror = (e) => {
      console.error(xhr.statusText);
    };
    xhr.send(); // initiates the request
  }

  /////////////////////////////// XMLHttpRequest() ///////////////////////////////

  // xhrSuccess = () => {
  //   this.callback.apply(this, this.arguments);
  // }

  // xhrError = () => {
  //   console.error(this.statusText);
  // }

  // showMessage = (message) => {
  //   console.log(message + this.responseText);
  // }

  // loadFile = (url, callback) => { // hello.txt, showMessage() //
  //   var xhr = new XMLHttpRequest();
  //       xhr.callback = callback;
  //       xhr.arguments = Array.prototype.slice.call(arguments, 2);
  //       xhr.onload = xhrSuccess;
  //       xhr.onerror = xhrError;
  //       xhr.open('GET', url, true);
  //       xhr.send();
  // }

  // loadFile('docs/hello.txt', showMessage, 'New message!\n\n');




  /// asyncAwait(); 

  delay = (ms) => {
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


  // setTimeout()

  async function helloGoodBye() {
    console.log('Hello');
    setTimeout( () => {
      console.log('Goodbye!');
    }, 2000);
    await delay(1800);
    console.log('Hello Again');  
  }


  // Ajax request
  // $(function() {
  //     function getData(callback) { 
  //       $.get('https://jsonplaceholder.typicode.com/posts/1', callback);
  //     }

  //     var data = getData();
  //     console.log(data);
  //   });


  greeting = (name) => {
    alert('Hello ' + name);
  }

  processUserInput = (callback) => {
      let name = prompt('Please enter your name.');
      callback(name);
  }

  processUserInput(greeting);


        
      
      




  //---------- 

  // helloGoodBye();
  // asyncAwait();
  // xmlExample();
