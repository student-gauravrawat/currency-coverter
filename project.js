const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");//Fourth step part
  const fromCurr = document.querySelector(".from select");//step five
  const toCurr = document.querySelector(".to select")//step five


  // First step Add option
  for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
       if(select.name === "from" && currCode ==="USD"){
        newOption.selected = "selected";
       }
       else if(select.name === "to" && currCode ==="INR"){
        newOption.selected = "selected";
       }


        select.append(newOption);
    }
   // third step after event update... function will call
   select.addEventListener("change", (evt)=>{
          updateFlag(evt.target);
   })

  }
 // second step update flag
  const updateFlag = (element) =>{
      let currCode = element.value;
    let  countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
      
  } 
// Part of fourth step
  btn.addEventListener("click", async (evt)=>{
     evt.preventDefault();
     let ammount = document.querySelector(".amount input");
     let amtVal = ammount.value;
     if(amtVal === "" || amtVal < 1){
      amtVal = 1;
      ammount.value = "1";
     }
     //step Five
    // console.log(fromCurr.value, toCurr.value);
     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
     let response = await fetch (URL);//API is NOt Working
     let data = await response.json();
     console.log(data)


  });




  