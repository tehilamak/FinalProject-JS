

// /מערכי אוביקטים
let meet_chicken = [
    { name: "אורז מוקפץ עם פרגיות", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/אורז מוקפץ עם פרגיות.jpg", timecook: "25", response:[],Allproducts:[{product:"מלח",amount:5,size:"כוסות"},{product:"קמחים",amount:2,size:""},{product:"סוכר",amount:1,size:"קילו"}],instraction:"בררו את האורז בשלו אותו הכניסו את הפרגיות והפלפלים ואפו" },
    { name: "אסאדו מפורק", shef: "אפרת ליבפרוינד", level: "בינוני", src: "../pic/אסאדו מפורק.jpg", timecook: "250",Allproducts:[{product:"בשר אסאדו",amount:1,size:"קילו"},{product:"יין",amount:2,size:"כוסות"},{product:"פפריקה",amount:1,size:"כפית"}],instraction:"בשלו את הבשר עם היין והפפריקה " },
    { name: "בשר הודו על פיתה", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/בשר הודו על פיתה.jpg", timecook: "15",Allproducts:[{product:"אורז",amount:5,size:"כוסות"},{product:"פלפלים",amount:2,size:""},{product:"פרגיות",amount:1,size:"קילו"}] },
    { name: "חזה עוף מקורמל בסילאן", shef: "אביגיל מייזליק", level: "קל", src: "../pic/חזה עוף מקורמל בסילאן.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"},{product:"פלפלים",amount:2,size:""},{product:"פרגיות",amount:1,size:"קילו"}] },
    { name: "חזה עוף עם פטריות וגמבה", shef: "אביגיל מייזליק", level: "בינוני", src: "../pic/חזה עוף עם פטריות וגמבה.jpg", timecook: "25",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "חצילים עם בשר טחון", shef: "אביגיל מייזליק", level: "קשה", src: "../pic/חצילים עם בשר טחון.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "ניוקי עם כבד עוף", shef: "מירי זורגר", level: "קל", src: "../pic/ניוקי עם כבד עוף.jpg", timecook: "80",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "עוף בעלי בזיליקום", shef: "מירי זורגר", level: "קשה", src: "../pic/עוף בעלי בזילקום.jpg", timecook: "35",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "פרגיות במרינדה", shef: "מירי זורגר", level: "בינוני", src: "../pic/פרגיות במרינדה.jpg", timecook: "35",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "פרגיות בצ'ילי ודבש", shef: "פרי פח", level: "קל", src: "../pic/פרגיות בצ'ילי ודבש.jpg", timecook: "40",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "שוקיים בסיר", shef: "פרי פח", level: "קל", src: "../pic/שוקיים בסיר.jpg", timecook: "120",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "עוף בזעתר", shef: "פרי פח", level: "קל", src: "../pic/עוף בזעתר.jpg", timecook: "150",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] }
]

let bread = [
    { name: "אמפנדס במילוי בשר", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/bread/אמפנדס במילוי בשר.jpg", timecook: "90",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "אצבעות פילו במילוי גבינה", shef: "אפרת ליבפרוינד", level: "קשה", src: "../pic/bread/אצבעות פילו במילוי גבינה.jpg", timecook: "50",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "ביגלה ירושלמי", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/bread/ביגלה ירושלמי.jpg", timecook: "10" ,Allproducts:[{product:"אורז",amount:5,size:"כוסות"}]},
    { name: "חטיפי גבינת טוב טעם", shef: "אביגיל מייזליק", level: "קל", src: "../pic/bread/חטיפי גבינת טוב טעם.jpg", timecook: "30" ,Allproducts:[{product:"אורז",amount:5,size:"כוסות"}]},
    { name: "חטיפי רויון", shef: "אביגיל מייזליק", level: "בינוני", src: "../pic/bread/חטפי רויון.jpg", timecook: "90",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "לחם כוסמין", shef: "אביגיל מייזליק", level: "קל", src: "../pic/bread/לחם כוסמין.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "לחמניות במילוי שוקולד", shef: "מירי זורגר", level: "בינוני", src: "../pic/bread/לחמניות במילוי שוקולד.jpg", timecook: "45",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "לחמניות טחינה ללא גלוטן", shef: "מירי זורגר", level: "קל", src: "../pic/bread/לחמניות טחינה ללא גלוטן.jpg", timecook: "25",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "לחמניות מקמח מלא", shef: "מירי זורגר", level: "בינוני", src: "../pic/bread/לחמניות מקמח מלא.jpg", timecook: "35",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "לחמניות מתוקות", shef: "מירי זורגר", level: "קל", src: "../pic/bread/לחמניות מתוקות.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] }
]
let salat = [
    { name: "סחוג ירוק", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/salat/סחוג ירוק.jpg", timecook: "90",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט ברוקולי וירקות אפויים", shef: "אפרת ליבפרוינד", level: "קשה", src: "../pic/salat/סלט ברוקולי וירקות אפויים.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט בריאות עם אבוקדו", shef: "אפרת ליבפרוינד", level: "קשה", src: "../pic/salat/סלט בריאות עם אבוקדו.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט חלומי", shef: "מירי זורגר", level: "קשה", src: "../pic/salat/סלט חלומי.jpg", timecook: "65" ,Allproducts:[{product:"אורז",amount:5,size:"כוסות"}]},
    { name: "סלט חסה גזר וגמבה", shef: "מירי זורגר", level: "קל", src: "../pic/salat/סלט חסה גזר וגמבה.jpg", timecook: "25",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט חסה וכרוב", shef: "מירי זורגר ", level: "בינוני", src: "../pic/salat/סלט חסה וכרוב.jpg", timecook: "30",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט חסה ונבטים", shef: "פרי פח", level: "קשה", src: "../pic/salat/סלט חסה ונבטים.jpg", timecook: "20",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט חצילים בטחינה", shef: "פרי פח", level: "בינוני", src: "../pic/salat/סלט חצילים בטחינה.jpg", timecook: "40",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט חצילים בתנור", shef: "פרי פח", level: "קל", src: "../pic/salat/סלט חצילים בתנור.jpg", timecook: "50",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט טאבולה", shef: "אביגיל מייזליק", level: "בינוני", src: "../pic/salat/סלט טאבולה.jpg", timecook: "60",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט ירוק", shef: "פרי פח", level: "קל", src: "../pic/salat/סלט ירוק.jpg", timecook: "25",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט כרוב צבעוני", shef: "פרי פח", level: "בינוני", src: "../pic/salat/סלט כרוב צבעוני.jpg", timecook: "50" ,Allproducts:[{product:"אורז",amount:5,size:"כוסות"}]},
    { name: "סלט מלפפונים גזר וצנונית", shef: "אביגיל מייזליק", level: "בינוני", src: "../pic/salat/סלט מלפפונים גזר וצנונית.jpg", timecook: "40",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט עגבניות ופלפלים צלוי", shef: "פרי פח", level: "קל", src: "../pic/salat/סלט עגבניות ופלפלים צלוי.jpg", timecook: "70",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט עגבניות שרי ובצל סגול", shef: "פרי פח", level: "בינוני", src: "../pic/salat/סלט עגבניות שרי ובצל סגול.jpg", timecook: "40",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט פלפלים חריף", shef: " אביגיל מייזליק", level: "בינוני", src: "../pic/salat/סלט פלפלים חריף.jpg", timecook: "20",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט צנוניות", shef: " מירי זורגר", level: "בינוני", src: "../pic/salat/סלט צנוניות.jpg", timecook: "40",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלט קפרזה", shef: "מירי זורגר", level: "קשה", src: "../pic/salat/סלט קפרזה.jpg", timecook: "140",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] }
]

let fish = [
    { name: "סלמון בממרח עגבניות מיובשות", shef: "מירי זורגר", level: "קשה", src: "../pic/fish/סלמון בממרח עגבניות מיובשות.jpg", timecook: "140",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
    { name: "סלמון בסילאן וסויה", shef: "אפרת ליבפרוינד", level: "קל", src: "../pic/fish/סלמון בסילאן וסויה.jpg", timecook: "140",Allproducts:[{product:"אורז",amount:5,size:"כוסות"}] },
]

//מערך משתמשים
const Users = [
    { userName: "ריקי", pass: "1234", clue: 1, email: "riki@gmail.com", likelist: [] },
    { userName: "תהילה", pass: "1111", clue: 1, email: "theila@gmail.com", likelist: [] },
]

//    בתנאי שלא הוכנס עדיין storegהכנסת המערך משתמשים ל
let loc = JSON.parse(localStorage.getItem("users"))
if (loc == undefined)
    localStorage.setItem("users", JSON.stringify(Users))

//הכנסת מערכי האוביקטים לסטורג
localStorage.setItem("salat", JSON.stringify(salat))
localStorage.setItem("meet_chicken", JSON.stringify(meet_chicken))
localStorage.setItem("bread", JSON.stringify(bread))
localStorage.setItem("fish", JSON.stringify(fish))

//הצבת כל האוביקטים בתוך מערך נלקח מהסטורג
let Allarrcategory = [JSON.parse(localStorage.getItem("salat")),JSON.parse(localStorage.getItem("bread")),
JSON.parse(localStorage.getItem("meet_chicken"))
,JSON.parse(localStorage.getItem("fish"))]

console.log(Allarrcategory)

//הכנסת שם הקטגורה הרצויה במקרה שנבחרה קטגוריה אחת.
const save_category = (category) => {
    sessionStorage.setItem("name_category", category)
}


//פונקציות הממשות את החיפוש
let count = 0
// פונקצית חיפוש לפי קלט מהמשתמש מטפלת בהסרה מהדיב וכן ביצירת הדיבים מחדש לפי התנאי הרצוי
let flag
const search_recipy = (nameKategory) => {
    //הסתרת תמונת הרקע שם יוצגו תוצאות החיפוש.
let open=document.getElementById("open")
    open.style.display="none"
    flag = 0
    count = 0
    let SearchCards=document.getElementById("SearchCards")
    deletemySearch(SearchCards)
    let my_search = nameKategory.target.value
    if (my_search != "") {
        for (var index = 0; index < Allarrcategory.length; index++) {
            searchInarr(Allarrcategory[index], my_search)
        }
        //במקרה שלא נמצאו תוצאות לחיפוש
    } 
     if (flag == 0) {
          result.innerText="לא נמצאו תוצאות"
        }
}

//עובר על אובייקט מתוך המערך ושולח אותו ליצירה אם ענה על התנאי המבוקש
const searchInarr = (arr, my_search) => {
    for (var index = 0; index < arr.length; index++) {
        for (var key in arr[index]) {
            if (key!="instraction") {
                 if ((arr[index])[key].includes(my_search)) {
                console.log((arr[index])[key])
                flag = 1
                count++
                    let SearchCards=document.getElementById("SearchCards")
                createmySearch(arr[index], SearchCards)
                break
            }
            }
        }     
    } 
    console.log(count)
    if (count != 0) {
        console.log(count)
        result.innerText = " נמצאו " + count + " תוצאות"
    }
}
//הסרת אלמנטים שנמצאים- פונקציה
const deletemySearch = (elementToAppend) => {
    let removeSearch = elementToAppend.getElementsByTagName("div")
    for (var index = removeSearch.length - 1; index >= 0; index--) {
        elementToAppend.removeChild(removeSearch[index])
    }
}
//פונקציית יצירת הדיבים
//מקבלת אובייקט ובאיזה דיב לאמץ
//פונקציה המשמשת ליצירת מתכונים כמה פעמים בדף זה ולכן מקבלת דיב לאימוץ
const createmySearch = (findMySearch, elementToAppend) => {
    let card=document.createElement("div")
card.classList.add("card")
card.addEventListener("mouseover",(e)=>{
     console.log("rrrrrrrrrrrr")
})
   let a=document.createElement("a")
   a.setAttribute("href","../FullRecipy/index_FullRecipy.html")
    let img=document.createElement("img")
    img.setAttribute("src",findMySearch.src)
    //בלחיצה על תמונת המתכון נשמר האוביקט כדי שיוכל להפתח עם פרטיו המלאים בדף חדש
    a.addEventListener("click",function(){keepobject(findMySearch)})
    a.appendChild(img)
    card.appendChild(a)
    let p=document.createElement("p")
    p.innerText=findMySearch.name
    card.appendChild(p)
 elementToAppend.appendChild(card) 
}


// // //הוספה לרשימת מועדפים
// const likelist=(thislike)=>{
 
//     console.log(thislike)
//     //שם גולש נוכחי
// let name=sessionStorage.getItem("UserName")
// if (name!=undefined) {
//     //מערך נוכחי
// let flag=0
// let AllUsers=JSON.parse(localStorage.getItem("users")) 
// let likes=JSON.parse(sessionStorage.getItem("likelist"))
// for (let index = 0; index < likes.length; index++) {
//     if(likes[index].name==thislike.name)
//     flag=1
// }
// if(flag==0)
// likes.push(thislike)
// else
// alert("מתכון זה נמצא ברשימת המועדפים שלך")
// sessionStorage.setItem("likelist",JSON.stringify(likes))
// for (var index = 0; index <AllUsers.length; index++) {
//    if (AllUsers[index].userName==name) {
//     AllUsers[index].likelist=likes
//     localStorage.setItem("users",JSON.stringify(AllUsers))   
//    }
// }
// }
// else
// alert("עדיין לא התחברת")
// }


//בלחיצה על תמונת המתכון נשמר האוביקט כדי שיוכל להפתח עם פרטיו המלאים בדף חדש
const keepobject=(thisrecipy)=>{
sessionStorage.setItem("this_recipy",JSON.stringify(thisrecipy))

}

//התחברות והתנתקות
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        document.getElementById('id01').style.display = "none";
    }
}
//sessionStorageבהתחברות בדיקה האם המשתמש רשום והנסת שם ל
const OKForm = (e) => {
    e.preventDefault()
    let flagconnect = 0
    let AllUsers = JSON.parse(localStorage.getItem("users"))
    console.log(AllUsers)
    for (var i = 0; i < AllUsers.length; i++) {
        if (AllUsers[i].userName == e.target.uname.value && AllUsers[i].pass == e.target.psw.value) {
            sessionStorage.setItem("UserName", AllUsers[i].userName)
            sessionStorage.setItem("likelist", JSON.stringify(AllUsers[i].likelist))
            flagconnect = 1
        }
    }
    if (flagconnect == 0) {
        alert("מצטערים, אינך רשום במערכת")
        document.getElementById('id01').style.display = "none"
    }
    else
        welcomename()
}

//כתיבת שם המשתמש בheader
const welcomename = () => {
    document.getElementById('id01').style.display = "none"
    helloGp.innerText= sessionStorage.getItem("UserName")
}

//sessionStorageפונקצית התנתקות-מחיקת השם האישי וניקוי ה
const logout = () => {
    sessionStorage.clear()
    helloGp.innerText="אורח"
}

// בחלונית הצדדית פונקצית יצירת המועדפים
//שולחת להסרה ויצירה מחדש
const createlikes = () => {
   let MyLikes = JSON.parse(sessionStorage.getItem("likelist"))
    if (MyLikes!=null) {
          deletemySearch(love)
    console.log(MyLikes)
    MyLikes.forEach(x => {
        createmySearch(x, love)
    });
    }
  else
    alert("עדיין לא התחברת")
}

///הרשמה
var modaljoin = document.getElementById('join');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modaljoin) {
        modaljoin.style.display = "none";
    }
}

