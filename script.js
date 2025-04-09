/**
 * Quiz: 15 Fragen zur Persönlichen Philosophie
 * Die Antworten reflektieren vier Kategorien: 
 *  - Optimistischer Nihilismus, 
 *  - Existenzialismus,
 *  - Absurdismus und
 *  - Pessimistischer Nihilismus.
 * 
 * Jede Frage ist so gestaltet, dass sie natürlich und menschlich klingt.
 */

const quizQuestions = [
  {
    question: "Wenn du an die Weite des Universums denkst, welche Empfindung durchströmt dich zuerst?",
    options: [
      { text: "Ich fühle mich befreit – als hätte ich unendliche Möglichkeiten!", category: "optimistic" },
      { text: "Es erinnert mich daran, dass ich selbst für meinen Lebenssinn verantwortlich bin.", category: "existential" },
      { text: "Ich kann nicht anders, als über diese unglaubliche Ironie zu schmunzeln.", category: "absurd" },
      { text: "Ich werde von einer tiefen Melancholie ergriffen und frage mich, ob alles vergeblich ist.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie reagierst du, wenn dir jemand vorschreibt, wie du leben sollst?",
    options: [
      { text: "Ich genieße die Freiheit, eigene Wege zu gehen, ohne fremde Regeln.", category: "optimistic" },
      { text: "Das spornt mich an, mir selbst einen festen Standpunkt zu erarbeiten.", category: "existential" },
      { text: "Ich finde an solchen Vorgaben einen urkomischen Widerspruch.", category: "absurd" },
      { text: "Es macht mich wütend, weil ich mich eingeengt fühle.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie gehst du mit dem Gedanken um, dass alles vielleicht keinen objektiven Sinn hat?",
    options: [
      { text: "Das beflügelt mich – ich kann meinen eigenen Sinn erschaffen!", category: "optimistic" },
      { text: "Es zwingt mich, ständig zu hinterfragen und bewusst zu leben.", category: "existential" },
      { text: "Ich lache darüber, weil die Absurdität des Ganzen fast schon komisch ist.", category: "absurd" },
      { text: "Es fühlt sich oft erdrückend an, als ob nichts wirklich zählt.", category: "pessimistic" }
    ]
  },
  {
    question: "Was empfindest du, wenn du an deinen eigenen Lebensweg denkst?",
    options: [
      { text: "Ich sehe darin die Möglichkeit, mein Leben ganz nach meinen Vorstellungen zu formen.", category: "optimistic" },
      { text: "Jeder Schritt ist eine bewusste Entscheidung, die mich prägt.", category: "existential" },
      { text: "Manchmal erscheint es mir fast wie ein absurder Zufall, den ich nicht ganz verstehe.", category: "absurd" },
      { text: "Es macht mich unsicher und lässt mich an der Richtigkeit meiner Entscheidungen zweifeln.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie fühlst du dich in Momenten, in denen alles scheinbar schief geht?",
    options: [
      { text: "Ich sehe sie als Herausforderungen, die mir neue Perspektiven eröffnen.", category: "optimistic" },
      { text: "Ich nehme sie als Aufforderung, mein innerstes Selbst zu erforschen.", category: "existential" },
      { text: "Ich kann über den unerwarteten Wahnsinn im Leben nur schmunzeln.", category: "absurd" },
      { text: "Es überwältigt mich oft und ich verliere den Glauben an Besserung.", category: "pessimistic" }
    ]
  },
  {
    question: "Wenn du über die Regeln und Normen unserer Gesellschaft nachdenkst, was kommt dir in den Sinn?",
    options: [
      { text: "Ich sehe sie als Ausgangspunkt, von dem ich meine eigene Freiheit entfalten kann.", category: "optimistic" },
      { text: "Sie fordern mich heraus, meine eigene Identität zu formen.", category: "existential" },
      { text: "Die Widersprüchlichkeit dieser Normen erscheint mir fast schon zum Schmunzeln.", category: "absurd" },
      { text: "Ich empfinde sie oft als erdrückende Ketten, die mich einschränken.", category: "pessimistic" }
    ]
  },
  {
    question: "Welcher Gedanke begleitet dich, wenn du über die Vergänglichkeit des Lebens nachdenkst?",
    options: [
      { text: "Ich feiere die Schönheit des Augenblicks und alles, was möglich ist.", category: "optimistic" },
      { text: "Jeder Moment ist eine Entscheidung – das spornt mich an, bewusst zu leben.", category: "existential" },
      { text: "Manchmal wirkt die Vergänglichkeit so absurd, dass ich darüber lachen muss.", category: "absurd" },
      { text: "Ich werde traurig, weil die Endlichkeit alles oft sinnlos erscheinen lässt.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie stehst du zu der Vorstellung, dass Kunst deinem Leben Sinn verleihen kann?",
    options: [
      { text: "Kunst ist für mich der ultimative Ausdruck von Freiheit und Kreativität.", category: "optimistic" },
      { text: "Sie ist ein Spiegel meiner inneren Suche und existenziellen Fragen.", category: "existential" },
      { text: "Manchmal ist die Art, wie Kunst uns berührt, so absurd und unerwartet.", category: "absurd" },
      { text: "Ohne feste Werte fühle ich mich oft, als ob selbst die Kunst leer wirkt.", category: "pessimistic" }
    ]
  },
  {
    question: "Was denkst du, wenn du an unvorhersehbare Zufälle in deinem Alltag denkst?",
    options: [
      { text: "Ich genieße die Spontaneität und sehe darin immer neue Chancen.", category: "optimistic" },
      { text: "Zufälle erinnern mich daran, wie sehr ich für meinen eigenen Weg verantwortlich bin.", category: "existential" },
      { text: "Diese Zufälle wirken manchmal so skurril, dass sie fast komisch erscheinen.", category: "absurd" },
      { text: "Ich fühle mich oft ausgeliefert und frage mich, ob es überhaupt einen Plan gibt.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie reagierst du, wenn du auf kritische Lebensphasen stößt?",
    options: [
      { text: "Ich sehe sie als Chance, mein Innerstes zu entdecken und zu wachsen.", category: "optimistic" },
      { text: "In diesen Momenten treffe ich bewusste Entscheidungen, die mich prägen.", category: "existential" },
      { text: "Manchmal erscheint mir das ganze Drama so absurd, dass ich nur noch staunen kann.", category: "absurd" },
      { text: "Kritische Phasen machen mich oft resigniert und kraftlos.", category: "pessimistic" }
    ]
  },
  {
    question: "Welcher Aspekt deines Alltags inspiriert dich am meisten?",
    options: [
      { text: "Die täglichen kleinen Wunder, die mir neue Energie schenken.", category: "optimistic" },
      { text: "Die Möglichkeit, durch eigene Entscheidungen meinen Lebensweg zu gestalten.", category: "existential" },
      { text: "Die oft skurrile Natur des Alltags, die mich zum Schmunzeln bringt.", category: "absurd" },
      { text: "Das scheinbar endlose Trostlos-Sein, das mich manchmal erdrückt.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie erlebst du die Suche nach einem tieferen Sinn im Leben?",
    options: [
      { text: "Ich liebe es, meinen eigenen Weg zu entdecken und zu formen.", category: "optimistic" },
      { text: "Für mich ist sie eine lebenswichtige Aufgabe, die mich jeden Tag fordert.", category: "existential" },
      { text: "Manchmal finde ich es geradezu komisch, dass ich überhaupt danach suche.", category: "absurd" },
      { text: "Diese Suche erinnert mich oft an eine endlose Leere, die mich belastet.", category: "pessimistic" }
    ]
  },
  {
    question: "Wenn du an dein Zukunftsbild denkst, welches Gefühl überwiegt?",
    options: [
      { text: "Optimismus – es warten unzählige unentdeckte Möglichkeiten auf mich.", category: "optimistic" },
      { text: "Die Gewissheit, dass meine Entscheidungen meinen Weg bestimmen.", category: "existential" },
      { text: "Das Wissen, dass sich das Ganze manchmal absurd zum Besten wendet.", category: "absurd" },
      { text: "Ein Gefühl der Unsicherheit, das mir den Blick auf eine helle Zukunft verwehrt.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie reagierst du, wenn du das Gefühl hast, keiner würde deine Sichtweise verstehen?",
    options: [
      { text: "Ich genieße es, mich von der Masse abzuheben und selbst zu leuchten.", category: "optimistic" },
      { text: "Ich nehme es als Herausforderung, meinen Standpunkt noch klarer zu definieren.", category: "existential" },
      { text: "Das bringt mich oft zum Nachdenken – und gelegentlich auch zum Lachen über die Ironie.", category: "absurd" },
      { text: "Ich fühle mich missverstanden und ziehe mich manchmal in meine eigene Welt zurück.", category: "pessimistic" }
    ]
  },
  {
    question: "Wie beschreibt dein Herz deinen Umgang mit den dunklen Seiten des Lebens?",
    options: [
      { text: "Ich finde oft im Schatten die versteckten Schätze und Chancen.", category: "optimistic" },
      { text: "Ich setze mich intensiv mit diesen Seiten auseinander, um daraus zu wachsen.", category: "existential" },
      { text: "Die Dunkelheit hat auch einen gewissen absurden Charme, der mich manchmal fasziniert.", category: "absurd" },
      { text: "Die düsteren Momente belasten mich und lassen mich an der Schönheit des Lebens zweifeln.", category: "pessimistic" }
    ]
  }
];

// Index und Score-Objekt
let currentQuestionIndex = 0;
const scores = {
  optimistic: 0,
  existential: 0,
  absurd: 0,
  pessimistic: 0
};

// Referenzen auf HTML-Elemente
const quizContent = document.getElementById('quizContent');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const resultContainer = document.getElementById('resultContainer');

/**
 * Zeigt die aktuelle Frage inkl. zufällig sortierter Antwortoptionen an.
 */
function showQuestion(index) {
  quizContent.innerHTML = "";
  nextButton.disabled = true;
  
  const currentQuestion = quizQuestions[index];
  
  // Frage-Block
  const questionElem = document.createElement('div');
  questionElem.classList.add('question');
  
  const questionText = document.createElement('p');
  questionText.classList.add('question-text');
  questionText.innerText = `Frage ${index + 1} von ${quizQuestions.length}: ${currentQuestion.question}`;
  questionElem.appendChild(questionText);
  
  // Optionen-Liste
  const optionsList = document.createElement('ul');
  optionsList.classList.add('options');
  // Mische die Optionen zufällig
  const shuffledOptions = currentQuestion.options.sort(() => Math.random() - 0.5);
  shuffledOptions.forEach((option) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    input.type = "radio";
    input.name = "question";
    input.value = option.category;
    input.addEventListener('change', () => {
      nextButton.disabled = false;
    });
    
    label.appendChild(input);
    label.appendChild(document.createTextNode(option.text));
    li.appendChild(label);
    optionsList.appendChild(li);
  });
  
  questionElem.appendChild(optionsList);
  quizContent.appendChild(questionElem);
  
  updateProgressBar(index);
}

/**
 * Aktualisiert die Fortschrittsanzeige.
 */
function updateProgressBar(index) {
  const progressPercent = Math.round((index / quizQuestions.length) * 100);
  progressBar.style.width = progressPercent + "%";
}

/**
 * Bewertet die Antworten und liefert ein persönliches, differenziertes Ergebnis in drei Sätzen.
 */
function showResult() {
  // Ermittlung der dominanten Kategorie
  let topCategory = "";
  let maxScore = 0;
  for (const category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      topCategory = category;
    }
  }
  
  // Bei mehreren Kategorien mit gleichem Score, kombiniere sie
  const tieCategories = Object.keys(scores).filter(cat => scores[cat] === maxScore);
  let resultText = "";
  if (tieCategories.length > 1) {
    resultText = "Deine Antworten spiegeln ein facettenreiches Bild wieder: Du vereinst Elemente aus ";
    resultText += tieCategories.map(c => {
      switch(c) {
        case "optimistic": return "optimistischem Nihilismus";
        case "existential": return "existenzialistischem Denken";
        case "absurd": return "absurdem Humor";
        case "pessimistic": return "pessimistischer Grundhaltung";
      }
    }).join(" und ");
    resultText += ". ";
    resultText += "Diese bunte Mischung zeigt, dass du das Leben in all seinen Widersprüchen siehst – und womöglich noch mehr als das.";
  } else {
    // Nur eine dominierende Kategorie
    switch(topCategory) {
      case "optimistic":
        resultText = "Du tendierst zu einem optimistischen Nihilismus: Die Freiheit, deinen eigenen Sinn zu kreieren, erfüllt dich mit Energie. Gleichzeitig erkennst du, dass in jeder Lage ein Lichtstrahl liegen kann, selbst wenn das Universum an sich neutral ist. So meisterst du Herausforderungen mit einer positiven Grundhaltung.";
        break;
      case "existential":
        resultText = "Deine Antworten deuten auf einen existenzialistischen Geist hin: Du bist bereit, die Verantwortung für dein Leben und deinen Sinn zu übernehmen. Dir ist bewusst, dass jede Entscheidung dich formt und dein Selbst ausmacht. Dieser bewusste Umgang mit Freiheit und Verantwortung prägt deine Lebensphilosophie deutlich.";
        break;
      case "absurd":
        resultText = "Du lebst mit einem Hauch von Absurdismus: Du erkennst die Widersprüchlichkeiten und Absurditäten des Lebens und begegnest ihnen oft mit Humor. So kannst du sogar in ernsten Situationen das Merkwürdige sehen und daraus Energie schöpfen. Dein Blick auf die Welt ist frei von starren Erwartungen – und genau das inspiriert dich.";
        break;
      case "pessimistic":
        resultText = "Deine Tendenz zeigt sich im pessimistischen Nihilismus: Die Leere des Daseins und das Fehlen eines vorgegebenen Sinns belasten dich spürbar. Gleichzeitig suchst du nach Ankern, die dir Halt geben könnten, selbst wenn du oft an ihnen zweifelst. In dieser Auseinandersetzung liegt jedoch auch das Potenzial, deinen eigenen Weg zu finden.";
        break;
      default:
        resultText = "Deine Antworten ergeben ein faszinierend komplexes Bild – du schöpfst wahrscheinlich aus unterschiedlichen Denkrichtungen und erschaffst damit deine ganz eigene Philosophie.";
    }
  }
  
  resultContainer.innerHTML = `<h2>Dein persönliches Ergebnis:</h2><p>${resultText}</p>`;
  resultContainer.classList.remove('hidden');
  quizContent.classList.add('hidden');
  
  // Entferne den Button komplett, damit man nicht mehr weiterdrückt
  nextButton.remove();
  
  // Fortschrittsleiste auf 100%
  progressBar.style.width = "100%";
}

/**
 * Event-Listener: Beim Klick auf den "Weiter"-Button wird die aktuelle Antwort ausgewertet
 * und die nächste Frage geladen oder, falls alle Fragen beantwortet wurden, das Ergebnis gezeigt.
 */
nextButton.addEventListener('click', () => {
  // Auswertung der ausgewählten Antwort
  const selectedOption = document.querySelector('input[name="question"]:checked');
  if (selectedOption) {
    const category = selectedOption.value;
    scores[category]++;
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
});

// Starte das Quiz
showQuestion(currentQuestionIndex);
