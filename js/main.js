//mobile off-canvas menu
  
document.getElementById("menu-hamburger").addEventListener("click", open);

function open() {

document.querySelector(".menu").classList.add("menu-open");

}

document.getElementById("menu-close").addEventListener("click" , close);

function close() {

document.querySelector(".menu").classList.remove("menu-open");

}



// Desktop dropdown nav

document.getElementById("menu-1-button").addEventListener("mouseover" , menuOneShow);

function menuOneShow() {
    document.getElementById("dropdown-menu-1").classList.add("show");


}

document.getElementById("menu-1-button").addEventListener("mouseleave" , menuOneHide);

function menuOneHide() {
    document.getElementById("dropdown-menu-1").classList.remove('show');
  }


  document.getElementById("menu-2-button").addEventListener("mouseover" , menuTwoShow);

  function menuTwoShow() {
      document.getElementById("dropdown-menu-2").classList.add("show");

  }

  document.getElementById("menu-2-button").addEventListener("mouseleave", menuTwoHide);

  function menuTwoHide() {
      document.getElementById("dropdown-menu-2").classList.remove("show");
  }


  //open & close modal popup


window.addEventListener("load", modalShow);

function modalShow() {
  document.getElementById("modal-hide").classList.add("show-modal");
}



  document.getElementById("modal-button-close").addEventListener("click" , modalClose);

  function modalClose() {
      
document.getElementById("modal-hide").classList.remove("show-modal");


  }