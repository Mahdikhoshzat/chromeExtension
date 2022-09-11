
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabSave = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("del-btn")
const leadsFrom = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFrom)
if(leadsFrom){
    myLeads = leadsFrom
    renderFunc(myLeads)
}

tabSave.addEventListener("click",function(){
    chrome.tabs.query({active: true , currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        myLeads = JSON.stringify(myLeads)
        localStorage.setItem("myLeads",myLeads)
        myLeads = JSON.parse(myLeads)
        renderFunc(myLeads)
    })
})


deleteBtn.addEventListener("dblclick",function(){
    myLeads=[]
    localStorage.clear()
    renderFunc(myLeads)
})



inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    myLeads = JSON.stringify(myLeads)
    localStorage.setItem("myLeads",myLeads)
    myLeads = JSON.parse(myLeads)
    renderFunc(myLeads)
})

function renderFunc(arrOfLeads){
    let listItems = ""
for (let index = 0; index < arrOfLeads.length; index++) {
    listItems +=
        `<li>
            <a href=' ${arrOfLeads[index]} ' target='_blank'>
                ${arrOfLeads[index]}
            </a>
        </li>`

}
ulEl.innerHTML = listItems
}
