

//donate btn ay clik kory inputFiled acces hbe

document.getElementById("fristDonateBtn" ).
addEventListener("click",function(){
    const text = getInputFiled("fristInputFiled")
    const Blance = parseFloat(document.getElementById("fristBlance").innerText)
        const subsblance= Blance - text
        document.getElementById("fristBlance").innerText=subsblance
    
        const amount =  parseFloat(document.getElementById("Amount").innerText)
        const totalBlance = text + amount
    
        document.getElementById("Amount").innerText = totalBlance
    
       const vidssible = getFiledBtn("congrast")
       vidssible.className = "absolute top-18 left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
       vidssible.classList.remove("hidden")
   //close information

   const closebtn= getFiledBtn("closeBtn")
   closebtn.addEventListener("click",function(){
    const vidssible = getFiledBtn("congrast")
    vidssible.className = "absolute top-18 left-18 w-[350] lg:w-[500px] h-[300px] mx-auto border border-2px bg-white drop-shadow rounded-2xl"
    vidssible.classList.add("hidden")
   })

 
})



