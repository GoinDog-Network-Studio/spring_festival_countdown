let counter = document.getElementById("counter");
let percent = document.getElementById("percent");
function update() {
    let date = new Date();
    let day_counter = 28 + (31 - date.getDay());
    let hour_counter = 23 - date.getHours();
    if (hour_counter.toString().length != 2) hour_counter = "0" + hour_counter;
    let minute_counter = 59 - date.getMinutes();
    if (minute_counter.toString().length != 2) minute_counter = "0" + minute_counter;
    let second_counter = 60 - date.getSeconds();
    if (second_counter.toString().length != 2) second_counter = "0" + second_counter;
    let innerHtml = `${day_counter}天${hour_counter}时${minute_counter}分${second_counter}秒`
    counter.innerText = innerHtml;

    let past_timestamp = new Date(2024, 2, 10).getTime();
    let future_timestamp = new Date(2025, 1, 29).getTime();
    let now_timestamp = date.getTime();
    let percent_num = (now_timestamp - past_timestamp) / (future_timestamp - past_timestamp);
    percent.innerText = (percent_num * 100).toString().substring(0, 9) + "%";
}
setInterval(update, 1000);