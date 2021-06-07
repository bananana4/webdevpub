function addingPics(){

let aCont = document.getElementsByClassName("aContainer");


  var badios = document.querySelector("button")
  

  
  let huh = document.querySelector('h2');
  

  badios.addEventListener("click", function(){
    
   
    let result = parseInt(document.querySelector('input[name="contact1"]:checked').value) + parseInt(document.querySelector('input[name="contact2"]:checked').value) + parseInt(document.querySelector('input[name="contact3"]:checked').value);
      

    
    
      
      
      
      function One() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/57e3d3444d51ac14f1dc8460962e33791c3ad6e04e507440752f78d0974cc2_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      

      function Two() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/55e8d7444e57a814f1dc8460962e33791c3ad6e04e5074417c2e7dd29744c7_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      

      function Three() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/57e2d54a4255a914f1dc8460962e33791c3ad6e04e50744172287ad2934cc3_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      

      function Four() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/53e3d44a4950aa14f1dc8460962e33791c3ad6e04e507440722d72d5944ccd_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      

      function Five() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/53e4d0444d5aad14f1dc8460962e33791c3ad6e04e507440722d72d5954ec2_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }

      function Six() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/55e5d5444953ab14f1dc8460962e33791c3ad6e04e50744172297bd59749c5_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }

      function Seven() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/speule-3000150_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }

      function Eight() {
        var x = document.createElement("IMG");
        x.setAttribute("src", "https://randomwordgenerator.com/img/picture-generator/51e6d0444c53b10ff3d8992cc12c30771037dbf852547849752c7fd79f4e_640.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }
      
      function caseInSwitch(result) {
        
        switch(result){
        case 111:
        answer = One();
        break;
        case 112:
          answer = Two();
        break;
        case 121:
          answer = Three();
        break;
        case 122:
          answer = Four();
        break
        case 211:
          answer = Five();
        break
        case 212:
          answer = Six();
          break
        case 221:
          answer = Seven();
          break
      case 222:
          answer = Eight();
          break
       
        }
        return answer;
        }
        caseInSwitch(result);
      
      
      
  
  });

    /*let div = document.createElement("DIV");
    image.id = "photo";
    
    let img = document.createElement("IMG");
    img.src("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3vxMkwObNrazxqYlSYqOJJdhBzpHN7LQ1g&usqp=CAU");

    
    div.append('img');
    quizCont.append('div');*/
    var remv = document.querySelector('[id="rem"]')
    remv.addEventListener("click", function(){
      location.reload();
    return false;
    })
      

}

addingPics();