


//   let Allarrcategory = [JSON.parse(localStorage.getItem("bread")),
// JSON.parse(localStorage.getItem("meet_chicken")),
// JSON.parse(localStorage.getItem("salat")),JSON.parse(localStorage.getItem("fish"))]

// //יצירת הגלריה
// let choosen_category=[]
// const cardOn=()=>{
//  let catogry_name=sessionStorage.getItem("name_category")
//  if(catogry_name=='all')
//  {
//      for (let index = 0; index < Allarrcategory.length; index++) {
//          creategalery(Allarrcategory[index])
//      }
//  }
//   else{ 
//  choosen_category=JSON.parse(localStorage.getItem(catogry_name)) 
//  console.log(choosen_category)
//  creategalery(choosen_category)
// } 
// }
// const creategalery=(createarr)=>{
// for (var index = 0; index<createarr.length; index++) {
//  let card=document.createElement("div")
// //  card.addEventListener("click",d)
// card.classList.add("card")
// card.addEventListener("mouseover",(e)=>{
//      console.log("rrrrrrrrrrrr")
// })
//    let a=document.createElement("a")
//    a.setAttribute("href","../FullRecipy/index_FullRecipy.html")
//     let img=document.createElement("img")
//     img.setAttribute("src",createarr[index].src)
//     // let times=`${choosen_category[index].timecook}`
//     // img.addEventListener("click",function(){details(times)})
//     let allobject=createarr[index]
//     // let allobject=`${choosen_category[index]}`
//     console.log(allobject)
//     console.log(createarr[index])
//     a.addEventListener("click",function(){keepobject(allobject)})
//     a.appendChild(img)
//     card.appendChild(a)
//     let pAndLike=document.createElement("div")
//     pAndLike.classList.add("pAndLike")
//     let p=document.createElement("p")
//     p.innerText=createarr[index].name
//     pAndLike.appendChild(p)
//     let like=document.createElement("div")
//     like.classList.add("bi-heart")
//      let ind=index
//     like.setAttribute("id",ind)
//     console.log(like.id)
//     let thisobject=createarr[index]
//     like.addEventListener("click",function(){likelist(thisobject,ind)})
//     pAndLike.appendChild(like)
//     card.appendChild(pAndLike)
//  AllCards.appendChild(card) 
// }
// }

// // //הוספה לרשימת מועדפים
// const likelist=(thislike,id)=>{
//     console.log(id)
// let x=document.getElementById(id)
// x.classList.replace("bi-heart","bi-heart-fill")
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

// // }
// //פילטור ע"פ שפיות
// const filter_shef=(e)=>{
//     let isexist
//     let places=[];
//     let blockdivs=[];
//    let checkedInputs = [];
//    let checkedInputs2 = [];
//   let allChecked=document.getElementsByClassName("filtershef")
//   let allChecked2=document.getElementsByClassName("filterlevel")

// for (var index = 0; index < allChecked.length; index++) {
//     if(allChecked[index].checked == true){
//             checkedInputs.push(allChecked[index].id);
//             console.log(checkedInputs)
//         }
// }
// for (var index = 0; index < allChecked2.length; index++) {
//     if(allChecked2[index].checked == true){
//             checkedInputs2.push(allChecked2[index].id);
//             console.log(checkedInputs2)
//         }
// }

//     // })
//     let newallcards=AllCards.getElementsByTagName("div")
//     if(checkedInputs.length==0)
//     {
//         for (let index = 0; index < newallcards.length; index++) {
//             newallcards[index].style.display="block"
//             blockdivs.push(choosen_category[index])
//             places.push(index)

//         }
//     }
//     else{
//    for (var index = 0; index < choosen_category.length; index++) {
//      isexist=checkedInputs.find(c => c == (choosen_category[index].shef))
//     if(isexist==undefined)
//     newallcards[index].style.display="none"
//     else
//     {newallcards[index].style.display="block"
//     blockdivs.push(choosen_category[index])
//     places.push(index)
// }
//    }
// }
// if(checkedInputs2.length!=0)
// {
//   console.log(blockdivs)
//    for (var index = 0; index < blockdivs.length; index++) {
//     isexist=checkedInputs2.find(c => c == (blockdivs[index].level))
//     if(isexist==undefined)
//     newallcards[places[index]].style.display="none"
//     else
//     {newallcards[places[index]].style.display="block"
// }  
//    }
// }
// }

// // const  check_my_search=()=>{
// //     let mysearch=sessionStorage.get
// //     for (var index = 0; index < array.length; index++) {
// //         var element = array[index];
        
// //     }
// // }

// const keepobject=(thisrecipy)=>{
// sessionStorage.setItem("this_recipy",JSON.stringify(thisrecipy))

// }
















let Allarrcategory = [JSON.parse(localStorage.getItem("salat")),
JSON.parse(localStorage.getItem("meet_chicken")),
JSON.parse(localStorage.getItem("bread")),JSON.parse(localStorage.getItem("fish"))]

