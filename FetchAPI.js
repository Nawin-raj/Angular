<!DOCTYPE html>
<html>
<title>Fetch API</title>
<head>
  <style>
    table {
      border-collapse: collapse;
      border: 1px solid black;

    }

    th,
    td {
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2
    }

    th {
      background-color: #4CAF50;
      color: white;
    }

    tr:first-child {
      background: #4CAF50
    }

    button {
      background-color: #4CAF50;
      border: none;
      border-radius: 30%;
      margin: 0;
      padding: 0;
      cursor: pointer;
      color: honeydew;
      border-radius: 5px;
      width: 50px;
      height: 20px;

    }

    .recordbox {
      align-content: center;
      width: 320px;
      height: 420px;
      background-color: #4CAF50;
      color: #fff;
      top: 45%;
      left: 70%;
      position: absolute;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      padding: 30px 30px;
      opacity: 0.8;
      border-radius: 10px;
      display: none;
    }

    input {
      border-radius: 5px;
    }

    .formbtn {
      background-color: green;
      color: honeydew;
      border-radius: 5px;
      width: 50px;
      height: 30px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box">
      <h1>Displaying Users using Fetch API</h1>
      <table id="myTable">
      </table>

    </div>
    <div id="formdata" class="recordbox">
      <form onsubmit=event.preventDefault()>
        <p>Id</p>
        <input type="text" name="id" disabled id="id">
        <p>Name</p>
        <input type="text" name="fname" id="name" required>
        <p>Please enter name</p>
        <p>Email</p><input type="text" name="email" id="email" required>
        <p>Phone</p><input name="phone" id="phone" required><br><br>
        <button class=formbtn id="updaterecord">Update</button>
        <button class=formbtn id="close">Close</button>
      </form>

    </div>
  </div>

  <script>

    var emp = [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then((data) => {

        for (let i = 0; i < data.length; i++) {
          emp.push({ "id": data[i].id, "name": data[i].name, "email": data[i].email, "phone": data[i].phone });
        }
        console.log(emp)
        var table = document.getElementById("myTable");
        //Adding table head
        var firstrow = table.insertRow(-1);
        var cell01 = firstrow.insertCell(0);
        var cell02 = firstrow.insertCell(1);
        var cell03 = firstrow.insertCell(2);
        var cell04 = firstrow.insertCell(3);
        var cell05 = firstrow.insertCell(4);
        var cell06 = firstrow.insertCell(5);

        cell01.innerHTML = "<button id=one>ID</button>";
        cell02.innerHTML = "<button id=two>NAME</button>";
        cell03.innerHTML = "<button id=three>EMAIL</button>";
        cell04.innerHTML = "<button id=four>PHONE</button>";
        //Adding rows for data

        var addrows = function () {
          for (let i = 0; i < data.length; i++) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(4);


            cell1.innerHTML = emp[i].id;
            cell2.innerHTML = emp[i].name;
            cell3.innerHTML = emp[i].email;
            cell4.innerHTML = emp[i].phone;
            cell5.innerHTML = "<button  onClick=EditRow(this)>Edit</button>"
            cell6.innerHTML = "<button onClick=DeleteRow(this)>Delete</button>"


          }
          document.getElementById("one").addEventListener('click', sortbyid);
          document.getElementById("two").addEventListener('click', sortbyname);
          document.getElementById("three").addEventListener('click', sortbyemail);
          document.getElementById("four").addEventListener('click', sortbyphone);
        }
        addrows();




      });
    //displaying table data in form 
    function EditRow(data) {
      document.getElementById('close').addEventListener('click', function () {
        document.getElementsByClassName('recordbox')[0].style.display = "none";
      })
      document.getElementsByClassName('recordbox')[0].style.display = "block";
      console.log(data)
      selectedRow = data.parentElement.parentElement;
      document.getElementById("id").value = selectedRow.cells[0].innerHTML;
      document.getElementById("name").value = selectedRow.cells[1].innerHTML;
      document.getElementById("email").value = selectedRow.cells[2].innerHTML;
      document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
      //addrows();


    }

    //deleting record from table and array
    function DeleteRow(data) {
      row = data.parentElement.parentElement;
      //deleting particular row from main array
      rownum = row.rowIndex
      console.log(rownum)
      rownum = rownum - 1;
      console.log(emp[rownum])
      emp.splice(rownum, 1)
      console.log(emp)

      document.getElementById("myTable").deleteRow(row.rowIndex)
      userId = row.cells[0].innerHTML;
      fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
        method: 'DELETE',
      })
        .then(res => res.json())// or res.json()
        .then(res => console.log(res + " Deleted row"))

    }

    document.getElementById("updaterecord").addEventListener('click', updateRecord)

    //To update record in table and array
    function updateRecord() {

      row_num = selectedRow.rowIndex - 1;
      let id = document.getElementById("id").value;
      let name = document.getElementById("name").value
      console.log(name)
      let email = document.getElementById("email").value
      let phone = document.getElementById("phone").value
      if (name == "" | email == "") {

      }
      else {
        selectedRow.cells[0].innerHTML = id
        selectedRow.cells[1].innerHTML = name
        selectedRow.cells[2].innerHTML = email
        selectedRow.cells[3].innerHTML = phone
        document.getElementsByClassName('recordbox')[0].style.display = "none";
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json text/plain',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            phone: phone
          })
        }).then((res) => res.text()).then((data) => console.log(data + " Data updated in the server using POST"))
      }

      //Update values in array also (write code)
      emp[row_num].name = name;
      emp[row_num].email = email
      emp[row_num].phone = phone
      console.log(emp[row_num])
      //end of code
    }

    function sortbyid() {
      idsort(emp);
      arrange();
    }

    function sortbyname() {
      namesort(emp);
      arrange();
    }

    function sortbyemail() {
      emailsort(emp);
      arrange();
    }

    function sortbyphone() {
      phonesort(emp);
      arrange();
    }

    function arrange() {
      console.log("In arrange")
      for (let i = 1; i <= 10; i++) {
        document.getElementById("myTable").rows[i].cells[0].innerHTML = emp[i - 1].id;
        document.getElementById("myTable").rows[i].cells[1].innerHTML = emp[i - 1].name;
        document.getElementById("myTable").rows[i].cells[2].innerHTML = emp[i - 1].email;
        document.getElementById("myTable").rows[i].cells[3].innerHTML = emp[i - 1].phone;

      }
    }

    function idsort(emp) {
      console.log("by id")
      emp.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        else {
          return 1;
        }
      });
    }

    function namesort(emp) {
      console.log("by name")
      emp.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        else {
          return 1;
        }
      });
    }

    function emailsort(emp) {
      console.log("by email")
      emp.sort(function (a, b) {
        if (a.email > b.email) {
          return -1;
        }
        else {
          return 1;
        }
      });
    }

    function phonesort(emp) {
      console.log("by email")
      emp.sort(function (a, b) {
        if (a.phone > b.phone) {
          return -1;
        }
        else {
          return 1;
        }
      });
    }
  </script>

</body>

</html>
