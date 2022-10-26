const buttonscustomerType = document.querySelectorAll(".customerType")
const buttonsseatClass = document.querySelectorAll(".seatClass")
const buttonsseatComfort = document.querySelectorAll(".seatComfort")
const buttonsfoodsandDrinks = document.querySelectorAll(".foodsandDrinks")
const buttonsinflightEntertainment = document.querySelectorAll(".inflightEntertainment")
const buttonsonlineSupport = document.querySelectorAll(".onlineSupport")
const buttonseaseOfOnlineBooking = document.querySelectorAll(".easeOfOnlineBooking")
const buttonsonBoardService = document.querySelectorAll(".onBoardService")
const buttonslegRoomService = document.querySelectorAll(".legRoomService")
const buttonsonlineBoarding = document.querySelectorAll(".onlineBoarding")

const result = document.querySelector(".result")


const age = document.querySelector(".ageInput")
const flightDistance = document.querySelector(".flightDistance")

let btnCurrent = 0

const selections = {
    customerType: 0,
    age: 0,
    seatClass: 0,
    flightDistance: 0,
    seatComfort:0,
    foodsandDrinks:0,
    inflightEntertainment:0,
    onlineSupport:0,
    easeOfOnlineBooking:0,
    onBoardService: 0,
    legRoomService:0,
    onlineBoarding:0,

}






buttonscustomerType.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["customerType"] = i
    })
})

buttonsseatClass.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["seatClass"] = i
    })
})

buttonsseatComfort.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["seatComfort"] = i
    })
})

buttonsfoodsandDrinks.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["foodsandDrinks"] = i
    })
})

buttonsinflightEntertainment.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["inflightEntertainment"] = i
    })
})

buttonsonlineSupport.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["onlineSupport"] = i
    })
})

buttonseaseOfOnlineBooking.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["easeOfOnlineBooking"] = i
    })
})

buttonsonBoardService.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["onBoardService"] = i
    })
})


buttonslegRoomService.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["legRoomService"] = i
    })
})

buttonsonlineBoarding.forEach((btn,i)=> {
    btn.addEventListener("click",()=>{
        selections["onlineBoarding"] = i
    })
})


const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    if(age.value && flightDistance.value){
        selections["flightDistance"] = Number(flightDistance.value)
        selections["age"] = Number(age.value)
    }
    const res = await fetch("/predict_api",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({data:selections})
    })
    const resJson = await res.json()
    result.innerHTML = `Result: ${resJson["result"]}`
    console.log(resJson)
})