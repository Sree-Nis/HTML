document.getElementById("submit1").onclick = function(){
    let x = document.forms["contact"]["fname"].value;
    if (x==""){
        alert("name must be filled");
        return false;
    }
}

document.getElementById("submit1").onclick = function(){
    let x = document.forms["contact"]["email"].value;
    if (x==""){
        alert("email must be filled");
        return false;
    }
}

document.getElementById("submit2").onclick = function(){
    let x = document.forms["book_sub"]["title"].value;
    if (x==""){
        alert("book title must be filled");
        return false;
    }
}

document.getElementById("submit2").onclick = function(){
    let x = document.forms["book_sub"]["author"].value;
    if (x==""){
        alert("book author must be filled");
        return false;
    }
}

document.getElementById("submit2").onclick = function(){
    let x = document.forms["book_sub"]["number"].value;
    if (x==""){
        alert("book price must be filled");
        return false;
    }
}
