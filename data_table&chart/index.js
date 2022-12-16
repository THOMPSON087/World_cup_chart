function insert() {
   data1.push({
        s1: document.getElementById("point1").value,
        s2: document.getElementById("point2").value,
        s3: document.getElementById("point3").value,
        s4: document.getElementById("point4").value,
       
      });   
}

function insert1(){
    data2.push({
        s5: document.getElementById("point5").value,
        s6: document.getElementById("point6").value,
        s7: document.getElementById("point7").value,
        s8: document.getElementById("point8").value, 
      });   
   
}

function insert2(){
    data3.push({
        s9: document.getElementById("point9").value,
        s10: document.getElementById("point10").value,
        s11: document.getElementById("point11").value,
        s12: document.getElementById("point12").value, 
      });   
   
}

function insert3(){
    data4.push({
        s13: document.getElementById("point13").value,
        s14: document.getElementById("point14").value,
        s15: document.getElementById("point15").value,
        s16: document.getElementById("point16").value, 
      });   
   
}

var data1  = [];
var data2  = [];
var data3  = [];
var data4  = [];


function addData1() {
    var xValue = ["Japan", "Germany", "Canada", "Iran"];
    var yValue = [data1[0].s5,data1[0].s6,data1[0].s7,data1[0].s8];
    var barColors = ["green", "yellow","red","blue","gold"];        
      new Chart( "myChart",
          {
          type: "bar",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group A"
            }
          }
        });
    }

    function addData2() {
       
        var xValue = ["Mexico", "Argentina", "S.Arebia", "poland"];
        var yValue = [data2[0].s1,data2[0].s2,data2[0].s3,data2[0].s4];
        var barColors = ["green", "yellow","red","blue","gold"];       
          new Chart( "myChart",
              {
              type: "bar",
              data: {
                labels: xValue,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValue
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: true,
                  text: "Group B"
                }
              }
            });
        }

    
    function addData3() {
            var xValue = ["Urugway", "Costarica", "Portugal", "Ghana"];
            var yValue = [data3[0].s9,data3[0].s10,data3[0].s11,data3[0].s12];
            var barColors = ["green", "yellow","red","blue","gold"];        
              new Chart( "myChart",
                  {
                  type: "bar",
                  data: {
                    labels: xValue,
                    datasets: [{
                      backgroundColor: barColors,
                      data: yValue
                    }]
                  },
                  options: {
                    legend: {display: false},
                    title: {
                      display: true,
                      text: "Group C"
                    }
                  }
                });
            }
    
            function addData4() {
                var xValue = ["S.Korae", "Spain", "france", "England"];
                var yValue = [data4[0].s13,data4[0].s14,data4[0].s15,data4[0].s16];
                var barColors = ["green", "yellow","red","blue","gold"];        
                  new Chart( "myChart",
                      {
                      type: "bar",
                      data: {
                        labels: xValue,
                        datasets: [{
                          backgroundColor: barColors,
                          data: yValue
                        }]
                      },
                      options: {
                        legend: {display: false},
                        title: {
                          display: true,
                          text: "Group D"
                        }
                      }
                    });
                }
     
        