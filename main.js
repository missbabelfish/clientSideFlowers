document.querySelector('#getFlower').addEventListener('click', apiRequest)

async function apiRequest(){
    const flower = document.querySelector('#flowers').value
    try{
        const response = await fetch(`https://rare-flowers-api.herokuapp.com/api/${flower}`)
        const data = await response.json()

        console.table(data)
        document.querySelector('#name').innerText = `Name: ${data.name}`
        document.querySelector('img').src = data.img
        document.querySelector('#species').innerText = `Species: ${data.species}`
        document.querySelector('#type').innerText = `Plant Type: ${data.type}`
        document.querySelector('#size').innerText = `Size: ${data.size}`
        document.querySelector('#conservation').innerText = `Conservation Status: ${data.conservation}`
        document.querySelector('#origin').innerText = `Origin: ${data.origin}`
        document.querySelector('#homegrow').innerText = `Can I grow it at home? ${data.homegrow}`
        document.querySelector('#whyRare').innerText = `Why it\'s rare: ${data.whyRare}`

    }catch(error){
        console.log(error)
    }
}