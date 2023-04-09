let memberButtons = document.querySelectorAll('.members a'),
    lightbox = document.querySelector('#lightbox');


function loadMemberData() {
    lightbox.querySelector('h2').textContent = members[this.dataset.member].name;
    lightbox.querySelector('h3').textContent = members[this.dataset.member].headline;
    lightbox.querySelector('p').textContent = members[this.dataset.member].bio;

}

memberButtons.forEach(member => member.addEventListener('click', loadMemberData));