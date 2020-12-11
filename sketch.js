var ball;
var db,nodeloc, pos;
function setup(){

    db=firebase.database();
    nodeloc=db.ref("ball/position")
    nodeloc.on("value",readPos)
    createCanvas(500,500);
    ball = createSprite(350,50,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("cyan");
    if(pos !== undefined)
    {
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
    }   
    drawSprites();
}

function changePosition(x,y)
{
    db.ref("ball/position").set({x:pos.x+x, y:pos.y+y})
    //ball.x = ball.x + x;
    // ball.y = ball.y + y;
}

function readPos(data)
{
  pos=data.val();
  ball.x=pos.x
  ball.y=pos.y
}


function showError()
{
    console.log("ERRRORR")
}





/*
.ref() is used to refer to the location of the
database value we care about

.on() creates a listener which keeps
listening to the changes in the database

Everytime a change in the database values
of position (reference) happens, the
readPosition function is called.


*/