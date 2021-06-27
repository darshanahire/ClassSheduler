const calender=document.getElementById("calender");
const weekDayName=document.getElementById("weekDayName");
const weekDayNamedaywise=document.getElementById("weekDayNamedaywise");
const prevMonth=document.getElementById("prevMonth");
const nextMonth=document.getElementById("nextMonth");
const month_year=document.getElementById("month_year");
const selecter=document.getElementById("selecter");
// const fromData=document.getElementById("fromData");
// const selectTeacher=document.getElementById("selectTeacher");
// const selectTime=document.getElementById("selectTime");


let str=document.getElementById("allclassesid").innerText;
// console.log(str);

let arr=str.split("\n");



selecter.addEventListener("click",()=>{
    if(selecter.value=='one'){
        calender.id='calender'
        weekDayName.id="weekDayName"}
    else if(selecter.value=='two'){
        calender.id='calenderdaywise'
        weekDayName.id="weekDayNamedaywise"
        month_year.innerHTML="";
        calender.innerHTML="";
        changeMonth(month_num);
    }
    console.log(selecter.value);
    
})

const isWeekend=d=>{
    return d%7==6||d%7==0?1:0;
}

let isclassSheduled=makeid=>{

    return arr2.includes(makeid);
   
}

// console.log('June57-9')
// console.log(arr[0])
let arr2=[];
for(let i=0;i<arr.length;i++){
   arr2[i]=arr[i].slice(0,-5);
    // console.log( arr[i])
    // console.log( arr2[i])
}



const dayName=["Mon","Tue","Wed","Thus","Fri","Sat","Sun"]
let dName="";
for(var i=1;i<=7;i++){
    dName=dayName[i-1];
    var weekend=isWeekend(i);
    weekDayName.insertAdjacentHTML("beforeend",
    `<div class="dName ${weekend?"weekend":""}">
        ${dName}
    </div>`
    )
}

const months=[
{name:"Jan",start:5,end:36},
{name:"Feb",start:1,end:29},
{name:"Mar",start:1,end:32},
{name:"Apr",start:4,end:34},
{name:"May",start:7,end:38},
{name:"June",start:2,end:32},
{name:"July",start:5,end:36},
{name:"Aug",start:1,end:32},
{name:"Sept",start:4,end:34},
{name:"Oct",start:6,end:37},
{name:"Nov",start:2,end:32},
{name:"Dec",start:4,end:35},
]

// June57-9

function changeMonth(month_num){
    month_year.insertAdjacentHTML("afterbegin",`${(months[month_num].name)} 2021 `)
for(var d=1;d<months[month_num].end;d++){
    var weekend=isWeekend(d);
    // let makeid='June57-9';
    var issedule=0;
    if(d>months[month_num].start||d<months[month_num].end){
      let temp_d=d-months[month_num].start+1;
    let makeid=months[month_num].name.concat(temp_d);
    issedule=isclassSheduled(makeid)}


    calender.insertAdjacentHTML("beforeend",
    `<div class="day ${weekend?"weekend":""} ${issedule?"issedule":""}">      
        ${calender.id!=='calenderdaywise'?(d<months[month_num].start||d>months[month_num].end?"":d-months[month_num].start+1):(d<1||d>months[month_num].end-months[month_num].start?"":d)}
    </div>`)
}
}
var month_num=5;
changeMonth(month_num);

prevMonth.addEventListener("click",()=>{
    if(month_num!=0)month_num--;
    else{month_num=11};
    month_year.innerHTML="";
    calender.innerHTML="";
    changeMonth(month_num);
    console.log(month_num);
    
})
nextMonth.addEventListener("click",()=>{
    if(month_num!=11)month_num++;
    else{month_num=0};
    month_year.innerHTML="";
    calender.innerHTML="";
    changeMonth(month_num);
    console.log(month_num);
    
})





function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("shedulerBtn").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("shedulerBtn").style.display = "block";
  }

  function showclasses(){
    console.log("show")
    document.getElementById("dropbtn1").style.display = "none";
    document.getElementById("dropbtn2").style.display = "block";
    document.getElementById("myDropdown").style.display = "block";
  }
  document.getElementById("dropbtn2").style.display = "none";
  function hideclasses(){
      console.log("hideen")
      document.getElementById("dropbtn1").style.display = "block";
    document.getElementById("dropbtn2").style.display = "none";
    document.getElementById("myDropdown").style.display = "none";
  }
  

  
