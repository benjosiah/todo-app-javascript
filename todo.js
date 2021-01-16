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




check_all.addEventListener('click', e=>{
    let a=0;
    if (checked_all==false) {
        while (a<todos.length) {
            if (list[a].children[0].id = todos[a].id) {
                todos[a].done=true   
                list[a].children[0].checked=todos[a].done     
            }
            a++
            checked_all=true
        }
    }else if(checked_all==true){
        while (a<todos.length) {
            if (list[a].children[0].id = todos[a].id) {
                todos[a].done=false   
                list[a].children[0].checked=todos[a].done     
            }
            a++
            checked_all=false
        }
       
    }
   
})

todos.forEach(element=> {
    showTodos(element)
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    var now= {
        "name":todo.value,
        "id":todos.length+1,
        "done":false
    }
    todos.push(now);
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
    var clear = document.createElement("div");
    check.type= "checkbox";
    check.id= data.id;
    clear.className="clear"
    clear.innerText="x";
    clear.id= data.id;
    check.className= "done";
    check.checked=data.done;
    var ls = document.createTextNode(data.name);
    div.appendChild(check)
    div.appendChild(ls);
    div.appendChild(clear);
    show[0].appendChild(div);

  
}

for(let a = 0; a < list.length; a++) {
    show[0].children[a].children[0].addEventListener("input", e=>{
        console.log(show[0].children[a].children[0].checked);
        todos.forEach(todo => {
            if (show[0].children[a].children[0].id==todo.id) {
                todo.done=show[0].children[a].children[0].checked;
            }
        });
    })
    
}


// todos.forEach(tod => {
//     if (show[0].children[a].children[0].id==tod.id) {
//         todos.splice(todos.indexOf(tod), 1)
//         console.log(todos.indexOf(tod));
//         show[0].children[a].remove()
//     }
// });

for(let a = 0; a < list.length; a++) {
    list[a].children[1].addEventListener("click", e=>{
        console.log();
        todos.forEach(tod => {
            console.log(todos.indexOf(tod));
            if (a==todos.indexOf(tod)) {
                console.log(tod);
                // todos.splice(todos.indexOf(tod), 1)
                console.log(todos.indexOf(tod));
                show[0].children[a].remove()
            }
        });
    });
    
}






