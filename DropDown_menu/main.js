const dropDownbutton = document.querySelectorAll(".dropbtn");
const Linktext = document.querySelectorAll(".dropdown-content");
dropDownbutton.forEach((btns, index) => {
  btns.addEventListener("mouseover", (event) => {
    let Dropdownbtnvalue = event.target.innerHTML;
    const highLight = Linktext[index].firstElementChild;
    highLight.innerHTML = Dropdownbtnvalue;
    Dropdownbtnvalue = "";
  });
});
