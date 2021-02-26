document.querySelector('.modal-btn').addEventListener('click',toggleHidden)
document.querySelector('.subscribe').addEventListener('click',toggleHidden)



function toggleHidden(){
    document.querySelector('.modal-bg').classList.toggle('hidden')
}