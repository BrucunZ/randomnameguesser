/*global $*/
$(document).ready(function(
    ){
   var student=["Taufiq","Nat","Kyshon","David","Kedar","Micae","Aldair","Usman","Barry","Mathew"];
   var teacher=["David","Josh","Thai","Enrico","Michael"];
   var origin=Math.random();
   var or2=origin*10;
   var num=Math.floor(or2);
   var or3=origin*5;
   var num2=Math.floor(or3);
$("#student").click(function(){
    if(num===0){
        $("#student2").append(student[0]);
    }
    else if(num===1){
        $("#student2").append(student[1]);
    }
    else if(num===2){
        $("#student2").append(student[2]);
    }
    else if(num===3){
        $("#student2").append(student[3]);
    }
    else if(num===4){
        $("#student2").append(student[4]);
    }
    else if(num===5){
        $("#student2").append(student[5]);
    }
    else if(num===6){
        $("#student2").append(student[6]);
    }
    else if(num===7){
        $("#student2").append(student[7]);
    }
    else if(num===8){
        $("#student2").append(student[8]);
        
    }
    else if(num===9){
        $("#student2").append(student[9]);
    }


});
$("#teacher").click(function(){
  if(num2===0){
      $("#teacher2").append(teacher[0]);
  }
    else if(num2===1){
      $("#teacher2").append(teacher[1]);
  }
    else if(num2===2){
      $("#teacher2").append(teacher[2]);
  }
    else if(num2===3){
      $("#teacher2").append(teacher[3]);
  }
    else if(num2===4){
      $("#teacher2").append(teacher[4]);
  }
});
});
    
