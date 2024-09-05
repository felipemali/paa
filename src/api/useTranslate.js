import { useState } from "react";
import axios from "axios";
import he from "he";

export const useTranslate = () => {
  const [question, setQuestion] = useState([]);
  const [textt, setTextt] = useState("I'm Felipe and I'm 21 years old");
  const [resultTranslate, setResultTranslate] = useState("");

  const GenerateQuestions = () => {
    axios
      .get("https://opentdb.com/api.php?amount=1&category=15")
      .then(async (response) => {
        const result = response.data.results
          .filter(
            (quiz) =>
              Array.isArray(quiz.incorrect_answers) && quiz.type === "multiple"
          )
          .map((quiz) => ({
            category: quiz.category,
            type: quiz.type,
            difficulty: quiz.difficulty,
            question: he.decode(quiz.question),
            correct_answer: he.decode(quiz.correct_answer),
            incorrect_answers: quiz.incorrect_answers,
          }));
        translateQuestions(result, "PT-BR");
      });
  };

  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post("http://localhost:5000/translate", {
        text: text,
        target_lang: targetLanguage,
      });

      return response.data.translations[0].text;
    } catch (error) {
      console.error("Erro na tradução:", error);
      return text;
    }
  };

  const translateQuestions = async (questions, targetLanguage) => {
    const translatedQuestions = [];

    for (const question of questions) {
      const translatedQuestion = {
        ...question,
        question: await translateText(question.question, targetLanguage),
        correct_answer: await translateText(
          question.correct_answer,
          targetLanguage
        ),
        incorrect_answers: await Promise.all(
          question.incorrect_answers.map((answer) =>
            translateText(answer, targetLanguage)
          )
        ),
      };

      translatedQuestions.push(translatedQuestion);
    }

    // return translatedQuestions;
    setQuestion(translatedQuestions);
  };

  return {
    textt,
    resultTranslate,
    // getTextTranslate,
    question,
    GenerateQuestions,
    translateQuestions,
  };
};
