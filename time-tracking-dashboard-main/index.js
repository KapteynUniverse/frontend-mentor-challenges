import data from './data.json' with { type: 'json' };
const container = document.getElementById('dashboard');

const appendItem = (item) => {
    container.innerHTML += `
  <section class="${(item.title).toLowerCase()} card daily hidden">
          <div class="background layout ${(item.title).toLowerCase()}-${item.background}">
            <img
              src="./assets/images/icon-${(item.title).toLowerCase()}.svg"
              alt=""
              class="background-img"
            />
          </div>
          <div class="layout">
            <p class="medium-text">${item.title}</p>
            <img
              src="./assets/images/icon-ellipsis.svg"
              alt="More options"
              width="16"
              class="options"
            />
          </div>
          <div class="layout hours">
            <p  class="big-text">${item.timeframes.daily.current}hrs</p>
            <p  class="small-text">Last Week - ${item.timeframes.daily.previous}hrs</p>
          </div>

        </section>
          <section class="${(item.title).toLowerCase()} card weekly">
          <div class="background layout ${(item.title).toLowerCase()}-${item.background}">
            <img
              src="./assets/images/icon-${(item.title).toLowerCase()}.svg"
              alt=""
              class="background-img"
            />
          </div>
          <div class="layout">
            <p class="medium-text">${item.title}</p>
            <img
              src="./assets/images/icon-ellipsis.svg"
              alt="More options"
              width="16"
              class="options"
            />
          </div>
          <div class="layout hours">
            <p  class="big-text">${item.timeframes.weekly.current}hrs</p>
            <p  class="small-text">Last Week - ${item.timeframes.weekly.previous}hrs</p>
          </div>
        </section>

            </section>
          <section class="${(item.title).toLowerCase()} card monthly hidden">
          <div class="background layout ${(item.title).toLowerCase()}-${item.background}">
            <img
              src="./assets/images/icon-${(item.title).toLowerCase()}.svg"
              alt=""
              class="background-img"
            />
          </div>
          <div class="layout">
            <p class="medium-text">${item.title}</p>
            <img
              src="./assets/images/icon-ellipsis.svg"
              alt="More options"
              width="16"
              class="options"
            />
          </div>
          <div class="layout hours">
            <p  class="big-text">${item.timeframes.monthly.current}hrs</p>
            <p  class="small-text">Last Week - ${item.timeframes.monthly.previous}hrs</p>
          </div>
        </section>
    `;
  }
  

  data.forEach((item) => {
      appendItem(item);
  });

const daily = document.querySelectorAll(".daily")
const weekly = document.querySelectorAll(".weekly")
const monthly = document.querySelectorAll(".monthly")

const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");
const buttons = [dailyButton,weeklyButton,monthlyButton]


buttons.map((button) => button.addEventListener("click", () => 
{ if (button.innerHTML === "Daily"){
    daily.forEach(item => item.classList.remove("hidden"));
    weekly.forEach(item => item.classList.add("hidden"));
    monthly.forEach(item => item.classList.add("hidden"));
    dailyButton.style.color="white"
    weeklyButton.style.color="inherit"
    monthlyButton.style.color="inherit"
} else if (button.innerHTML === "Weekly") {
    daily.forEach(item => item.classList.add("hidden"));
    weekly.forEach(item => item.classList.remove("hidden"));
    monthly.forEach(item => item.classList.add("hidden"));
    dailyButton.style.color="inherit"
    weeklyButton.style.color="white"
    monthlyButton.style.color="inherit"
} else {
    daily.forEach(item => item.classList.add("hidden"));
    weekly.forEach(item => item.classList.add("hidden"));
    monthly.forEach(item => item.classList.remove("hidden"));
    dailyButton.style.color="inherit"
    weeklyButton.style.color="inherit"
    monthlyButton.style.color="white"
}
}
))



