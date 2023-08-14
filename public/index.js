let url="https://exact-space-ayush.onrender.com/"
// let url="http://localhost:3000/"

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputData = form.text.value;
    
    try {
        const parsedData = JSON.parse(inputData);
        fetch(`${url}api`,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(parsedData) 
        }).then(res=> res.json())
        .then((data)=>{
            Swal.fire({
                title: 'success',
                text: 'Request send successfully',
                icon: 'success'
            });
            displayData(data.msg)
        })
        .catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Please enter valid JSON',
            icon: 'error'
        });
    }
});

function displayData(text){
    let parent = document.getElementById("output");
    for(let data in text){
        let div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent = data;

        let input = document.createElement("input");
        input.value = text[data];
        input.style.padding = "10px";
        input.style.border = "1px solid #ccc";
        // input.style.padding = "10px";
        div.style.marginTop = "5px"
        
        div.append(label,input);

        parent.append(div);
    }
}