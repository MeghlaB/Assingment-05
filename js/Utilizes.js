// dontae And History button
 function getFiledBtn(id){
    const btn=document.getElementById(id).innerText
    btn.classList.add=(
        "px-14 py-2 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-l-x"
    )
    //history  btn remove
    document.getElementById("historyBtn").classList.remove(
        "px-14 py-2 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 mt-4 rounded-l-x"
    )

 }

 