var windowSize;
var sidebar = document.getElementById('hide');
function resize() {

  windowSize = window.screen.width;

  console.log(windowSize);

  $('.chart-donut').remove();
  if (windowSize <= 767) {
    var r = 80;
  }
  else if(windowSize=823){
    var r =50;
  }
  else {
    var r = 85;
  }
  dountChart(r, 7, a, 'cookingRate');
    dountChart(r, 7, b, 'quality');
    dountChart(r, 7, c, 'distribution');
  closeNav(windowSize);

}


function openNav() {
  
  sidebar.classList.add('hide-menu_responsive')
  document.getElementById("hide").style.display = "flex";
  document.getElementById("close").style.display = "flex";
}

function closeNav(ws) {

  document.getElementById("hide").style.display = "none";
  if(ws>767){
  document.getElementById("hide").style.display = "flex";
  sidebar.classList.remove('hide-menu_responsive');
  document.getElementById("close").style.display = "none";
}

}

// chart 
function dountChart(radius, stroke, Item, element) {
  var data = [];
  for (var i = 0; i < Item.length; i++) {
    var obj = {};
    obj['label'] = i;
    obj['value'] = Item[i];
    data.push(obj);
  }
  var myChart = new DonutChart(document.getElementById(element), {
    r: radius,
    stroke: stroke,
    scale: 100,
    items: data,
  })
}
var a = [0.3, 0.6];
var b = [0.86];
var c = [0.72];
