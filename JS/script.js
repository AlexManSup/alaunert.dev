"strict mode";
setInterval(function () {
  let datetime = new Date();
  const targetTime = new Date(2022, 5, 25);
  let miliseconds = targetTime - datetime;
  let total_seconds = parseInt(Math.floor(miliseconds / 1000));
  let total_minutes = parseInt(Math.floor(total_seconds / 60));
  let total_hours = parseInt(Math.floor(total_minutes / 60));
  let days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  // let diff = targetTime - datetime;
  // let days = Math.trunc(diff / (1000 * 60 * 60 * 24));
  // diff -= days * 1000 * 60 * 60 * 24;
  // let hours = Math.trunc(diff / (1000 * 60 * 60));
  // diff -= hours * 1000 * 60 * 60;
  // let minutes = Math.trunc(diff / (1000 * 60));
  // diff -= minutes * 1000;
  // let seconds = ((diff % 60000) / 1000).toFixed(0);
  document.querySelector(
    ".timer"
  ).textContent = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);
