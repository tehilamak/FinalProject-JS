//שליפת המתכון
let this_recipy = JSON.parse(sessionStorage.getItem("this_recipy"))
console.log(this_recipy)

//המתכון המלא
const details = () => {
    //שם
    let h1=document.createElement("p")
    h1.innerText=this_recipy.name
    nameRecipy.appendChild(h1)
    //מוצרי המתכון
    for (let index = 0; index < this_recipy.Allproducts.length; index++) {
        let thisrow = document.createElement("p")
        let span1 = document.createElement("span")
        span1.innerText = this_recipy.Allproducts[index].amount + " "
        span1.setAttribute("id", `idamount${index}`)
        let span2 = document.createElement("span")
        span2.innerText = this_recipy.Allproducts[index].size + " "
        let span3 = document.createElement("span")
        span3.innerText = this_recipy.Allproducts[index].product + ""
        thisrow.appendChild(span1)
        thisrow.appendChild(span2)
        thisrow.appendChild(span3)
        textRecipy.appendChild(thisrow)
    }
    //זמן אפיה
    let timeOfCook=document.createElement("p")
    timeOfCook.innerText="זמן בישול/אפיה: "+this_recipy.timecook+" דקות "
    nameRecipy.appendChild(timeOfCook)
    //שם שף
     let nameShef=document.createElement("p")
    nameShef.innerText="שף: "+this_recipy.shef
    nameRecipy.appendChild(nameShef)
    //תמונת מתכון
let imgRecipy=document.createElement("img")
imgRecipy.setAttribute("src",this_recipy.src)
nameRecipy.appendChild(imgRecipy)
//כפתור להדפסת המתכון
let printed=document.createElement("div")
printed.classList.add("bi-printer")
printed.addEventListener("click",(e)=>{window.print()})
nameRecipy.appendChild(printed)
//הוראות הכנה
let instract=document.createElement("div")
instract.innerText=this_recipy.instraction
textRecipy.appendChild(instract)



    // זמן אפיה -יצירת הטיימר
    let myclock
    let timer = document.createElement("input")
    timer.setAttribute("type", "button")
    timer.setAttribute("value", "התחל בישול/אפיה")
    let time = this_recipy.timecook
    timer.addEventListener("click", function () { timerfunc(time) })
    detailcard.appendChild(timer)
}

//קבלת זמן האפיה מהמערך והפעלת האינטרול
let seconds
let minutes
let hours
const timerfunc = (time) => {
    console.log(time)
    hours = Math.floor(time / 60)
    console.log(hours)
    minutes = time % 60
    if (minutes > 0) {
        minutes--
    }
    else {
        hours--
        minutes = 59
    }
    seconds = 60
    myclock = setInterval(loop, 1000)
}
//פעילות האינטרול
const loop = () => {
    let sec
    let min
    let hou
    seconds--
    if (seconds < 10)
        sec = "0" + seconds
    else
        sec = seconds
    if (minutes < 10)
        min = "0" + minutes
    else
        min = minutes
    if (hours < 10)
        hou = "0" + hours
    else
        hou = hours
    ptimer.innerText = hou + ":" + min + ":" + sec
    if (seconds == 0) {
        if (minutes == 0) {
            if (hours != 0)
                hours--
            minutes = 59
            seconds = 60
            if (hours == 0)
                finish()
        }

        else {
            minutes--
            seconds = 60
        }
    }


}
//הפסקת הטיימר
const finish = () => {
    clearInterval(myclock)
}

//הכפלת כמויות -פונקציה 
const changeamount = (e) => {
    if (e.target.value > 0) {
        for (var index = 0; index < this_recipy.Allproducts.length; index++) {
            let multamount = this_recipy.Allproducts[index].amount * e.target.value
            console.log(multamount)
            console.log(`idamount${index}`)
            let idn = document.getElementById(`idamount${index}`)
            idn.innerText = multamount + " "
        }
    }
}