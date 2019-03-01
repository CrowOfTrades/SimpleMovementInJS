var leftF = 300;
var upF = 600;
var father = document.getElementById("father");
var player = document.getElementById("frog");
var gameOver = false;

for(i = 0; i < 10; i++){
    var car = document.createElement("div");
    car.classList.add("car");
    car.setAttribute("id","block"+i);
    document.body.insertBefore(car,father);
    document.getElementById("block"+i).style.left = 600 - Math.floor(Math.random() * 500) + "px";
    var maxTop = (600/24) +1;
    document.getElementById("block"+i).style.top = 600 - 24 * (Math.floor(Math.random() * maxTop)) + "px";
}

document.body.addEventListener('keyup', movement, true) 

function movement(e) {
    if(e.code == "KeyR"){
        leftF = 300;
        upF = 600;
        player.style.top = upF + "px";
        player.style.left= leftF + 'px';
        document.getElementById("lose").style.display= 'none';
        gameOver = false;
        loop();
        return;
    }
    else if(gameOver)
        return;
    else if(e.code == "ArrowUp"){
        if(upF <= 24) return;
        upF -= 12;        
        player.style.top = upF + "px";
    }    
    else if(e.code == "ArrowRight"){
        if(leftF >= 600) return;
        leftF += 12;
        player.style.left= leftF + 'px'
    }    
    else if(e.code == "ArrowDown"){
        if(upF >= 600) return;
        upF += 12;
        player.style.top= upF + 'px'
    }    
    else if(e.code == "ArrowLeft"){
        if(leftF <= 24) return;
        leftF -= 12;
        player.style.left= leftF + 'px'
    }
};

function loop(){
    setTimeout(function()
    { 
        for(i = 0; i < 10; i++){
            var obj = document.getElementById("block" + i)
            autoMovement(obj, 6);
            if(parseInt(obj.style.top) == upF  && parseInt(obj.style.left) == leftF){
                document.getElementById("lose").style.display= 'block';
                gameOver = true;
                return;
            }
        }
        loop();
    }, 10);
}

function autoMovement(obj, speed){
    obj.style.left = parseInt(obj.style.left) - speed + 'px';
    if(parseInt(obj.style.left) <= 0) obj.style.left = '600px';
}