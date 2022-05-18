

    import { Modal } from 'bootstrap'

    var loginButton=document.querySelector("#myBtn")
    loginButton.addEventListener("click",openModal)
    function openModal(){
        var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    })
    
        myModal.show()
    }