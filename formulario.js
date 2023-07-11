document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var language = document.getElementById("language").value;

    var message = "Olá " + name + ", você tem " + age + " anos e já está aprendendo " + language + "!";
    alert(message);
  });