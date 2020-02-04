<!DOCTYPE html>
<html>
<head>
    <style>
        table {
          border-collapse: collapse;
          border: 1px solid black;
        }
        
        th, td {
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even){background-color: #f2f2f2}
        
        th {
          background-color: #4CAF50;
          color: white;
        }
        
        tr:first-child { background: #4CAF50 }
        
        .container{overflow: hidden}
            .tab{float: left;}
            .tab-2{margin-left: 90px ;}
            .tab-2 input{display: block;margin-bottom: 10px;}
            

       
        </style>
</head>
<body>
<div class="container">
<h3>Display users Using fetch API</h3>
<div class="tab tab-1">
  <table id="myTable">

  </table>
</div>
<div class="tab tab-2">
  ID:<input type="text" name="id" id="id">
  Name :<input type="text" name="name" id="name">
  Email :<input type="text" name="email" id="email">
  Phone :<input  name="phone" id="phone">
  <button id="btnsend">Update</button>
 
</div>
</div>


  
  
  




<script>
var id=1;
var name="naveen";
var emp=[];
window.onload=fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())
.then((data)=>{
   
    for(let i=0;i<data.length;i++){
        emp.push({"id":data[i].id,"name":data[i].name,"email":data[i].email,"phone":data[i].phone});
    }
    console.log(emp)
    var table = document.getElementById("myTable");
  var firstrow=table.insertRow(-1);
  var cell01 = firstrow.insertCell(0);
  var cell02 = firstrow.insertCell(1);
  var cell03 = firstrow.insertCell(2);
  var cell04 = firstrow.insertCell(3);
  var cell05 = firstrow.insertCell(4);

  cell01.innerHTML="ID";
  cell02.innerHTML="Name";
  cell03.innerHTML="Email";
  cell04.innerHTML="Phone";

  for(let i=0;i<10;i++){
  var row = table.insertRow(-1);
  
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
 

  cell1.innerHTML = emp[i].id;
  cell2.innerHTML = emp[i].name;
  cell3.innerHTML = emp[i].email;
  cell4.innerHTML = emp[i].phone;
  cell5.innerHTML = "<button>Edit</button>" 
    }
    // for(let i=0;i<10;i++){
    //   var btnval=document.getElementsByTagName('button')[i].addEventListener('click',show);
    // }
    // function show(){
     
    // };
    var table=document.getElementById('myTable'),rIndex;
    for(var i=1;i<table.rows.length;i++){
      table.rows[i].onclick=function(){

        rIndex=this.rowIndex;
        document.getElementById("id").value= this.cells[0].innerHTML;
        document.getElementById("name").value=this.cells[1].innerHTML;
        document.getElementById("email").value=this.cells[2].innerHTML;
        document.getElementById("phone").value=this.cells[3].innerHTML;
        console.log(rIndex)
        console.log()
      }
    } 

});

document.getElementById('btnsend').addEventListener('click',function(){
 var id=  document.getElementById('id').value;
 var name=  document.getElementById('name').value;
 var email=  document.getElementById('email').value;
 var phone=  document.getElementById('phone').value;
 fetch('https://jsonplaceholder.typicode.com/users',{
                 method:'POST',
                 headers:{
                     'Accept':'application/json text/plain',
                     'Content-Type':'application/json'
                 },
                 body: JSON.stringify({
                     id:id,
                     name:name,
                     email:email,
                     phone:phone
                 })
             }).then((res)=>res).then((data)=>console.log(data))
})

 
</script>

</body>
</html>
