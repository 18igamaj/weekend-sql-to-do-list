console.log('js');

$(document).ready(function (){
    console.log('Yay client works!')
    $('#add-btn').on('click', postTD)
    $('#listToDo').on('click','.comp-btn', putTD)
    $('#listToDo').on('click','.del-btn', delTD)
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
        $('#list-in').val('');
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
            <td ><button class= "comp-btn" >Complete</button></td> 
            <td><button class= "del-btn">Delete</button></td>
        </tr>
        
        `);
        if(item.status === true){
            $(`#${item.id}`).css("background-color", "green")
        }
       
    }
}

function putTD() {
console.log('our put TD is clicked')
let idUp = $(this).closest('tr').data('id')
console.log(idUp);
$.ajax({
    method: 'PUT',
    url: `/doList/${idUp}`
}).then(function (response){
    console.log(response)
    getTD()
}).catch(function (error){
    console.log(error)
})
}

function delTD(){
    const idDel = $(this).closest('tr').data('id')
    swal({
        title: "Did you actually finish?",
        text: "Once deleted, you will never be able to do this task again!",
        icon: "LETS GO",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("YAY! Way to finish your task!", {
            icon: "success",
          });
           $.ajax({
        type: 'DELETE',
        url: `/doList/${idDel}`
    }).then(function (response){
        getTD()
    }).catch(function (error){
        console.log('Error with Del', error)
    })
        } else {
          swal("GO and FINISH IT!");
        }
      });
   
}