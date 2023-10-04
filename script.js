const cards=document.querySelectorAll('.card');
const observer= new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('card-show',entry.isIntersecting)
        //if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold:1,
    //rootMargin:"100px",
})

const lastCardObserver = new IntersectionObserver(entries=>{
    const lastCard=entries[0]
    if(!lastCard.isIntersecting) return
    loadNewcards();
    lastCardObserver.unobserve(lastCard,target)
    lastCardObserver.observe(document.querySelector(".card:last-child"))
},{})

lastCardObserver.observe(document.querySelector(".card:last-child"))

cards.forEach(card=>{
    observer.observe(card) 
})
const cardContainer=document.querySelector('.card-container')
function loadNewcards(){
    for(let i=0;i<10;i++){
        const card=document.createElement("div")
        card.textContent="New Card"
        card.classList.add("card-show")
        observer.observe(card)
        cardContainer.append(card)
    }
}
