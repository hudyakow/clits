function myFunction() {
    var para = document.getElementById("myDropdown");
    para.classList.toggle("show");

    var up = document.getElementById("up");
    up.classList.toggle("rotate");
}

$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});

});

/*function openMenu() {
  var x = document.getElementById("mobile-menu-conten");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}*/
function buttonclick()    
{    
    var menuList = document.getElementById("menu-bar");    
    if (menuList.className == "menuOff")    
    {    
    
        menuList.className = "menuOn";    
    } else    
    {    
    
        menuList.className = "menuOff";    
    }    
}   


/*document.getElementById('mobile-menu').onclick = function() {
    document.getElementById('mobile-menu-content').style.display='block';
}*/

/*function openNav() {
    document.getElementById("mobile-menu-conten").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }*/

  /*function openNav() {
    const element = document.getElementById("mobile-menu-content");
    element.classList.toggle("menu-show");
  }*/
