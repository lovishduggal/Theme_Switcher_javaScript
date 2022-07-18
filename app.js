const themeSelector = document.querySelector("#themeSelector");

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  let sunset = new Date().sunset(
    position.coords.latitude,
    position.coords.longitude
  );
  let sunrise = new Date().sunrise(
    position.coords.latitude,
    position.coords.longitude
  );


  console.log(sunrise.getHours(), sunset.getHours());

  if (isDay(sunset, sunrise)) {
     setColor("colorLight");
  } else {
    setColor("colorDark");
  }

 

  function isDay(sunset, sunrise) {
    const nowHours = new Date().getHours();
    return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
  }
});
function defColor() {
  document.documentElement.className =
    localStorage.getItem("theme") || "colorLight";
  themeSelector.value = localStorage.getItem("theme");
}
defColor();
themeSelector.addEventListener("change", (e) => {
 
  setColor(e.target.value);
});
function setColor(color) {
  
  themeSelector.value = color;
  document.documentElement.className = color;

  localStorage.setItem("theme", color);
}
