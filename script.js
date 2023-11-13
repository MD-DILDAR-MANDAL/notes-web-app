
//click on new note
let neww = document.querySelector('.new-btn');
let newNotes = document.querySelector('.new-notes');
neww.onclick = () =>{
    saveNotes.classList.remove('active');
    about_con.classList.remove('active');

    newNotes.classList.toggle('active');
}

//click on saved

let save = document.querySelector('.saved-btn');
let saveNotes = document.querySelector('.saved');
save.onclick = () =>{
    newNotes.classList.remove('active');
    about_con.classList.remove('active');

    saveNotes.classList.toggle('active');
}

//click on about
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let about = document.querySelector('.about');
let about_con = document.querySelector('.about-con');
about.onclick = async () =>{
    about_con.classList.toggle('active');
    await sleep(1500);
    about_con.classList.remove('active');

}

let help = document.querySelector('.help');
let help_con = document.querySelector('.help-con');
help.onclick = async () =>{
    help_con.classList.toggle('active');
    await sleep(1500);
    help_con.classList.remove('active');

}