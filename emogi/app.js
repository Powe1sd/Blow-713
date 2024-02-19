document.addEventListener("mousemove", handleMove);
document.addEventListener("touchmove", handleMove, { passive: false }); // Agregamos { passive: false } para poder prevenir el scroll

function handleMove(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento táctil (scroll)

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

  const eyeMovementRange = 10; // Rango de movimiento de los ojos

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

  const deltaX = mouseX - offsetX;
  const deltaY = mouseY - offsetY;
  const angle = Math.atan2(deltaY, deltaX);

  const eyeMovementX = Math.cos(angle) * eyeMovementRange;
  const eyeMovementY = Math.sin(angle) * eyeMovementRange;

  eyes.style.transition = "transform 0.2s ease"; // Aplicar una transición suave
  eyes.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`; // Mover los ojos
}
