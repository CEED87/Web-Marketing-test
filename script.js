const button = document.querySelectorAll('.dropdown')

button.forEach((el) => {
    el.addEventListener('click', (e)=> {
        el.lastElementChild.classList.toggle("show")   
    })
    
})

// function myFunction(e) {
//     console.log(e.target)
//     // document.getElementById("myDropdown").classList.toggle("show");
//   }

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }