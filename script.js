
const openPopupElement = document.querySelectorAll("[data-open-popup]");
const closePopupElement = document.querySelectorAll("[data-close-popup]");   
const blackPanel = document.querySelector(".black-panel");

//open popup


openPopupElement.forEach(element => {
    element.addEventListener('click',function(){
        openPopup(element.dataset.openPopup)
    })
})

function openPopup(element){
    if(element ==null) return;
    document.querySelector(element).classList.add("active");
    blackPanelOpen();
}

function blackPanelOpen(){
    blackPanel.classList.add("active");
}
function blackPanelClose(){
    blackPanel.classList.remove("active");
}

//PopupClose

closePopupElement.forEach(element =>{
    element.addEventListener('click',function(){
        const popup = element.closest('.popup');
        popupClose(popup);
    })
})

function popupClose(element){
    element.classList.remove("active");
    blackPanelClose();
    allPopupClose();
}

blackPanel.addEventListener('click',function(){
    blackPanelClose();
    allPopupClose();

})

function allPopupClose(){
    document.querySelectorAll(".popup.active").forEach(element =>{
        element.classList.remove("active");
    })
 }



 let tabs = document.querySelectorAll('.menu-slıder'),
     contents = document.querySelectorAll('.tabs-content');



     tabs.forEach((tab, indexqr) => {
        tab.addEventListener('click',() =>  {
            contents.forEach((content) => {
                content.classList.remove('is-active');
            });
            tabs.forEach((tab) => {
                tab.classList.remove('is-active');
            });

            contents[indexqr].classList.add('is-active');
            tabs[indexqr].classList.add('is-active');
        });
     });