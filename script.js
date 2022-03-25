const url = " https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
var dataarr = [];
// ---------------fetching data-----------------------
async function getData(url) {

    await fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((objdata) => {
    //   console.log(objdata);
      objdata.map((values) => {
        dataarr.push(values);
      });
      tableData(dataarr);
      getUserData(0);
    })
    .catch((err) => {
      console.log(err);
    }); 
}
// console.log(dataarr.values());

// --------------diplay data in table---------------
function tableData(dataarr) {
  var data = "";
        for (let i = 0; i < dataarr.length; i++) {
            console.log()
            data+="<tr onClick=getUserData("+i+")>";
            data+="<td>"+dataarr[i].first_name+"</td>";
            data+="<td>"+dataarr[i].last_name+"</td>";
            data+="<td>"+dataarr[i].username+"</td>";
            data+="<td>"+dataarr[i].employment.title+"</td>";
            data+="<td>"+dataarr[i].address.country+"</td>";
            data+="<td onClick=deleteData("+i+") ><i class='fa-solid fa-trash-can'></i></td>"
            data+="</tr>";
    }
    document.getElementById("table_body").innerHTML = data;
  // let html = "";
  // for (var i = 0; i < dataarr.length; i++) {
  //   html=`<tr id="${i}" onclick=getUserData(${i})>
  //           <td>${dataarr[i].first_name}</td>
  //           <td>${dataarr[i].last_name}</td>
  //           <td>${dataarr[i].username}</td>
  //           <td>${dataarr[i].employment.title}</td>
  //           <td>${dataarr[i].address.country}</td>
  //           <td><a onclick=deleteData(${i})>Remove</a></td>
  //           </tr>`

  //           document.getElementById("table_body").innerHTML += html;
  //         }
}
// -----------------right-list-----------------

function getUserData(i){
    // console.log(i);

    console.log(dataarr[i].first_name);
    pData=`<li>ID :${dataarr[i].id}</li>
    <li>First Name :${dataarr[i].first_name}</li>
    <li>Last Name :${dataarr[i].last_name}</li>
    <li>Email Id :${dataarr[i].email}</li>
    <li>Uid :${dataarr[i].uid}</li>
    <li>Gender :${dataarr[i].gender}</li>
    <li>Phone Number :${dataarr[i].phone_number}</li>
    <li>SIN :${dataarr[i].social_insurance_number}</li>
    <li>DOB :${dataarr[i].date_of_birth}</li>`
    eData=`
    <li>Title :${dataarr[i].employment.title}</li>
    <li>Key Skill :${dataarr[i].key_skill}</li>`
    addData=`
    <li>city :${dataarr[i].address.city}</li>
    <li>state :${dataarr[i].address.state}</li>
    <li>country :${dataarr[i].address.country}</li>`
    adData=`
    <li>credit_card Number :${dataarr[i].credit_card.cc_number}</li>
    <li>subscription :${dataarr[i].subscription.status}</li>`
    document.getElementById("pd-list").innerHTML = pData;
    document.getElementById("emp-list").innerHTML = eData;
    document.getElementById("add-list").innerHTML = addData;
    document.getElementById("ad-list").innerHTML = adData;
    // console.log(dataarr[i].avatar);
    // let img=`src="${dataarr[i].avatar}"`;
    document.getElementById("img").setAttribute("src",dataarr[i].avatar);
    let greet=getTime();
    document.getElementById("greeting").innerHTML=greet+`\t<span>`+dataarr[i].first_name+`\t`+dataarr[i].last_name+`</span>`;
    console.log(greet);
}
// --------------greetings---------
function getTime(){
  const d=new Date();
  let hour=d.getHours();
  console.log(hour);
  if(hour>6 && hour < 12){
    return "Good Morning";
  }
  else if(hour>= 12 && hour < 18){
    return "Good Afternoon";
  }else if(hour>=18 && hour < 22){
    return "Good Evening";
  }else if(hour >=22){
    return "Good Night";
  }
}
// -----------------------deleteData-----------
function deleteData(del){
  if(confirm("Do you want to delete?")){

  for(let i=0;i<dataarr.length;i++){
    if(del===i){
        dataarr.splice(i,1);
        tableData(dataarr);
    }
  }
}



  // if(confirm("Do you want to delete?")){
    
  //   const list = document.getElementById("table_body");
  //   console.log(list);
  //   if (list.hasChildNodes()) {
  //     console.log(list.children[i]);
  //   list.removeChild(list.children[i]);
  //   // dataarr.splice(i,1);
  // }
  //   // console.log(i);
  // }

  // // tableData(dataarr);
}
// --------------------------mainfunction----------

window.onload=function main(){
  getData(url);
}