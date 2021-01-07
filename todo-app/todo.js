var todos= [
    {
        "name": "eat",
        "Due date":"12/02/2021",
        'done':false,
    },
    {
        "name": "sleep",
        "Due date":"12/02/2021",
        'done':true,
    },
    {
        "name": "read",
        "Due date":"12/02/2021",
        'done':false,
    },
    {
        "name": "play",
        "Due date":"12/02/2021",
        'done':false,
    },
    {
        "name": "pray",
        "Due date":"12/02/2021",
        'done':false,
    }

    
]

var show = document.getElementsByClassName('show');
var todo = document.getElementById('todo');
var form = document.getElementById('form');
// var checkbox = document.getElementById('check');

// show[0].children.forEach(list=>{
//     console.log(list[0].children[0]);
// })

todos.forEach(element=> {
    showTodos(element)
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    var now= {
        "name":todo.value
    }
    todos.push(now.name);
    showTodos(now);
    todo.value=""
    
});

todo.addEventListener("blur", event=>{
    todo.value="";
})

//functions 

function showTodos(data){
    var div = document.createElement("div");
    div.className = "list";
    var check = document.createElement("input");
    check.type= "checkbox";
    check.id= "check";
    check.addEventListener('input', e=>{
        data.done=check.checked
    })
    check.className= "done";
    check.checked=data.done
    var ls = document.createTextNode(data.name)
    div.appendChild(check)
    div.appendChild(ls);
    show[0].appendChild(div);

  
}



