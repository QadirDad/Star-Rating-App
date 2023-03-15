
const btn=document.querySelector("#btn")

btn.addEventListener('click', (e)=>{

    listing();
    e.preventDefault();
    
})

function listing(){
    const product=document.querySelector("#product").value
    const rating=document.querySelector("#rating").value
    const def=document.querySelector("#default").value
    const display=document.querySelector("#display")

    if(rating>=5.1 || rating<=0.9){
        alert("please rate 1-5")
        return;
    }
    if(product===def){
        alert("Please add product")
        return;
    }
    const table=`<tr>
                      <td>${product}</td>
                      <td>${rating}</td>    
                <tr>`
    display.innerHTML+=table;
    

    // if(){
    //     alert("hi")
    // }
    
    
    
    
    
    
    
    

    

    
    
    


    
    


    
    
    
}