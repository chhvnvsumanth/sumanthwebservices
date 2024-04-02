document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username ==="sumanth"){
      if(password === "1234"){
        window.location.href ="home.html";
      }
      else{
        if (password ===""){
          document.getElementById("error-msg").innerText = "ENTER PASSWORD";
        }
        else{
          document.getElementById("error-msg").innerText = "ENTER CORRECT PASSWORD";
        }
      }
    }
    else{
      if (username ===""){
        document.getElementById("error-msg").innerText = "ENTER USERNAME";
        
      }
      else{
        document.getElementById("error-msg").innerText = "ENTER CORRECT USERNAME";
      }
      // return username;
    }
    // if(username === "sumanth" & password ==="4753"){
    //   document.getElementById("error-msg").innerText = "Success";
    // }
  
  });



  




    
  
