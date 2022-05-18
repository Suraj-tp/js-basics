
fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).then(data=>populateSelectBox(data))

function populateSelectBox(data){
    let selectBox=document.querySelector("#id_select")
    data.forEach(country=>{
        let option=document.createElement("option")
        option.text=country.name
        option.value=country.name
        selectBox.appendChild(option)
    })


}



function fetchCountryDetails(){
   let countryName=id_select.value;
   fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
   then(res=>res.json()).
   then(data=>populateValue(data))
}

function populateValue(data){
    // countryName data=[{"name":"india","capital":"delhi"}]
    // population
    // capital
    // flag
    // currencyName
    // languagename
    console.log(data[0].capital);
    let countryName=data[0].name;
    let capital=data[0].capital;
    let population=data[0].population;
    let curName=data[0].currencies[0].name
    let languageName=data[0].languages[0].name
    let flag=data[0].flag
    console.log(countryName,
        capital,population,curName,languageName,flag);

    let htmlData=`
    
    <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Country Name${countryName}</h5>
     </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">capital ${capital}</li>
    <li class="list-group-item">population ${population}</li>
    <li class="list-group-item">currency ${curName}</li>
    <li class="list-group-item">Language ${languageName}</li>

  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    
    `

      result.innerHTML=htmlData

}


// user aplication
// countries application
// weathermap.org
// weather application

