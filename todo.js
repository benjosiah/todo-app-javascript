var todos= [
    {
        "name": "eat",
        "Due date":"12/02/2021",
        'done':false,
        'id':1
    },
    {
        "name": "sleep",
        "Due date":"12/02/2021",
        'done':true,
        'id':2
    },
    {
        "name": "read",
        "Due date":"12/02/2021",
        'done':false,
        'id':3
    },
    {
        "name": "play",
        "Due date":"12/02/2021",
        'done':false,
        'id':4
    },
    {
        "name": "pray",
        "Due date":"12/02/2021",
        'done':false,
        'id':5
    }

    
]

var show = document.getElementsByClassName('show');
var todo = document.getElementById('todo');
var form = document.getElementById('form');
var checkbox = document.getElementsByClassName('list');
var list = show[0].children;
var check_all= document.getElementById('check-all');
var checked_all = false;




// check_all.addEventListener('click', e=>{
//     let a=0;
//     if (checked_all==false) {
//         while (a<todos.length) {
//             if (list[a].children[0].id = todos[a].id) {
//                 todos[a].done=true   
//                 list[a].children[0].checked=todos[a].done     
//             }
//             a++
//             checked_all=true
//         }
//     }else if(checked_all==true){
//         while (a<todos.length) {
//             if (list[a].children[0].id = todos[a].id) {
//                 todos[a].done=false   
//                 list[a].children[0].checked=todos[a].done     
//             }
//             a++
//             checked_all=false
//         }
       
//     }
   
// })

// todos.forEach(element=> {
//     showTodos(element)
// });
for (const i in todos) {
    showTodos(todos[i], i)
  
}



form.addEventListener("submit", function(e){
    e.preventDefault();
    var now= {
        "name":todo.value,
        "id":todos.length+1,
        "done":false
    }
    todos.push(now);
    showTodos(now,todos.length-1);
    todo.value=""
    console.log(todos)
    
});

todo.addEventListener("blur", event=>{
    todo.value="";
})

//functions 
function done(id){

    if (todos[id].done==true) {
        todos[id].done=false
    }
    else{
        todos[id].done=true
    }
    console.log(todos[id])
    
}

function remove(id){
    
    console.log(todos[id])
    todos.splice(id, 1)
    console.log(todos)
    show[0].children[id].remove()
    for (const key in todos) {
        show[0].children[key].children[1].remove();
        show[0].children[key].innerHTML += "<div onclick='remove("+key+")' class='clear' >x</div>";
        console.log(key)
        console.log(show[0].children[key].children[1])
}
}



function showTodos(data, i){
    if (data.done==true) {
        var check = "<input type='checkbox' onclick='done("+i+")' checked class='done' >"
    }else{
        var check = "<input type='checkbox' onclick='done("+i+")' class='done' >"
    }
   
  
    var clear = "<div onclick='remove("+i+")' class='clear' >x</div>"
    var list= "<div class='list' >"+check+data.name+clear+"</div>"
    show[0].innerHTML+=list
  
}








