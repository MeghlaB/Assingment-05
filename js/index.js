
//History
const historyBtn = document.getElementById("historyBtn")
const donationBtn = document.getElementById("donationBtn")
historyBtn.addEventListener("click",function(){
    
    historyBtn.classList.add('bg-praimary')
    historyBtn.classList.remove('bg-white')
    donationBtn.classList.remove('bg-praimary')
    donationBtn.classList.add('bg-white')
    document.getElementById("historySection").classList.remove("hidden")
    document.getElementById("cardSection").classList.add("hidden")
})
//dontation
donationBtn.addEventListener("click",function(){
    
    donationBtn.classList.add('bg-praimary')
    donationBtn.classList.remove('bg-white')
    
    historyBtn.classList.remove('bg-praimary')
    historyBtn.classList.add('bg-white')
    document.getElementById("cardSection").classList.remove("hidden")
    document.getElementById("historySection").classList.add("hidden")
})
//Donate for Flood at Noakhali, Bangladesh
document.getElementById("fristDonateBtn").
addEventListener("click",function(){
    const text = getInputFiled("fristInputFiled")
    document.getElementById("fristInputFiled").value ='';
    const Blance = parseFloat(document.getElementById("fristBlance").innerText)
    const amount =  parseFloat(document.getElementById("Amount").innerText)
    const title = (document.getElementById("fristTitle").innerText)
    if(isNaN(text) || text<=0 ){
       return alert("Invalid Input")
    }
    if(amount < text){
        alert("Not Money This Account")
        return 
    }
    else{
    const subsblance = Blance + text
    document.getElementById("fristBlance").innerText = subsblance

    const totalBlance = amount - text
    document.getElementById("Amount").innerText = totalBlance
  
    }
    const historyContainar = document.getElementById("historySection")
    const historyItem = document.createElement("div")
    historyItem.innerHTML =`
        <div class="border-2 p-5 rounded-xl mt-4 space-y-4">
              <h1 class="text-2xl font-bold" >${text.toFixed(2)} ${title}</h1>
              <p class="text-xl py-3 px-4 bg-red-50 rounded-lg">Date: ${new Date().toString()}</p>
        </div>
    `
    historyContainar.insertBefore(historyItem, historyContainar.fristChild)
    document.getElementById("my_modal_1").showModal();

})
 

// Donate for Flood Relief in Feni,Bangladesh
 document.getElementById("secondBtn").addEventListener("click",function(){
     const text = getInputFiled("secondinputFiled")
     document.getElementById("secondinputFiled").value ='';
     const Blance =parseFloat(document.getElementById("secondBlance").innerText)
     const amount = parseFloat(document.getElementById("Amount").innerText)
     const title = document.getElementById("titleFiled").innerText
    
     
      if(isNaN(text)  || text<= 0 ){
         return alert("Invalid Input")
      }
      if(amount < text){
        alert("Not Money This Account")
        return 
    }
      else{
          const totalBlance = Blance + text;
          document.getElementById("secondBlance").innerText = totalBlance
      
          const availbleBlance = amount - text 
         document.getElementById("Amount").innerText= availbleBlance
        
         //  document.getElementById("Amount").innerText = totalBlance
          const historyContainar = document.getElementById("historySection")
         const historyItem = document.createElement("div")
         historyItem.innerHTML =`
             <div class="border-2 p-5 rounded-xl mt-4 space-y-4">
                 <h1 class="text-2xl font-bold">${text.toFixed(2)} ${title}</h1>
                 <p class="text-xl py-3 px-4 bg-red-50 rounded-lg">Date: ${new Date().toString()}</p>
             </div>
         `
         historyContainar.insertBefore(historyItem, historyContainar.fristChild)
         document.getElementById("my_modal_1").showModal();
        
      }
 })

//Aid for Injured in the Quota Movement

document.getElementById("thirdBtn").addEventListener("click",function(){
    const text = getInputFiled("inputFiled");
    document.getElementById("inputFiled").value ='';
    const Blance = parseFloat(document.getElementById("thirdBlance").innerText)
    const amount = parseFloat(document.getElementById("Amount").innerText)
    const title = document.getElementById("thirdTitle" ).innerText
    if(isNaN(text) || text<=0 ){
        return alert ("Invalid Input")
    }
    if(amount < text){
        alert("Not Money This Account")
        return 
    }
    else{
        const totalBlance = Blance + text 
        document.getElementById("thirdBlance").innerText = totalBlance
        const Amount = amount - text 
        document.getElementById("Amount").innerText = Amount
    }
    const historyContainar = document.getElementById("historySection")
    const historyItem = document.createElement("div")
    historyItem.innerHTML =`
        <div class="border-2 p-5 rounded-xl mt-4 space-y-4">
              <h1 class="text-2xl font-bold">${text.toFixed(2)} ${title}</h1>
              <p class="text-xl py-3 px-4 bg-red-50 rounded-lg">Date: ${new Date().toString()}</p>
        </div>
    `
    historyContainar.insertBefore(historyItem, historyContainar.fristChild)
    document.getElementById("my_modal_1").showModal();
})

