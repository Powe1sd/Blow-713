document.addEventListener("mousemove", function (event) {
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const boundingBox = face.getBoundingClientRect();
  const offsetX = boundingBox.left + boundingBox.width / 2;
  const offsetY = boundingBox.top + boundingBox.height / 2;
  const deltaX = mouseX - offsetX;
  const deltaY = mouseY - offsetY;
  const angle = Math.atan2(deltaY, deltaX);
  const distance = Math.min(
    Math.sqrt(deltaX * deltaX + deltaY * deltaY),
    boundingBox.width / 2
  );

  const maxEyeMovement = 15;
  const eyeMovementX =
    Math.cos(angle) *
    Math.min(distance, boundingBox.width / 2 - maxEyeMovement);
  const eyeMovementY =
    Math.sin(angle) *
    Math.min(distance, boundingBox.height / 2 - maxEyeMovement);

  eyes.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;
});
