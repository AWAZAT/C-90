function login() {
    var p1 = document.getElementById("player1").value;
    var p2 = document.getElementById("player2").value;
    localStorage.setItem("player1_name",p1);
    localStorage.setItem("player2_name",p2);
    window.location = "file.html";
}