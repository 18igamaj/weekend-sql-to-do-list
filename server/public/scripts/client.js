console.log('js');

$(document).ready(function (){
    console.log('Yay client works!')
    $('#add-btn').on('click', postTD)
    $('#istToDo').on('click','.comp-btn', putTD)
    getTD()
});

function postTD(){
    console.log('post works')
    let toDo =  $('#list-in').val();
    
    console.log(toDo)

    $.ajax({
        method: 'POST',
        url: '/doList',
        data: {
            toDo
        }
    }).then(function(response){
        console.log(response)
        getTD();
    }).catch(function(error){
        console.log(error)
    });

}

function getTD(){
    console.log('in getTD');

    $.ajax({
        method: 'GET',
        url: '/doList'
    }).then(function (response){
        console.log('success')
        renderDom(response)
    }).catch(function (error){
        alert('Oh No, our get TODOs')
        console.log('get request failed', error)
    })
}

function renderDom(array){
    $('#listToDo').empty()


    for(let item of array){
        $('#listToDo').append(`

        <tr id="${item.id}"data-id=${item.id}>
            <td>${item.todo}</td>
            <td><button class= "comp-btn">Complete</button></td> 
            <td><button class= "del-btn">Delete</button></td>
        </tr>
        
        `)
    }
}


