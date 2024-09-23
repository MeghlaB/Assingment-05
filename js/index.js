

//Donate for Flood at Noakhali, Bangladesh
document.getElementById("fristDonateBtn").
addEventListener("click",function(){
    const text = getInputFiled("fristInputFiled")
    const Blance = parseFloat(document.getElementById("fristBlance").innerText)
    const title = (document.getElementById("fristTitle").innerText)
    if(isNaN(text) || text>Blance || text<=0){
       return alert("Invalid Input")
    }
    else{
    const subsblance= Blance + text
    document.getElementById("fristBlance").innerText=subsblance

    const amount =  parseFloat(document.getElementById("Amount").innerText)
    const totalBlance = amount - text

    document.getElementById("Amount").innerText = totalBlance

   const vidssible = getFiledBtn("congrast")
   vidssible.className = "absolute top-18 left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
   vidssible.classList.remove("hidden")
 }
   //close information
   const closebtn= getFiledBtn("closeBtn")
   closebtn.addEventListener("click",function(){
    const vidssible = getFiledBtn("congrast")
    vidssible.className = "absolute top-18 left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
    vidssible.classList.add("hidden")
   })

   const historyItem = document.createElement("div")
   historyItem.className = "bg-white shadow-sm border border-2px border-gray-200 rounded-2xl py-6 px-8 items-center gap-3"

   historyItem.innerHTML =`
    <h1 class= "text-2xl text-black font-bold space-x-0 text-justify">${text.toFixed()} Taka is ${title}</h1>
    <p>Date ${new Date().toLocaleTimeString()}</p>
   `
   document.getElementById("historySection").appendChild(historyItem)
})

// Donate for Flood Relief in Feni,Bangladesh

document.getElementById("secondBtn").addEventListener("click",function(){
    const text = getInputFiled("secondinputFiled")
    const Blance =parseFloat(document.getElementById("secondBlance").innerText)
    const title = document.getElementById("titleFiled").innerText
    if(isNaN(text) || text>Blance){
       return alert("Invalid Input")
    }
    const totalBlance = Blance + text;
    document.getElementById("secondBlance").innerText=totalBlance
    const amount = parseFloat(document.getElementById("Amount").innerText)
    const availbleBlance = amount - totalBlance 
    document.getElementById("Amount").innerText=availbleBlance

    const closeBtn = getFiledBtn("congrast1")
    
    closeBtn.className = "absolute top- left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
    closeBtn.classList.remove("hidden")
  
    //close popUp remove
    document.getElementById("closeBtn1").addEventListener("click",function(){
        const removeBtn = getFiledBtn("congrast1")
        removeBtn.classList.add('hidden')
    })
    const historyItem = document.createElement("div")
    historyItem.className = "bg-white shadow-sm border border-2px border-gray-200 rounded-2xl py-6 px-8 items-center "
 
    historyItem.innerHTML =`
     <h1 class= "text-2xl text-black font-bold space-x-0 text-justify">${text.toFixed()} Taka is ${title}</h1>
     <p>Date ${new Date().toLocaleTimeString()}</p>
    `
    document.getElementById("historySection").appendChild(historyItem)
    
})
//Aid for Injured in the Quota Movement

document.getElementById("thirdBtn").addEventListener("click",function(){
    const text = getInputFiled("inputFiled");
    const Blance = parseFloat(document.getElementById("Amount").innerText)
    const title = document.getElementById("thirdTitle" ).innerText
    if(isNaN(text) || text>Blance){
        return alert ("Invalid Input")
    }
    const totalBlance = Blance + text 
    document.getElementById("thirdBlance").innerText = totalBlance

    const amount = parseFloat(document.getElementById("Amount").innerText)
    const Amount = amount - text 
    document.getElementById("Amount").innerText = Amount
    
    const remove = getFiledBtn("congrast2")
    remove.className =(
        "absolute top- left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
    )
    remove.classList.remove("hidden")

    //close popup hide
    document.getElementById("closeBtn2").
    addEventListener("click",function(){
        const remove1 = getFiledBtn("congrast2")
        remove1.classList.add("hidden")
    })
    const historyItem = document.createElement("div")
    historyItem.className = "bg-white shadow-sm border border-2px border-gray-200 rounded-2xl py-6 px-8 items-center "
 
    historyItem.innerHTML =`
     <h1 class= "text-2xl text-black font-bold space-x-0 text-justify">${text.toFixed()} Taka is ${title}</h1>
     <p>Date ${new Date().toLocaleTimeString()}</p>
    `
    document.getElementById("historySection").appendChild(historyItem)
})

//History

const historyBtn = document.getElementById("historyBtn")
const donationBtn = document.getElementById("donationBtn")
historyBtn.addEventListener("click",function(){
    
    historyBtn.classList.add('bg-praimary')
    historyBtn.classList.remove('bg-white')
    
    donationBtn.classList.remove('bg-praimary')
    donationBtn.classList.add('bg-white')

    document.getElementById("cardSection").classList.add("hidden")
})
//dontation
donationBtn.addEventListener("click",function(){
    
    donationBtn.classList.add('bg-praimary')
    donationBtn.classList.remove('bg-white')
    
    historyBtn.classList.remove('bg-praimary')
    historyBtn.classList.add('bg-white')
    document.getElementById("cardSection").classList.remove("hidden")
})
