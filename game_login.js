function adduser()
{
    player1name=document.getElementById("pleyer_1_input").value;
    player2name=document.getElementById("pleyer_2_input").value;

    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    window.location.replace("game_page.html");
}