//בדיקות תקינות לטופס הרשמה
//בדיקת אותיות
const checkCapitals = e => {
    console.log(e.key)
    console.log(e.keyCode)
    if (!((e.key <= 'ת' && e.key >= 'א') || (e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z'))) {
        e.preventDefault()
        e.keyCode = 0
        alert("ערך לא חוקי")
    }
}
//בדיקת סיסמא
let password = ""
const checkpass = e => {
    psw2.value = ""
    let flagcap = 0
    let flagnum = 0
    if (e.target.value.length != 8) {
        alert("סיסמא חייבת להכיל 8 תווים")
        e.target.value = ""
    }
    else {
        for (var index = 0; index < e.target.value.length; index++) {
            if ((e.target.value[index] <= 'ת' && e.target.value[index] >= 'א') ||
                (e.target.value[index] >= 'a' && e.target.value[index] <= 'z') ||
                (e.target.value[index] >= 'A' && e.target.value[index] <= 'Z'))
                flagcap = 1
            if (e.target.value[index] >= "0" && e.target.value[index] <= "9") {
                flagnum = 1
            }
        }
        console.log(flagcap + "   " + flagnum)
        if (flagcap == 0 || flagnum == 0) {
            alert("סיסמא תקינה מכילה לפחות אות אחת וספרה אחת")
            e.target.value = ""
        }
        else {
            password = e.target.value
        }
    }
}
//סיסמא פעם שניה
const checkpassAgain = e => {
    if (e.target.value != password) {
        alert("שגיאה השדות אינם זהים")
        e.target.value = ""
    }
}

//בהרשמה הכנסת המשתמש למערך המשתמשים בlocalstorage
const OkJoin = (e) => {
    e.preventDefault()
    let newuse = { userName: e.target.uname.value, pass: e.target.psw.value, clue: e.target.clue.value, email: e.target.email.value, likelist: [] }
    console.log(newuse)
    let AllUsers = JSON.parse(localStorage.getItem("users"))
    console.log(AllUsers)
    AllUsers.push(newuse)
    localStorage.setItem("users", JSON.stringify(AllUsers))
    modaljoin.style.display = "none"

}

//פונקציה שמציגה למשתמש את הרמז מתוך המשתמש שלו
const findClue = () => {
    let Name = nameinlog.value;
    let AllUsers = JSON.parse(localStorage.getItem("users"))
    for (let index = 0; index < AllUsers.length; index++) {
        if (AllUsers[index].userName == Name)
            alert("  רמז לסיסמא  " + AllUsers[index].clue)
    }
}


//פונקציות הממשות את החיפוש לפי מוצרים בבית
let productarrhome=JSON.parse(sessionStorage.getItem("homeproductarr"))
if (productarrhome == undefined){
    let arr=[]
    sessionStorage.setItem("homeproductarr", JSON.stringify(arr))
 productarrhome=JSON.parse(sessionStorage.getItem("homeproductarr"))
}

let homeexist
// מה יש לי בבית, דחיפה למערך את כל המוצרים שנכתבו
const HomeProductArr=()=>{
     deletemySearch(createHome)
let x=HomeProduct.value
productarrhome.push(x)
sessionStorage.setItem("homeproductarr", JSON.stringify(productarrhome))
HomeProduct.value=""
}
//שליחת  מערך המוצרים בבית עם אובייקטד
const HomeProductFunc=()=>{
    console.log(productarrhome)
for (var index = 0; index < Allarrcategory.length; index++) {
    for (var index2 = 0; index2 < Allarrcategory[index].length; index2++) {
        // console.log(Allarrcategory[index][index2])
        searchProductAtHome((Allarrcategory[index])[index2])
    }
}
//איפוס המערך בסיום
productarrhome=[]
sessionStorage.setItem("homeproductarr", JSON.stringify(productarrhome))
console.log(JSON.parse(sessionStorage.getItem("homeproductarr")))
}
//שליחת המוצר עם כל אחד מהמערכים
const searchProductAtHome=(productObject)=>{
    homeexist=0
    for (var index = 0; index < productObject.Allproducts.length; index++) {
for (var index2 = 0; index2 < productarrhome.length; index2++) {
   if (productObject.Allproducts[index].product.includes(productarrhome[index2])) {
       homeexist++
   }
}
    }
//במקרה שאותר מתכון , שליחה ליצירה
if (homeexist==productObject.Allproducts.length) {
     console.log(productObject)
      createmySearch(productObject, createHome)
}
}

//פתיחת חלונית צדדית למועדפים
function openNav() {
     let MyLikes = JSON.parse(sessionStorage.getItem("likelist"))
    if (MyLikes!=null) {
    document.getElementById("mySidenav").style.width = "250px";
    }
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  //כתיבת שם משתמש
  const guestname=()=>{ 
      let nam=sessionStorage.getItem("UserName") 
      console.log(nam)
      if(nam!=undefined)
        helloGp.innerText=nam
  }
  
//חלונית תחתונה שנפתחת להצגת המתכונים שנמצאו לאחר חיפוש מתכונים לפי מה שיש בבית  
// Get the modal
var modal = document.getElementById("myHomeModal");

// Get the button that opens the modal
// var btn = document.getElementById("hand");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-Home")[0];

// When the user clicks on the button, open the modal
const btn = ()=> {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  
  
  

