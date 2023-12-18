let profileName = document.querySelector('#profile__input_name');
console.log(`Значение p1 = ${profileName.placeholder}`);

let profileAbout = document.querySelector(`#profile__input_About`);
console.log(`Значение p1 = ${profile__input_About.placeholder}`);

let profileButton = document.querySelector('.profile__add');

console.log(`Значение button = ${profileButton}`);

function showClick() {
    console.log(`Имя = ${profileName.value}\nО себе = ${profileAbout.value}`);
}

profileButton.addEventListener('click', showClick);

let profilePhoto = document.querySelector('.profile__photo');

