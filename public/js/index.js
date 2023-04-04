console.log("render")



const formData = document.querySelector('form')

formData.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const search = document.querySelector('input')
    document.getElementById("show_location").innerHTML = `<p>Loading ....</p>`
        document.getElementById("show_temprature").innerHTML = ''
    if(search.value == ''){
        return document.getElementById("show_location").innerHTML = `<p>Please provide a location</p>`
    }
    
fetch(`http://localhost:5000/wheather?address=${search.value}`).then((response)=>{

    response.json().then((data)=>{
        if (data.error) {
            document.getElementById("show_location").innerHTML = `<p>${data.error}</p>`
            
        }
        else{
        console.log(data);
        document.getElementById("show_location").innerHTML = `<p>${data.location}</p>`
        document.getElementById("show_temprature").innerHTML = `<p>${data.temprature} Degrees</p>`

    }
    })

})

})
