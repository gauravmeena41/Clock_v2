const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const sunBtn = document.querySelector(".fa-sun");
const moonBtn = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const clockContainer = document.querySelector(".clock-container");
const dateContainer = document.querySelector(".date-container");

moonBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#263238";
  clockContainer.classList.add("dark-mode");
  dateContainer.classList.add("dark-mode");
  sunBtn.style.display = "block";
  moonBtn.style.display = "none";
});

sunBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#d7b4ff";
  clockContainer.classList.remove("dark-mode");
  dateContainer.classList.remove("dark-mode");
  sunBtn.style.display = "none";
  moonBtn.style.display = "block";
});

let clock = () => {
  let time = new Date();

  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let date = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  let period = "AM";
  if (hrs == 12) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs -= 12;
    period = "PM";
  }
  if (month < 10) {
    month = `0${month}`;
  }
  hour.innerHTML = hrs < 10 ? `0${hrs}` : hrs;
  minute.innerHTML = min < 10 ? `0${min}` : min;
  second.innerHTML = sec < 10 ? `0${sec}` : sec;
  dateEl.innerHTML = `${date} - ${month} - ${year}`;
};
setInterval(clock, 1000);
