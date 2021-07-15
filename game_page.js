player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML=player1_name+"-";
document.getElementById("player2name").innerHTML=player2_name+"-";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question torn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer torn-"+player2_name;

function send()
{
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;
    actua_answer=parseInt(number1) * parseInt(number1);
    question_number="<h4>"+Number1+"x"+Number2+"</h4>";input_box;
    check_button="<br> <br> <button class='btn btn-info'onclick='check()'>check</button>";
    question_number="<h4>"+Number1+"x"+Number2+"</h4>";
    input_box="<br>answer:cinput type='type'id='input_check_box'>";
    check_button="<br> <br><button class='btn btn-info'onclick='check()'>check</button>;
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer=="player1")
    {
        update_player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;
    }
    else
    {
        update_player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
}
if(question_turn=="player1")
{
    question_turn="player2"
    document.getElementById("player_question").innerHTML="question-"+player2_name;
}
else
{
    question_turn="player1"
    document.getElementById("player_question").innerHTML="question-"+player1_name;
}