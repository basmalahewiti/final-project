let name = document.querySelector("#name");
let button = document.querySelector("#start");
let happy = document.querySelector("#happy");
let calm = document.querySelector("#calm");
let energrtic = document.querySelector("#energetic");
let bored = document.querySelector("#bored");
let curious = document.querySelector("#curious");
let stressed = document.querySelector("#stressed");
let result = document.querySelector("#result");
let mood = document.querySelector("#mood");
let greet = document.querySelector("#greeting");

button.addEventListener("click",function () {
    let input = name.value;
    if(input.length < 3){
        alert("Please enter a valid name with at least 3 letters")
        return;
    }
 greet.innerHTML = "Hello " + name.value + ", how are you feeling today?"
 document.querySelector("#welcome").style.display="block";
    document.querySelector("#mood").style.display = "block";
    });
    function show(mood){
         document.querySelector("#welcome").style.display="none";
        result.innerHTML ="";
        result.innerHTML = "<h1>" + mood + "</h1>"
     for(let i =0 ; i < hobbies.length ; i++){
        for( let j =0; j <hobbies[i].mood.length ; j++){
            if(hobbies[i].mood[j] === mood ){
          result.innerHTML += `

                   <div class="info">
                   <div class="text">
                        <h3>` + hobbies[i].name + `</h3>
                        <p>` + hobbies[i].description + `</p>
                        <p><b>Benefits : </b>` + hobbies[i].benefits + `</p> 
                        <p><b>Need : </b>` + hobbies[i].need + `</p>
                       <p><a href="` + hobbies[i].link + `" target="_blank">Learn more</a></p>
                       </div>
                       <img src= "` + hobbies[i].img + `" width="200">
                </div>
                 <hr>
                `;
               }
            }
        }
    }
    happy.addEventListener("click" , function(){
    show("happy");
     document.body.style.backgroundColor =" #fcffe3";
    document.body.style.color = "#9ea100";
    });
    calm.addEventListener("click" , function(){
         show("calm");
          document.body.style.backgroundColor =" #e0f7fa";
    document.body.style.color = "#006064" ;
    });
    energetic.addEventListener("click" , function(){
         show("energetic");  
          document.body.style.backgroundColor ="#e8f8f5";
    document.body.style.color = "#00695c" ;
    });
    curious.addEventListener("click" , function(){
         show("curious");
          document.body.style.backgroundColor = "#f3e5f5";
    document.body.style.color =  "#4a148c" ;
    });
    stressed.addEventListener("click" , function(){
         show("stressed");
          document.body.style.backgroundColor ="#ffebee";
    document.body.style.color = "#c62828"; 
    });
    bored.addEventListener("click" , function(){
         show("bored");
          document.body.style.backgroundColor ="#f8f4f0"; 
    document.body.style.color = "#4a3528"; 
    });