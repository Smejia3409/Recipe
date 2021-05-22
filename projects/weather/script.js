$(document).ready(function () {
  function workProcess() {
    let city = $("#city").val();
    let api =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=bf18979751b89e3652a0a2f2a69ed0d4&units=imperial";

    fetch(api)
      .then((get) => get.json())
      .then((data) => {
        const name = data["name"];
        const temp = data["main"]["temp"];
        const sunRise = data["sys"]["sunrise"];
        const sunSet = data["sys"]["sunset"];
        const mainDescription = data["weather"][0]["main"];
        const description = data["weather"][0]["description"];
        const icon = data["weather"][0]["icon"];
        Math.round(temp);

        $("#result-city").html(name);
        $("#result-temp").html(temp + "&#x2109;");
        $("#result-description").html(description);
        $("#result-sunrise").html(sunRise / 1000);
        $("#result-sunset").html(sunSet / 1000);

        $("#window").css({
          "transition-property": "height",
          "transition-duration": "1s",
          height: "500px",
        });
        console.log(sunSet);
        console.log(sunRise);
        console.log(mainDescription);
        console.log(description);

        $("#weatherImg").attr(
          "src",
          "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        );

        $("#weatherImg").attr("class", "toggle");
        console.log(icon);
      })

      .catch((Error) => {
        alert("You entered an invaild city, please try again");
        window.location.reload();
      });
  }

  $("#getWeather").click(() => {
    workProcess();
  });

  $("#city").on("keypress", function (e) {
    if (e.keyCode == 13) {
      workProcess();
    }
  });
});
