document.addEventListener("mousemove", handleMove);
document.addEventListener("touchmove", handleMove);

function handleMove(event) {
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const pupils = document.querySelectorAll(".pupil");
  let mouseX, mouseY;

  if (event.type === "touchmove") {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  } else {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  const boundingBox = face.getBoundingClientRect();
  const offsetX = boundingBox.left + boundingBox.width / 2;
  const offsetY = boundingBox.top + boundingBox.height / 2;
  const eyeX = boundingBox.left + boundingBox.width / 2;
  const eyeY = boundingBox.top + boundingBox.height / 2;

  const eyeMovementRange = 28; // Rango de movimiento de los ojos

  const deltaX = mouseX - offsetX;
  const deltaY = mouseY - offsetY;
  const angle = Math.atan2(deltaY, deltaX);
  const distance = Math.min(
    Math.sqrt(deltaX * deltaX + deltaY * deltaY),
    boundingBox.width / 4
  ); // Limitar el movimiento al radio del ojo

  const eyeMovementX = Math.cos(angle) * eyeMovementRange;
  const eyeMovementY = Math.sin(angle) * eyeMovementRange;

  pupils.forEach((pupil) => {
    const pupilBoundingBox = pupil.getBoundingClientRect();
    const pupilOffsetX = pupilBoundingBox.left + pupilBoundingBox.width / 2;
    const pupilOffsetY = pupilBoundingBox.top + pupilBoundingBox.height / 2;
    const pupilDeltaX = mouseX - pupilOffsetX;
    const pupilDeltaY = mouseY - pupilOffsetY;
    const pupilAngle = Math.atan2(pupilDeltaY, pupilDeltaX);
    const pupilDistance = Math.min(
      Math.sqrt(pupilDeltaX * pupilDeltaX + pupilDeltaY * pupilDeltaY),
      boundingBox.width / 4
    ); // Limitar el movimiento al radio del ojo

    const pupilMovementX = Math.cos(pupilAngle) * pupilDistance;
    const pupilMovementY = Math.sin(pupilAngle) * pupilDistance;

    pupil.style.transition = "transform 0.2s ease"; // Aplicar una transición suave
    pupil.style.transform = `translate(${Math.min(
      Math.max(pupilMovementX, -eyeMovementRange),
      eyeMovementRange
    )}px, ${Math.min(
      Math.max(pupilMovementY, -eyeMovementRange),
      eyeMovementRange
    )}px)`; // Mover los iris limitando su movimiento al radio del ojo
  });

  eyes.style.transition = "transform 0.2s ease"; // Aplicar una transición suave
  eyes.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`; // Mover los ojos
}
