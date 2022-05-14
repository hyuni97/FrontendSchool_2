const txtBtn = document.querySelector(".question");
const txtCheer = document.querySelector(".cheer-txt");
const txtGo = document.querySelector(".go");
const txtModal = document.querySelector(".modal-screen");
const txtClean = document.querySelector(".clean");
const txtSecto = document.querySelector("#sectors");
const txtJob = document.querySelector(".job");
const txtTime = document.querySelector("#time");
const txtMin = document.querySelector(".minute")


// 훈련시간 아는 곳
    txtBtn.addEventListener('click',function(event){
        console.log(txtSecto.value);
        if(txtSecto.value === "" || txtTime.value === ""){
            window.alert("값을 입력해주세요");
            console.log("값을 입력해주세요");
        }else if(txtTime.value >= 25 || txtTime.value <= 0){
            window.alert("하루는 24시간이다");
            console.log("하루는 24시간이다");
        }else{
            let result = 10000/txtTime.value;
            txtJob.textContent = txtSecto.value;
            txtMin.textContent = result;
            txtCheer.classList.toggle("on");
        }
    })

// 모달창
    txtGo.addEventListener('click',function(event) {
            txtModal.classList.add("on");
        })
    txtClean.addEventListener('click',function(event){
        txtModal.classList.remove("on");
    })