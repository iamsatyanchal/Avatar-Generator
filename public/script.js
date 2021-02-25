// Let's Start 
 
// selecting components
let firstname, lastname, generate, avatar, ctx, color;
firstname = document.getElementById("firstname");
lastname = document.getElementById("lastname");
generate = document.querySelector("form");

//creating canvas
avatar = document.createElement("canvas");
avatar.width = avatar.height = "200";
ctx = avatar.getContext("2d");
ctx.font = `${avatar.width / 2}px Arial`;
ctx.textAlign = "center";

//generating color
color = [
            "#5050ff",                                                             
            "#50ff53",                              "#7f8c8d",
            "#ff5050",                                  "#e74c3c",
            "#ff5000",                                      "#c0392b",
            "#ff0050",                                          "#22ffcc",                                    
  "#1abc9c", "#00ff50", "#2c3e50", "#ff7600", "#0050ff", "#9b59b6", "#e722ff", 
  "#1abc9c", "#50ff00", "#2c3e50", "#95a5a6", "#f39c12", "#d35400",  "#e722ff",
  "#2ecc71", "#5000ff", "#f1c40f", "#e74c3c", "#bdc3c7", "#7f8c8d",  "#638a04",
  "#3498db", "#ff0000", "#e67e22", "#7f8c8d", "#000fc7", "#a0ff22", "#7f8c8d",
            "#E91E63",                                          "#7f8c8d",
            "#34495e",                                      "#a901ff",
            "#16a085",                                  "#0176ff",
            "#27ae60",                              "#FFC107",
            "#2980b9",                          "#FF5722",
            "#8e44ad", 
   
];


//functions
//function to get name initials
function getInitials() {
  if (lastname.value == "") {
    let Initials = firstname.value[0].toUpperCase();
    return Initials;
  } else {
    let Initials = (firstname.value[0] + lastname.value[0]).toUpperCase();
    return Initials;
  }
}

//function to create avatar
function createAvatar(Initials) {
  let random = Math.floor(Math.random() * color.length);
  //clear canvas
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, avatar.width, avatar.height);

  //add background
  ctx.fillStyle = `${color[random]}50`;
  ctx.fillRect(0, 0, avatar.width, avatar.height);

  //add text
  ctx.fillStyle = color[random];
  ctx.fillText(Initials, avatar.width / 2, (66 / 100) * avatar.height);

  //generate as Image
  let dataURL = avatar.toDataURL();
  document.getElementById("img").src = dataURL;
  document.getElementById("img1").href = dataURL;
}
//Event Listener
generate.addEventListener("submit", (e) => {
  e.preventDefault();
  createAvatar(getInitials());
});



let emoji = ["😀", "🤣", "😄", "😘", "😍", "😎", "😊", "😋", "😚", "😙", "😶", "🤗", "🤩", "😣", "😏", "🙄", "😶", "😪", "🤐", "😴", "😌", "😛", "🤑", "😜", "😝", "😲", "🤒", "🤕", "😷", "😱", "🥵", "😠", "🤧", "🧐", "🤓", "👿"];
let finalresult = emoji[Math.floor(Math.random() * emoji.length)];
      

// Preloaded avatar for example
createAvatar(`${finalresult}`);
