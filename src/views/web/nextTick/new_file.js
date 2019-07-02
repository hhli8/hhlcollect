/* setTimeout(function() { 
      console.log(1) // 5
    }, 0)
    new Promise(function executor(resolve) {
      console.log(2) // 1
      for(var i = 0; i < 10000; i++) {
        i == 9999 && resolve();
      } 
      console.log(3) // 2
    }).then(function() {
      console.log(4) // 4
    })
    console.log(5) // 3 */