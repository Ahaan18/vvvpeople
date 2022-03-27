function check(){
    userans1 = document.getElementById("a1").value;
    userans2 = document.getElementById("a2").value;
    userans3 = document.getElementById("a3").value;
    console.log(userans1, userans2, userans3)
    point = 0;
    if(userans1 == 1000000000){
point = point+1;
    }
    if(userans2 == 100){
        point = point+1;
    }
    if(userans3 == 1000){
        point = point+1;
    }
    console.log(point);
    localStorage.setItem("points", point);
    window.location = "point.html"
}