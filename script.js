//your JS code here. If required.
function createPromise(){
   return new Promise((resolve) => 
     
      setTimeout(() => {
         resolve("Hello, world!")
      },1000))
}

let displayDiv = document.getElementById("output");
createPromise()
.then((result) => displayDiv.innerText= result )

.catch((err) => console.log(err));