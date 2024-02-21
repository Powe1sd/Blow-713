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
  const faceCenterX = boundingBox.left + boundingBox.width / 2;
  const faceCenterY = boundingBox.top + boundingBox.height / 2;
  const eyeMovementRange = 33; // Aumentamos el rango de movimiento de los ojos
  const pupilMovementRange = 27; // Aumentamos el rango de movimiento de las pupilas

  // Calcular el ángulo y la distancia del ratón respecto al centro del rostro
  const deltaX = mouseX - faceCenterX;
  const deltaY = mouseY - faceCenterY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = Math.atan2(deltaY, deltaX);

  // Mover los ojos basados en el ángulo y la distancia
  const eyeMovementX = Math.cos(angle) * Math.min(distance, eyeMovementRange);
  const eyeMovementY = Math.sin(angle) * Math.min(distance, eyeMovementRange);

  // Limitar el movimiento vertical de los ojos cuando están hacia arriba
  const verticalLimit = Math.abs(deltaY) > eyeMovementRange ? 0.5 : 1;

  // Mover los ojos
  eyes.style.transition = "transform 0.2s ease";
  eyes.style.transform = `translate(${eyeMovementX}px, ${
    eyeMovementY * verticalLimit
  }px)`;

  pupils.forEach((pupil) => {
    const pupilBoundingBox = pupil.getBoundingClientRect();
    const eyeBoundingBox = eyes.getBoundingClientRect();

    // Calcular el centro de la pupila respecto al ojo
    const pupilCenterX =
      pupilBoundingBox.left + pupilBoundingBox.width / 2 - eyeBoundingBox.left;
    const pupilCenterY =
      pupilBoundingBox.top + pupilBoundingBox.height / 2 - eyeBoundingBox.top;

    // Calcular el ángulo y la distancia del ratón respecto al centro de la pupila
    const pupilDeltaX = mouseX - pupilCenterX;
    const pupilDeltaY = mouseY - pupilCenterY;
    const pupilDistance = Math.sqrt(
      pupilDeltaX * pupilDeltaX + pupilDeltaY * pupilDeltaY
    );

    // Calcular el movimiento de la pupila dentro de los límites del ojo
    const pupilAngle = Math.atan2(pupilDeltaY, pupilDeltaX);
    const pupilMovementX =
      Math.cos(pupilAngle) * Math.min(pupilDistance, pupilMovementRange);
    const pupilMovementY =
      Math.sin(pupilAngle) * Math.min(pupilDistance, pupilMovementRange);

    // Aplicar el movimiento limitando al rango del ojo
    pupil.style.transition = "transform 0.2s ease";
    pupil.style.transform = `translate(${pupilMovementX}px, ${pupilMovementY}px)`;
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
