fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).
then(users=>populateValues(users))



function populateValues(users){
    let htmlData=``
    users.forEach(user=>{
        htmlData+=`
        <tr>
    <td>${user.name}</td>

    <td>${user.email}</td>
    
    <td>${user.company.name}</td>
    oncli
    <td>
    <button type="button" class="btn btn-outline-primary" value=${user.id} ck="fetchUser(event)"  >Detail</button>

    </td>
    
</tr>
        
        `
        result.innerHTML=htmlData
    })
}


function fetchUser(event){
   let userId=event.target.value;
   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.json()).
   then(data=>populateUser(data))
}



function populateUser(user){
    let image="/home/luminar/Desktop/MEANSTACKWORKS/ms_js_march_2k22/workingwithapis/workingwithuser/pro.png"
    let htmlData=`
    
    <div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.email}</li>
    <li class="list-group-item">${user.username}</li>
    <li class="list-group-item">${user.address.street}</li>
    <li class="list-group-item">${user.address.city}</li>
    <li class="list-group-item">${user.address.street}</li>
    <li class="list-group-item">${user.company.name}</li>



  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `
    document.querySelector(".my-div").style.display='none'
    id_myuser.innerHTML=htmlData
}


// first recur

// git and github
// github account


// local storage


