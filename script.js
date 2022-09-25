let items = document.querySelectorAll('.item');
let header = document.querySelector('.item-message');
let notification = document.querySelector('#number');
let mark_all =document.querySelector('.mark-all');
let unread = document.querySelectorAll('.unread');


items.forEach((each)=>{
    each.addEventListener('click',function(e){
        each.classList.remove('unread');
        each.classList.add('read');

     updateNotification()
        // if(each.classList.contains('read')){
        //     each.classList.remove('read');
        //     each.classList.add('unread');
        // }else{
        //     each.classList.add('read');
        //     each.classList.remove('unread')
        // }
    })
})


    header.addEventListener('click',function(e){
        this.querySelector('#message').classList.toggle('closed')
    })



mark_all.addEventListener('click',function(e){
    items.forEach(each=>{
        removeClass(each);
        updateNotification()
    })
})

function removeClass(element){
    element.classList.remove('unread');
    element.classList.add('read');
    updateNotification();
}

function updateNotification(){
    let unread = document.querySelectorAll('.unread');
    notification.textContent = unread.length;
}