//SIDEBAR
const menItems= document.querySelectorAll('.meu-item');
//Messages
const messagesNotification = document.querySelector('.messages');
const messages=document.querySelector('.messages');
const messageSearch=document.querySelector('message-search');



// theme
const theme = document.querySelector('#theme');
const thememModal = document.querySelector('.customize-theme');
const fontSize=document.querySelectorAll('.choose-size span');
var root =document.querySelector(':root');
const colorPallete = document.querySelectorAll('.bg-1');
const Bg1 = document.querySelector('.bg-1');
const Bg1 = document.querySelector('.bg-2');
const Bg1 = document.querySelector('.bg-3');




//==========Sidebar===============

// remove active class from all menu item
const changeActiveItem =() => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menItems.forEach(item => {
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup'),
            style.display='none',
        } else{
            document.querySelector('.notification.popup'),
            style.display='block';
            document.querySelector('#notifications.notification-count'),
            style.display='none';
        }
    })
})


//======================Messags=========
//search chats

const searchMessage=() =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat =>{
        let name=chat.querySelectorAll('h5').textcontent.toLowerCase
        ();
        if(name.indexOf(val) != -1){
            chat.style.display='flex';
        } else{
            chat.style.dislay='none';
        }
    })


    // search chat
    messageSearch.addEventListener('keyup',searchMessage);

    //hightlight messages card when messages menu item is clicked
    messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.dislay
    ='none';
    setTimeout (() => {
        messages.style.boxShadow='none';

    }, 2000);
})

// theme/display customization


//open modal
const openThemeModal = () => {
    thememModal.style.display = 'grid';
}

//close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')){
        thememModal.style.dislay='none';
    }
}

//close midal
thememModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click' , openThemeModal);




//=========FONTS========

fontSize.forEach(size =>{
    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('---sticky-top-left' , '5.4rem');
        root.style.setProperty('---sticky-top-right' , '5.4rem');

    } else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('---sticky-top-left' , '5.4rem');
        root.style.setProperty('---sticky-top-right' , '-7rem');

    
    } else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('---sticky-top-left' , '--2rem');
        root.style.setProperty('---sticky-top-right' , '-17rem');

    
    } else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('---sticky-top-left' , '-5rem');
        root.style.setProperty('---sticky-top-right' , '-25rem');

    } else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('---sticky-top-left' , '-12rem');
        root.style.setProperty('---sticky-top-right' , '-35rem');

    }

    
    //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })

})

// remove active class from colors
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPallete.forEach(color => {
    color.addEventListener('click',() => {
        let primary;
            changeActiveColorClass
            if(color.classList.contains('color-1')){
                primaryHue=252;
                
            } else if (color.classList.contains('color-2')){
                primaryHue=52;
            } else if (color.classList.contains('color-3')){
                primaryHue=352;
            } else if (color.classList.contains('color-1')){
                primaryHue=152;
            }else if  (color.classList.contains('color-1')){
                primaryHue=202;
            }
                color.classList.add('active'); 
                root.style.setProperty('--primary-color-hue', primaryHue);
        
    })
})



// theme BACKGROUND values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color
const changeBG =() => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--light-color-lightness', whiteColorLightness);
    root.style.setProperty('--light-color-lightness', darkColorLightness);

}




Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
           
    
    //add active class
    Bg2.classList.add('active');
    //remove active class from the other«ុs
    Bg1.classList.remove('active');
    Bg3.classList.remove('acitive');
    changeBG();
 
});
Bg3.addEventListener('click',() => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class 
    Bg3.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

//END/s។។។។។។។។។