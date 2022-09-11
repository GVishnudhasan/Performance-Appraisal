const selected=document.querySelector(".selective");
const optionsContainer=document.querySelector(".options-container");
const optionsList=document.querySelectorAll(".option");
selective.addEventListener("click",() => {
	optionsContainer.classList.toggle("active");

});
optionsList.forEach(0 => {
	0.addEventListener("click",() => {
		selective.innerHTML=0.querySelector("label").innerHTML;
		optionsContainer.classList.remove("active");
	});
});