alert('this is my first web page');


var submit=document.getElementById('submit');
var nameInput=document.getElementById('input');
submit.onclick= function(){
    
    var name=nameInput.value;
    var request=new XMLHttpRequest();
   
    request.onload = function(){
        var names=request.responseText;
        names=JSON.parse(names);
        var list='';
        for(var i=0; i<names.length;i++)
        {
        list= '<li>' +names[i]+ '<li>';
        }
        var ul= document.getElemnetById('list');
        ul.innerHTML=list;
    };
     request.open('GET', 'http://harshnyk190398.imad.hasura-app.io/hello?name='+name,true);
    request.send(null);
};
    
