
 
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

  /////////////////////////////// Promises ///////////////////////////////

  
  const fetchData = () => {
     console.log('...Data has been fetched');
   };


   // make API call here.
   const whileFetching = () => {
     console.log('Do something while fetching is in progress...');
   };

   const executeCommand = () => {
     console.log('Executing...');
     setTimeout(fetchData, 1000);

     new Promise((resolve, reject) => {
         resolve("Promise resolved");
       })

       .then(response => console.log(response))
       .catch(error => console.log(error));

     whileFetching();
   };

   executeCommand();




  /////////////////////////////// Async Await ///////////////////////////////



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
