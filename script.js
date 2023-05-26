const navBarEl = document.querySelector('.navBar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navBarEl.classList.add('navBar-scrolled');
    } else if (window.scrollY <= 10) {
        navBarEl.classList.remove('navBar-scrolled');
    }
});

const btn = document.querySelectorAll('button');
btn[0].addEventListener('click', showall);
btn[1].addEventListener('click', conferencesPublications);
btn[2].addEventListener('click', trainingsTutorials);
btn[3].addEventListener('click', personalProjects);

function showall() {
    const columns = document.getElementById('galleryID').querySelectorAll(".galleryColumn");
    var arrayLength = columns.length;
    for (var i = 0; i < arrayLength; i++) {
        for(var j=0, len = columns[i].childElementCount; j < len; ++j){
            //columns[i].children[j].style.backgroundColor = "yellow";
            columns[i].children[j].style.display = "block";
        }
    }
};

function conferencesPublications() {
    const columns = document.getElementById('galleryID').querySelectorAll(".galleryColumn");
    var arrayLength = columns.length;
    for (var i = 0; i < arrayLength; i++) {
        for(var j=0, len = columns[i].childElementCount; j < len; ++j){
            //columns[i].children[j].style.backgroundColor = "yellow";
            columns[i].children[j].style.display = "block";
            if (!(columns[i].children[j].classList.contains("cp"))) {
                columns[i].children[j].style.display = "none";
            }
        }
    }
};

function trainingsTutorials() {
    const columns = document.getElementById('galleryID').querySelectorAll(".galleryColumn");
    var arrayLength = columns.length;
    for (var i = 0; i < arrayLength; i++) {
        for(var j=0, len = columns[i].childElementCount; j < len; ++j){
            //columns[i].children[j].style.backgroundColor = "yellow";
            columns[i].children[j].style.display = "block";
            if (!(columns[i].children[j].classList.contains("tt"))) {
                columns[i].children[j].style.display = "none";
            }
        }
    }
};

function personalProjects() {
    const columns = document.getElementById('galleryID').querySelectorAll(".galleryColumn");
    var arrayLength = columns.length;
    for (var i = 0; i < arrayLength; i++) {
        for(var j=0, len = columns[i].childElementCount; j < len; ++j){
            //columns[i].children[j].style.backgroundColor = "yellow";
            columns[i].children[j].style.display = "block";
            if (!(columns[i].children[j].classList.contains("pp"))) {
                columns[i].children[j].style.display = "none";
            }
        }
    }
};
