const buttons = document.querySelectorAll(".projects-buttons button");
const projects = document.querySelectorAll(".project-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    const category = button.getAttribute("data-category");
    if (category === "all") {
      projects.forEach((project) => {
        project.style.display = "block";
      });
    } else {
      projects.forEach((project) => {
        project.style.display = "none";
      });
    }
    const selectedProjects = document.querySelectorAll(`.${category}`);
    selectedProjects.forEach((project) => {
      project.style.display = "block";
    });
  });
});

const links = document.querySelectorAll(".navbar-desktop a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((element) => {
      element.classList.remove("active");
    });

    link.classList.add("active");
  });
});

const linksMobile = document.querySelectorAll(".navbar-mobile a");
linksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    linksMobile.forEach((element) => {
      element.classList.remove("active");
    });

    link.classList.add("active");
  });
});


const menu = document.getElementById('menu')
const menuMobile =document.getElementById('menu-mobile')

const openMenu = () =>{
  if(menuMobile.style.display === 'none' ||menuMobile.style.display === '' ){
    menuMobile.style.display = 'flex'
    menu.src = "https://img.icons8.com/material-outlined/30/fd6f00/delete-sign.png"
  }else{
    menuMobile.style.display = 'none'
    menu.src = "https://img.icons8.com/ios-filled/30/fd6f00/menu--v6.png"
  }

}

menu.addEventListener('click', openMenu)


