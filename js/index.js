

//Donate for Flood at Noakhali, Bangladesh

document.getElementById("fristDonateBtn" ).
addEventListener("click",function(){
    const text = getInputFiled("fristInputFiled")
    const Blance = parseFloat(document.getElementById("fristBlance").innerText)
    if(isNaN(text) || text>Blance){
       return alert("Invalid Input")
    }
    else{
    const subsblance= Blance - text
    document.getElementById("fristBlance").innerText=subsblance

    const amount =  parseFloat(document.getElementById("Amount").innerText)
    const totalBlance = text + amount

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

 
})

// Donate for Flood Relief in Feni,Bangladesh

document.getElementById("secondBtn").addEventListener("click",function(){
    const text = getInputFiled("secondinputFiled")
    const Blance =parseFloat(document.getElementById("secondBlance").innerText)
    if(isNaN(text) || text>Blance){
       return alert("Invalid Input")
    }
    const totalBlance = Blance - text;
    document.getElementById("secondBlance").innerText=totalBlance
    const amount = parseFloat(document.getElementById("Amount").innerText)
    const availbleBlance = totalBlance + amount
    document.getElementById("Amount").innerText=availbleBlance

    const closeBtn = getFiledBtn("congrast1")
    
    closeBtn.className = "absolute top- left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
    closeBtn.classList.remove("hidden")
  
    //close popUp remove
    document.getElementById("closeBtn1").addEventListener("click",function(){
        const removeBtn = getFiledBtn("congrast1")
        removeBtn.classList.add('hidden')
    })
    
})

//Aid for Injured in the Quota Movement

document.getElementById("thirdBtn").addEventListener("click",function(){
    const text = getInputFiled("inputFiled");
    const Blance = parseFloat(document.getElementById("Amount").innerText)
    if(isNaN(text) || text>Blance){
        return alert ("Invalid Input")
    }
    const totalBlance = Blance - text 
    document.getElementById("thirdBlance").innerText = totalBlance

    const amount = parseFloat(document.getElementById("Amount").innerText)
    const Amount = amount + text 
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
})