//  async function greet(){
//    throw abc.ab();
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was fulfilled!");
//     console.log(`result was : ${result}`);
// })
// .catch((err)=>{
//     console.log("promise was rejected!");
//     console.log(`error was : ${err}`);
// });

// let demo = async ()=>{
//     return 5;
// }

// function getNum (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// };

// async function  demo(){
//    await  getNum();
//    await  getNum();
//    await  getNum();
// }

// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise ((resolve ,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             if(num>4){
//                 reject("promise was rejected!");
//             }
//             h1.style.color=color;
//             console.log(`Color was changed:${color}`);
//             resolve("promise was changed!");
//         },delay);
//     });
// }

// async function demo(){
//     try{
//   await changeColor("red",1000);
//   await changeColor("blue",1000);
//   await changeColor("green",1000);
//   await changeColor("yellow",1000);
//     }
//     catch(err){
//         console.log("error caught!");
//         console.log(err);
//     } 
//   let a =3;
//   console.log(a);
//   console.log("a+b:",a+3);
// }

// let jsRes ={
// "fact": "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses.",
//     "length": 149
// };

// let validRes = JSON.parse(jsRes);
// console.log(validRes);

// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     // console.log(response);
//     return response.json();
// })
// .then((data)=>{
//         console.log(data.fact);
//         return fetch(url);
//     })
// .then((response)=>{
//     return  response.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log("error:",err);
// });

// async function getFacts (){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact); 
// }; 

let btn1=document.querySelector("button");
let p=document.querySelector("p");
btn1.addEventListener("click",(async()=>{
    let fact= await getFacts();
    // console.log(fact);
    p.innerText=fact;
}));
let url="https://catfact.ninja/fact";
async function getFacts(){
try{
    
    let res= await axios.get(url);
    return res.data.fact;

}
catch(e){
    return "No fact data found !";
}
};

let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",async ()=>{
    let link= await getImage();
    // console.log(link);
    let img=document.querySelector("#result2");
    img.setAttribute("src",link);
});

async function getImage (){
    try{
    let link= await axios.get(url2);
    return link.data.message;
}
catch {
    return "/";
}
};

const url3="https://icanhazdadjoke.com/";


async function getJokes(){
    try{
        const config={ Headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res.data);

    }
    catch(err){
        console.log(err);
    }
}