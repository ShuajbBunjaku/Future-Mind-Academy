    document.addEventListener('keydown', (e) => {
    
        if ((e.key == 'ArrowUp')|| (e.key == 'w') ) { 
            catObj.y -= catObj.speed ; 
        } else if ((e.key == 'ArrowDown') || (e.key == 's')) { 
            catObj.y += catObj.speed ; 
        } else if ((e.key == 'ArrowLeft') || (e.key == 'a')) {
            catObj.x -= catObj.speed ; 
        } else if ((e.key == 'ArrowRight') || (e.key == 'd')) { 
            catObj.x += catObj.speed ; 
        }
    })
    
    function timer (){
        ticTimer--
        if(ticTimer === 0){
            clearInterval(timerInterval)
        }
    }
    const timerInterval =   setInterval(timer, 1000)
    
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d")
    const bgGame = new Image();
    bgGame.src = 'images/background.png';
    
    let ticTimer = 15
    let points = 0
    
    
    let bgReady = false;
    bgGame.onload = function () {
        bgReady = true;
    }
    
    let catObj = {}
    catObj.width = 120;
    catObj.height = 120
    catObj.x = 332;
    catObj.y = 300;
    catObj.speed = 5;
    
    let changeSpeed = document.querySelector('#catSpeed');
    let changeDifficulty = document.querySelector('#diffculty')
    
    changeSpeed.addEventListener('change', (event) => {
        catObj.speed = parseInt(event.target.value, 10);
    });
    changeDifficulty.addEventListener('change', (event) => {
        ticTimer = event.target.value; 
    });
    
    const catImg = new Image();
    
    let catReady = false;
    catImg.src = 'images/cat.png'
    catImg.onload = function () {
        catReady = true;
    }
    
    let mouseObj = {};
    mouseObj.width = 52;
    mouseObj.height = 54;
    mouseObj.x = 50;
    mouseObj.y = 50;
    
    const mouseImg = new Image();
    mouseImg.src = 'images/mouse.png'
    let mouseReady = false;
    mouseImg.onload = function () {
        mouseReady = true;
    }
    
    function render(){
        if(bgReady){
            ctx.drawImage(bgGame, 0, 0);
        }
        if(catReady){
            ctx.drawImage(catImg, catObj.x, catObj.y);
        }
        if(mouseReady){
            ctx.drawImage(mouseImg , mouseObj.x , mouseObj.y);
        }
    
        if (catObj.x > canvas.width) {
            catObj.x = -catImg.width;
        } else if (catObj.x < -catImg.width) {
            catObj.x = canvas.width;
        }
    
        if (catObj.y > canvas.height) {
            catObj.y = -catImg.height;
        } else if (catObj.y < -catImg.height) {
            catObj.y = canvas.height;
        }
        
        if(
            (catObj.x + catObj.width) > mouseObj.x &&
            (catObj.y + catObj.height) > mouseObj.y &&
            (catObj.x + 20) < (mouseObj.x + mouseObj.width )&&
            (catObj.y + 20) < (mouseObj.y + mouseObj.height)

        ){
            if(ticTimer !== 0){
                points++;
                ticTimer += 1
            }
                
            mouseObj.x = Math.floor(Math.random() * 460);
            mouseObj.y = 30 + Math.floor(Math.random() * 426) ;

        }
        
        if(ticTimer == 0){
            mouseObj.x = 700;
            if(points >= 3){
                ctx.fillStyle = 'white'
                ctx.fillText('You Win', 220, 200)
            }else{
                ctx.fillStyle = 'red'
                ctx.fillText('You loose', 220,200)
            }
        }

    
        ctx.font = '20px georgia';
        ctx.fillStyle = 'white';
        ctx.fillText(`Points: ${points}`, 10 , 25)
        ctx.fillText(`Timer : ${ticTimer}`, 400, 25)
    
        // if((points === 0)&&(ticTimer === 0)){
        //     ctx.fillText('You Lost',195,25)
        // }else if((points === 0)&&(ticTimer !== 0)){
        //     ctx.fillText('', 195, 25)
        // }else if((points !== 0)&&(ticTimer > 0)){
        //     ctx.fillText('', 195, 25)
        // }else{
        // ctx.fillText('You won',195,25)
        // }
        
        if(points >= 10){
        ctx.fillText('You won',195,25)
        }
    }
    setInterval(render, 1)
