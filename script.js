
let timeInSeconds = 5 * 60 * 60;

function updateTimer() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;

  if (timeInSeconds > 0) {
    timeInSeconds--;
    setTimeout(updateTimer, 1000); 
  } else {
    document.getElementById('timer').textContent = '00:00:00'; 
  }
}

updateTimer();  
