document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove, { passive: false });

function handleMouseMove(event) {
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const pupils = document.querySelectorAll(".pupil");
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  moveEyes(face, eyes, pupils, mouseX, mouseY);
  changeBackgroundColor(mouseX, mouseY);
}

function handleTouchMove(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento táctil (scroll)
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const pupils = document.querySelectorAll(".pupil");
  let mouseX = event.touches[0].clientX;
  let mouseY = event.touches[0].clientY;

  moveEyes(face, eyes, pupils, mouseX, mouseY);
  changeBackgroundColor(mouseX, mouseY);
}

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove, { passive: false });

function handleMouseMove(event) {
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const pupils = document.querySelectorAll(".pupil");
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  moveEyes(face, eyes, pupils, mouseX, mouseY);
  changeBackgroundColor(mouseX, mouseY);
}

function handleTouchMove(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del evento táctil (scroll)
  const face = document.getElementById("face");
  const eyes = document.querySelector(".eyes");
  const pupils = document.querySelectorAll(".pupil");
  let mouseX = event.touches[0].clientX;
  let mouseY = event.touches[0].clientY;

  moveEyes(face, eyes, pupils, mouseX, mouseY);
  changeBackgroundColor(mouseX, mouseY);

  // Agregar vibración en dispositivos móviles
  navigator.vibrate(50); // Vibrar durante 50 milisegundos
}

function moveEyes(face, eyes, pupils, mouseX, mouseY) {
  const boundingBox = face.getBoundingClientRect();
  const offsetX = boundingBox.left + boundingBox.width / 2;
  const offsetY = boundingBox.top + boundingBox.height / 2;
  const eyeMovementRange = 18; // Rango de movimiento de los ojos

  // Calcular el ángulo relativo al centro del rostro
  const deltaX = mouseX - offsetX;
  const deltaY = mouseY - offsetY;
  const angle = Math.atan2(deltaY, deltaX);

  // Calcular el movimiento de los ojos basado en el ángulo
  const eyeMovementX = Math.cos(angle) * eyeMovementRange;
  const eyeMovementY = Math.sin(angle) * eyeMovementRange;

  // Mover los ojos
  eyes.style.transition = "transform 0.2s ease";
  eyes.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;

  pupils.forEach((pupil) => {
    const pupilBoundingBox = pupil.getBoundingClientRect();
    const pupilOffsetX = pupilBoundingBox.left + pupilBoundingBox.width / 2;
    const pupilOffsetY = pupilBoundingBox.top + pupilBoundingBox.height / 2;
    const pupilDeltaX = mouseX - pupilOffsetX;
    const pupilDeltaY = mouseY - pupilOffsetY;
    const pupilAngle = Math.atan2(pupilDeltaY, pupilDeltaX);

    // Calcular el ángulo relativo al centro del ojo
    const relativeAngle = pupilAngle - angle;

    // Calcular la distancia del ratón al centro del ojo
    const pupilDistance = Math.min(
      Math.sqrt(pupilDeltaX * pupilDeltaX + pupilDeltaY * pupilDeltaY),
      boundingBox.width / 4
    );

    // Calcular el movimiento de la pupila
    const pupilMovementX = Math.cos(relativeAngle) * pupilDistance;
    const pupilMovementY = Math.sin(relativeAngle) * pupilDistance;

    // Aplicar el movimiento limitando al rango del ojo
    pupil.style.transition = "transform 0.2s ease";
    pupil.style.transform = `translate(${Math.min(
      Math.max(pupilMovementX, -eyeMovementRange),
      eyeMovementRange
    )}px, ${Math.min(
      Math.max(pupilMovementY, -eyeMovementRange),
      eyeMovementRange
    )}px)`;
  });
}

function changeBackgroundColor(mouseX, mouseY) {
  const { innerWidth, innerHeight } = window;
  const horizontalMidpoint = innerWidth / 2;
  const verticalMidpoint = innerHeight / 2;
  let color;

  if (mouseX < horizontalMidpoint && mouseY < verticalMidpoint) {
    color = "red";
  } else if (mouseX >= horizontalMidpoint && mouseY < verticalMidpoint) {
    color = "black";
  } else if (mouseX < horizontalMidpoint && mouseY >= verticalMidpoint) {
    color = "blue";
  } else {
    color = "yellow";
  }

  document.body.style.backgroundColor = color;
}
