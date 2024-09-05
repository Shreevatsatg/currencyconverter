const base_url ="abcd";
const dropdowns= document.querySelectorAll(".dropdown select");


for (let select of dropdowns){
for (currencycode in countryList){
    let newoption = document.createElement("option");
    newoption.innerText = currencycode;
    newoption.value=currencycode;
    if(select.name ==="from"&&currencycode==="usd"){
        newoption.selected="selected";
    }
    select.append(newoption);
}}