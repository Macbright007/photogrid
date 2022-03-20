const icon = document.getElementById("icon_search");
const input = document.getElementById("input_value");

const filterFunction = () => {
  const section = document.querySelectorAll(".cute");
  section.forEach((sec) => {
    let searchedWord = sec.querySelector("p");
    if (
      searchedWord.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) >
      -1
    ) {
      sec.style.display = "";
      console.log("hello")
      
    }  
    else { 
      sec.style.display = "none";
    }
  });
};
icon.addEventListener("click", filterFunction);
