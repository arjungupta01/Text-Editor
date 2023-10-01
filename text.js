
let editButtons = document.querySelectorAll(".editoptions");
let advancededitbutton = document.querySelectorAll(".adv-editoptions");
let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");
let textfield = document.getElementById("text-input");

let format = document.querySelectorAll(".format");


let fontList = ["Arial","Verdana","Times New Roman","Garamond","Georgia","Courier New","cursive"];


const initializer = () => {

    highlight(format, false);

    fontList.map((value)=>{
        let option=document.createElement("option");
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option);
    });

    for(let j=1;j<=7;j++)
    {
        let option=document.createElement("option");
        option.value=j;
        option.innerHTML=j;
        fontSize.appendChild(option);
    }

    fontSize.value=4;
      
};


const removehighlight = (className) => {
    className.forEach((button) => {
      button.classList.remove("active-the-button");
    });
  };




const highlight = (className, remove) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      
      if (remove==true) {
        let isalreadyActive = false;

        if (button.classList.contains("active-the-button")) {
          isalreadyActive = true;
        }

        removehighlight(className);
        if (isalreadyActive==false) {
  
          button.classList.add("active-the-button");
        }
      } else {
    
        button.classList.toggle("active-the-button");
      }
    });
  });
};


const changetext=(action,defaultAction,value)=>{

    document.execCommand(action,defaultAction,value);
};

editButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        changetext(button.id,false,null);
    });
});

advancededitbutton.forEach((button)=>{
    button.addEventListener("change",()=>{
        changetext(button.id,false,button.value);
    });
});


window.onload = initializer();



