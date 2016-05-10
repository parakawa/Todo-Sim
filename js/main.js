function get_lista() {
    var lista = new Array;
    var lista_str = localStorage.getItem('todo');
    if (lista_str !== null) {
        lista = JSON.parse(lista_str); 
    }
    return lista;
}

function add() {
    var tarea = document.getElementById('tarea').value;

    var lista = get_lista();
    lista.push(tarea);
    localStorage.setItem('todo', JSON.stringify(lista));
    document.getElementById('tarea').value="";
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var lista = get_lista();
    lista.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(lista));

    show();

    return false;
}

function show() {
    var lista = get_lista();

    var html = '<ul>';
    for(var i=0; i<lista.length; i++) {
        html += '<li>' + '<input id="tachado" class="checked" type="checkbox" onclick="tachar()">'
        +'<span id="texto">'+lista[i]+'</span>' + '<button class="remove" id="' + i  + '"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>';
    };
    html += '</ul>';

    document.getElementById('lista').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function tachar(){
    tachado=document.getElementById("tachado").checked; //Checked: para que funcione la casilla de verificación como true o false.
    if(tachado==true)
        document.getElementById("texto").style.textDecoration="line-through";
    else
         document.getElementById("texto").style.textDecoration="none";   
}

document.getElementById('add').addEventListener('click', add);
show();