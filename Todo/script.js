showNotes();

let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {

    let title = document.getElementById('title');
    let user = document.getElementById('user');
    let date = document.getElementById('date');

    let todo = localStorage.getItem('Todo');

    if (todo == null) {
        todoObj = [];
    } else {
        // array of todo
        todoObj = JSON.parse(todo);
    }

    let myObj = {
        task: title.value,
        user: user.value,
        date: date.value
    }
    todoObj.push(myObj);
    localStorage.setItem('Todo', JSON.stringify(todoObj));
    // console.log(todoObj);
    showNotes();
})

function showNotes(id) {
    let todo = localStorage.getItem('Todo');
    if (todo == null) {
        todoObj = [];
    } else {
        // array of todo
        todoObj = JSON.parse(todo);
    }

    let html = '';
    todoObj.forEach(function (element, index, user, date) {
        html += `
    <p class="list-group-item" id="item">Task "${element.task}" needs to be completed by "${element.user}" before date "${element.date}".
    <i style="position:relative; float:right;color:gray; top:-10px;" class="fa fa-times fa-2x"  onclick="deleteTodo(${index})"></i></p>
    `;
        // <button id="clear">clear</button>
        ;
    });
    let todoElm = document.getElementById('todoList');
    if (todoObj.length != 0) {
        todoElm.innerHTML = html;
    } else {
        todoElm.innerHTML = `Nothing in the list yet`;
    }

    // input.value ="";
}


// delete function

function deleteTodo(index) {
    let confirmDel = confirm("You are delting this task !");
    // console.log('im deleting', index)
    if (confirmDel == true) {
        let todo = localStorage.getItem('Todo');
        if (todo == null) {
            todoObj = [];
        } else {
            todoObj = JSON.parse(todo);
        }
        todoObj.splice(index, 1);
        // console.log('i spliced', index)
        localStorage.setItem('Todo', JSON.stringify(todoObj));
        // console.log('i did set without ', index)
        showNotes();
    }
}


// search bar function
document.querySelector('#search').addEventListener('keyup', filterNames);

function filterNames(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.list-group-item').forEach(
        function (name) {
            let item = name.firstChild.textContent;

            if (item.toLowerCase().indexOf(text) != -1) {
                name.style.display = 'block';
            } else {
                name.style.display = 'none';

            }
        }
    );
}

// sort by user
// document.getElementById('byuser').addEventListener('click', sortByUser);
function sortByUser() {

    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("todoList");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("p");

        // Loop through all list items:
        for (i = 0; i < (b.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Check if the next item should
            switch place with the current item: */
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                /* If next item is alphabetically lower than current item,
                mark as a switch and break the loop: */
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

function sortByDate() {
    var x = localStorage.getItem("Todo");
    x.sort(datesort);
    function datesort(a,b){
        // if(a.date <b.date) return -1;
        // if(a.date > b.date) return 1;
        // return 0;
    }
}
// sort by date
// document.getElementById('bydate').addEventListener('click', sortByDate);
// let dd= localStorage.getItem("date");
// console.log(dd);

// function sortByDate() {

//         }
// var el = document.getElementById("item");
// function sortByDate() {
//     var arr =document.getElementsByTagName("p").date;
//     var sorted = arr.sort(sortFunction);
//     el.innerHTML = JSON.stringify(arr);
// }

// function sortFunction(a, b) {
//     var dateA = new Date(a.date);
//     var dateB = new Date(b.date);
//     return dateA > dateB ? 1 : -1;
// };


// let searchbox = document.getElementById('search');
// searchbox.addEventListener('input', function(){

//     let inputVal = searchbox.value.toLowerCase();
//     // console.log("Input event fired",inputVal);
//     let list = document.getElementsByClassName('list-group');

//     Array.from(list).forEach(function(element){

//         let listTxt = element.getElementsByClassName('list-group-item1')[0].innerText;
//         console.log(listTxt);
//         if(listTxt.includes(inputVal)){
//             element.style.display = "block";
//         }else{
//             element.style.display = "none"
//         }
//     })

// })

// var input = document.getElementById('search');
// input.onkeyup = function () {
//     var filter = input.value.toUpperCase();
//     var lis = document.getElementsByTagName('ul');
//     // console.log(lis)
//     for (var i = 0; i < lis.length; i++) {
//             var text = lis[i].getElementsByTagName('p')[0].innerHTML;

//         // if (text.toUpperCase().indexOf(filter) == 0) 
//         //     lis[i].style.display = 'block';
//         // else
//         //     lis[i].style.display = 'none';
//     }
//     console.log(text)
// }