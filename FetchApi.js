<!DOCTYPE html>
<html>

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

    .recordbox {
      align-content: center;
      width: 320px;
      height: 420px;
      background-color: cornflowerblue;
      color: #fff;
      top: 35%;
      left: 70%;
      position: absolute;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      padding: 30px 30px;

    }
  </style>
</head>

<body>
  <div class="container">
    <div class="box">
      <table id="myTable">
      </table>
    </div>
    <div class="recordbox">

      <p>Id</p>
      <input type="text" name="id" placeholder=" " id="id">
      <p>Name</p>
      <input type="text" name="fname" id="name">
      <p>Email</p><input type="text" name="email" id="email">
      <p>Phone</p><input name="phone" id="phone"><br><br>
      <button id="updaterecord">Update</button>


    </div>
  </div>

  <script>

    var emp = [];
    window.onload = fetch('https://jsonplaceholder.typicode.com/users')
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

        cell01.innerHTML = "ID";
        cell02.innerHTML = "Name";
        cell03.innerHTML = "Email";
        cell04.innerHTML = "Phone";
        //Adding rows for data
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


      });
    //displaying table data in form 
    function EditRow(data) {
      console.log(data)
      selectedRow = data.parentElement.parentElement;
      document.getElementById("id").value = selectedRow.cells[0].innerHTML;
      document.getElementById("name").value = selectedRow.cells[1].innerHTML;
      document.getElementById("email").value = selectedRow.cells[2].innerHTML;
      document.getElementById("phone").value = selectedRow.cells[3].innerHTML;

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
      let email = document.getElementById("email").value
      let phone = document.getElementById("phone").value
      selectedRow.cells[0].innerHTML = id
      selectedRow.cells[1].innerHTML = name
      selectedRow.cells[2].innerHTML = email
      selectedRow.cells[3].innerHTML = phone
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

      //Update values in array also (write code)
      emp[row_num].name = name;
      emp[row_num].email = email
      emp[row_num].phone = phone
      console.log(emp[row_num])

    }


  </script>

</body>

</html>
