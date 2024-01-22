const username=document.querySelector("#username")

const email=document.querySelector("#email")
const password=document.querySelector("#password")


function removeDisabled(anyInput){
    anyInput.addEventListener('change',()=>{
        
        console.log(anyInput.value);
        
    })
}
removeDisabled(username)
removeDisabled(email)
removeDisabled(password)