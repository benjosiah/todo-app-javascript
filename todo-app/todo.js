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
        "name": "eat",
        "Due date":"12/02/2021",
        'done':false,
    },
    {
        "name": "eat",
        "Due date":"12/02/2021",
        'done':false,
    },
    {
        "name": "eat",
        "Due date":"12/02/2021",
        'done':false,
    }

    
]

var show = document.getElementsByClassName('show');
var todo = document.getElementById('todo');
var form = document.getElementById('form');
todos.forEach(element=> {
    var div = document.createElement("div");
    div.className = "list";
    var check = document.createElement("input");
    check.type= "checkbox";
    check.className= "done";
    check.checked=element.done
    var ls = document.createTextNode(element.name)
    div.appendChild(check)
    div.appendChild(ls);
    show[0].appendChild(div);
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    var now= {
        "name":todo.value
    }
    todos.push(now.name);

    var div = document.createElement("div");
    var check = document.createElement("input");
    check.type= "checkbox"
    check.className= "done"
    check.value=now.done
    div.className = "list";
    var ls = document.createTextNode(now.name)
    div.appendChild(check);
    div.appendChild(ls);
    show[0].appendChild(div);
    todo.value=""
    
});

todo.addEventListener("blur", event=>{
    todo.value="";
})


