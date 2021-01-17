function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    layer.style.transform = `translateX(${(e.clientX * speed) / 1000}px)`;
  });
}

document.addEventListener("mousemove", parallax);
