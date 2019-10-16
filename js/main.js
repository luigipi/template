// JS script by Peter //

 // Do some DOM selection 
const menuBtn = document.querySelector('#m-menu');
const menu = document.querySelector('.mobile-menu');
const menuList = document.querySelector('#menu-list');
const activeBtn = menuList.querySelector('.link-item');
const toTop = document.querySelector('#to-top');

// initial state of menu
let showMenu = false; 

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.remove('hidden');

		// set menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.add('hidden');

		//set menu state
		showMenu = false;
	}
}

for(i = 0; i < activeBtn.length; i++) {
	activeBtn[i].addEventListener('click', function() {
			var current = document.getElementsByClassName('active');
			current[0].className = current[0].className.replace('active', ' ');
			this.className+= 'active';
	});
}


/*document.getElementById('m-menu').addEventListener('click', toggleMenu() {

    function toggleMenu() {
      var elem = document.querySelector('.mobile-menu');
      if(elem.classList.contains('hidden')) {
        document.querySelector('.mobile-menu').classList.remove('hidden');
      } else {
        document.querySelector('.mobile-menu').classList.add('hidden');
        }
    }

    
})*/

toTop.addEventListener('click', () => {
	window.scrollTo(0,0);
})