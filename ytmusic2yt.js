javascript: (function () {
  const url = window.location.href;
  const regex = /.*watch\?v=(.*)[&(.*)]/g;
  const arr = regex.exec(url);
  const videoId = arr[1];
  window.open(`https://youtube.com/watch?v=${videoId}`, '_blank');
})();