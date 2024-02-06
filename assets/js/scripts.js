const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");


/*-----*/ 

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");
  /*opc*/
  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi bi-brightness-high")
  toggleTheme.classList.toggle("bi bi-brightness-high-fill")
}



toggleTheme.addEventListener("click", changeTheme);


/**lista */
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})



var words = ['Desarrollador frond-end ','  Soporte TI ','Linux','windows'],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;
    

    
setInterval(function(){
  if(wordWrapperContent.length > 1 && !addingWord  ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -3);
    wordWrapperContent = wordWrapper.innerHTML;
    
    

  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 4);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
    
  }

}, 200);




