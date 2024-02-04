document.getElementById("validateBtn").addEventListener("click", function () {
  const answers = {
    q1: "b",
    q2: "c",
    q3: "a",
    q4: "a",
    q5: "b",
  };

  let score = 0;
  let correctAnswers = "";

  Object.keys(answers).forEach((question) => {
    const selectedAnswer = document.querySelector(
      `input[name="${question}"]:checked`
    );
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      if (userAnswer === answers[question]) {
        score++;
        correctAnswers += `\nRespuesta correcta para la pregunta ${question}: ${userAnswer}`;
      } else {
        correctAnswers += `\nRespuesta incorrecta para la pregunta ${question}. La respuesta correcta es ${answers[question]}`;
      }
    }
  });

  alert(
    `Tu puntuación es: ${score}/${Object.keys(answers).length}${correctAnswers}`
  );
});