// יצירת הגלריה//
let choosen_category=[]
let catogry_name
const cardOn=()=>{
 catogry_name=sessionStorage.getItem("name_category")
if(catogry_name=='all')
 {
 for (let index = 0; index < Allarrcategory.length; index++) {
 creategalery(Allarrcategory[index],index)
 }
 }
 else{ 
choosen_category=JSON.parse(localStorage.getItem(catogry_name)) 
console.log(choosen_category)
creategalery(choosen_category,-1)
} 
}
const creategalery=(createarr,y)=>{
    console.log(createarr)
for (var index = 0; index<createarr.length; index++) {
let card=document.createElement("div")
// card.addEventListener("click",d)
card.classList.add("card")
card.classList.add(y)
card.addEventListener("mouseover",(e)=>{
 console.log("rrrrrrrrrrrr")
})
 let a=document.createElement("a")
 a.setAttribute("href","../FullRecipy/index_FullRecipy.html")
 let img=document.createElement("img")
 img.setAttribute("src",createarr[index].src)
 // let times=`${choosen_category[index].timecook}`
// img.addEventListener("click",function(){details(times)})
let allobject=createarr[index]
 // let allobject=`${choosen_category[index]}`
console.log(allobject)
 console.log(createarr[index])
 a.addEventListener("click",function(){keepobject(allobject)})
 a.appendChild(img)
 card.appendChild(a)
 let pAndLike=document.createElement("div")
 pAndLike.classList.add("pAndLike")
 let p=document.createElement("p")
 p.innerText=createarr[index].name 
 pAndLike.appendChild(p)
 let like=document.createElement("div")
 like.classList.add("bi-heart")
 let ind=createarr[index].name
 console.log(ind)
 like.setAttribute("id",ind)
 console.log(like.id)
 let thisobject=createarr[index]
 like.addEventListener("click",function(){likelist(thisobject,ind)})
 pAndLike.appendChild(like)
 card.appendChild(pAndLike)
AllCards.appendChild(card) 
}
filter_shef()
}
// הוספה לרשימת מועדפים// //
const likelist=(thislike,id)=>{
 console.log(id)
let x=document.getElementById(id)
x.classList.replace("bi-heart","bi-heart-fill")
 console.log(thislike)
// שם גולש נוכחי// 
let name=sessionStorage.getItem("UserName")
if (name!=undefined) {
// מערך נוכחי// 
let flag=0
let AllUsers=JSON.parse(localStorage.getItem("users")) 
let likes=JSON.parse(sessionStorage.getItem("likelist"))
for (let index = 0; index < likes.length; index++) {
 if(likes[index].name==thislike.name)
 flag=1
}
if(flag==0)
likes.push(thislike)
else
alert("מתכון זה נמצא ברשימת המועדפים שלך")
sessionStorage.setItem("likelist",JSON.stringify(likes))
for (var index = 0; index <AllUsers.length; index++) {
 if (AllUsers[index].userName==name) {
 AllUsers[index].likelist=likes
 localStorage.setItem("users",JSON.stringify(AllUsers)) 
 }
}
}
else
alert("עדיין לא התחברת")
} 


let checkedInputshef = [];
 let checkedInputslevel = [];
// }
// פילטור ע"פ שפיות//
const filter_shef=()=>{
 let isexist
let isexist2
let places=[];
let blockdivs=[];
checkedInputshef = [];
checkedInputslevel = [];
 let allCheckedshef=document.getElementsByClassName("filtershef")
 let allCheckedlevel=document.getElementsByClassName("filterlevel")
for (var index = 0; index < allCheckedshef.length; index++) {
 if(allCheckedshef[index].checked == true){
 checkedInputshef.push(allCheckedshef[index].id);
 console.log(checkedInputshef)
 }
}
for (var index = 0; index < allCheckedlevel.length; index++) {
 if(allCheckedlevel[index].checked == true){
 checkedInputslevel.push(allCheckedlevel[index].id);
 console.log(checkedInputslevel)
 }
}
let GalleryCards=[]
// let GalleryCards=AllCards.getElementsByClassName("card")
for (let index = -1; index < Allarrcategory.length; index++) {
 GalleryCards=document.getElementsByClassName(index)
 console.log(GalleryCards) 
 if(index==-1)
 filtur(GalleryCards,choosen_category)
 else
filtur(GalleryCards,Allarrcategory[index])
}
}
const filtur=(arrdivs,arrcategory)=>{
 
 for (let index = 0; index < arrdivs.length; index++) { 
 if(checkedInputshef.length==0)
 isexist=0
else
isexist=checkedInputshef.find(c => c == 
(arrcategory[index].shef))
 if(checkedInputslevel.length==0)
 isexist2=0 
 else
isexist2=checkedInputslevel.find(c => c == 
(arrcategory[index].level))
 if(isexist!=undefined&&isexist2!=undefined)
 arrdivs[index].style.display="block"
 else
arrdivs[index].style.display="none"
 }
 
}

const keepobject=(thisrecipy)=>{
sessionStorage.setItem("this_recipy",JSON.stringify(thisrecipy))
}
