// Clear By Default //


document.getElementById("jstxt").value = ""; 


// variables //

var jstxt = document.getElementById("jstxt");
var jstext = document.getElementById("jstxt").value;


//functions //


function run() {
  var wind = window.open("");
  
  wind.document.write("<script> " +  document.getElementById("jstxt").value  + "</script>" + "<title> JavaScript Testing </title> <button style='width:80px;height:50px;border:0;background-color:black;color:white;border-radius:20px;border:2px solid white;' onclick='window.close()'> Close Window </button> <p style='color:red;font-size:13px;font-family:sans-serif, 'Robotto';>! Warning If you Refresh, your progress will be lost ! </p>  " + "<style> body{background-color:black;}</style>");
  

}



// events //

document.getElementById("run").addEventListener("click" , run)
