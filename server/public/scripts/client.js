console.log('js');

$(document).ready(function (){
    console.log('Yay client works!')
$('#add-btn').on('click', postTD)

})

function postTD(){
    console.log('post works')
    let tInputs ={
        toDo: $('#list-in').val()
    }
    console.log(tInputs)

    
}



