// const drinkBtn = document.querySelectorAll(".list-item li");
const display = document.querySelector(".display");
const putMoney = document.querySelector("#input-money");    //입금액 입력
const inputBtn = document.querySelector(".button-input");   //입금 버튼
const myMoney = document.querySelector('.result-money');    //소지금 금액
const infoMoney = document.querySelector('.info-money');    // 잔액
// const myMoney = document.querySelectorAll(".My-money::after");
// let money = document.documentElemnet.style
// const myMoney = getComputedStyle('.My-money','::after').content;
// document.styleSheets[0].addRule('.My-money:after','content: "'+str+'";');

//음료 데이터
//[] 배열로 만들기 위해서 
let item = [{img:'./img/콜라_original.svg', text:'Original_Cola', cost:'1000원'},
{img:'./img/콜라_품절.svg', text:'Viloet_Cola', cost:'1000원'},
{img:'./img/콜라_yellow.svg', text:'Yellow_Cola', cost:'1000원'},
{img:'./img/콜라_blue.svg', text:'Blue_Cola', cost:'1000원'},
{img:'./img/콜라_green.svg', text:'Green_Cola', cost:'1000원'},
{img:'./img/콜라_orange.svg', text:'Orange_Cola', cost:'1000원'}];

item.forEach(i=>{ //item 배열을 돌면서 각 아이템들에 대한 정보를 얻어온다
        let newLi = document.createElement("li");  //생성 아이템의 정보를 그린li 생성
        newLi.innerHTML = `<button class="btn-item" type="button">
        <img class="img-item" src="${i.img}" alt="빨강 콜라">
        <strong class="title">${i.text}</strong>
        <span class="money">${i.cost}</span>
    </button>`
    document.querySelector(".list-item").appendChild(newLi);   // ul에 li 넣기
})

//음료 선택하는 곳
// document.querySelector(".list-item").addEventListener('click',function(event){
//     display.appendChild(event.target.closest("li").cloneNode(true));
// })
// let clickNumber = 0;
// document.querySelector(".list-item").addEventListener('click',
//     function(event){
//         let arr = document.querySelectorAll('.display');
//         clickNumber++;
//         if(event.target.closest("li")){
//                 const selectedColaLi = event.target.closest("li")
//                 const cartColaImgSrc = selectedColaLi.querySelector(".img-item").src;
//                 const cartColaTitle = selectedColaLi.querySelector(".title").innerText;
//                 display.innerHTML+=`
//                                 <section class="pic-drink later">
//                                     <img class="img-item" src="${cartColaImgSrc}" alt="">
//                                     <strong class="title">${cartColaTitle}</strong>
//                                     <span class="number">${clickNumber}</span>
//                                 </section>`
//         }
// })

let clickNumber = 0;
document.querySelector(".list-item").addEventListener('click',
    function(event){
        if(event.target.closest("li")){
            let arr = [];
            let check = false;
            
            // console.log(event.target.childNodes[3].innerText);
            const selectedColaLi = event.target.closest("li")
            const cartColaImgSrc = selectedColaLi.querySelector(".img-item").src;
            const cartColaTitle = selectedColaLi.querySelector(".title").innerText;
            const ulTitle = event.target.childNodes[3].innerText;
            arr.forEach((item) => {
                    if (event.target === cartColaTitle) {
                        // clickNumber++;
                        check = true;
                    }
                })
                if(check === false){
                    
                //선택되서 나오는 곳
                arr.push(display.innerHTML+=`
                <section class="pic-drink later">
                    <img class="img-item" src="${cartColaImgSrc}" alt="">
                    <strong class="title">${cartColaTitle}</strong>
                    <span class="number">${clickNumber}</span>
                </section>`)
                console.log(arr);
               
                }
            }
        
})

// 예지님 appendChild : 뒤에 자식으로 추가가 된다. -> prepend 로 작성 하셨다. : 앞에 추가가 된다.
// HTML에 음료가 있을 때 선택 가능
// drinkBtn.forEach(li => {
//     li.addEventListener('click',function(event){
//         display.appendChild(li.cloneNode(true));
//     })
// })

//계산값
inputBtn.addEventListener('click', function(event){
    if(putMoney.value === ""){
        alert("값을 입력해주세요");
    }else if(+putMoney.value > +myMoney.innerHTML || putMoney.value <= 0){
        alert("소지금에 알맞은 돈을 넣자?");
        // myMoney.textContent= putMoney.value;
        // console.dir(myMoney.content);
        // myMoney.setAttribute('data-after',putMoney.value);
        // money.setProperty('--My-money',putMoney.value)
        // myMoney.setProperty(DOMString,'content',putMoney.innerHTML);
        // console.log(myMoney);
    }else{
        let result = +myMoney.innerHTML - +putMoney.value;
        myMoney.innerHTML = result;
        let total = +infoMoney.innerHTML + +putMoney.value;
        infoMoney.innerHTML = total;
        // console.log(typeof(myMoney.innerHTML));
        // console.dir(putMoney.value);
        // console.log(typeof(result));
        // console.dir(infoMoney.innerHTML);
    }
})