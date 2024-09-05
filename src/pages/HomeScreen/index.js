import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslate } from "../../api";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export const results = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "What was the name of Sonic the Hedgehog&#039;s original human girlfriend?",
    correct_answer: "Madonna",
    incorrect_answers: ["Celeste", "Sierra", "Nina"],
  },
];

const HomeScreen = ({ navigation }) => {
  const { GenerateQuestions, question } = useTranslate();
  const [isCorrect, setIsCorrect] = useState(false);
  const [life, setLife] = useState([1, 2, 3]);
  const [stateGame, setStateGame] = useState("Próximo");
  const [generateNewQuestion, setGenerateNewQuest] = useState(false);
  const [level, setLevel] = useState(0);
  const [hits, setHitis] = useState(0);

  //question fixo

  useEffect(() => {
    console.log("entrou aqui, la ele");
    if (!isCorrect) {
      console.log("entrou aqui, la ele 2222");
      GenerateQuestions();
    }
  }, [generateNewQuestion]);

  useEffect(() => {
    life.length === 0
      ? setStateGame("Jogar Novamente")
      : setStateGame("Próximo");
  }, [life]);

  //codigo correto

  const currentQuestion = question[0];
  const options = currentQuestion
    ? [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    : [];

  const verificationAnswer = (answer) => {
    if (answer !== currentQuestion.correct_answer) {
      setLife((prevLife) => prevLife.slice(0, -1));
    } else {
      setHitis((prevHits) => prevHits + 1);
    }

    if (hits + 1 === 10) {
      setLevel((prevLevel) => prevLevel + 1);
      setHitis(0);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.fonewalls.com/wp-content/uploads/2023/05/Nature-4K-Wallpaper-2160x3840-280-768x1365.jpg",
      }}
      style={styles.background}
    >
      <>
        <View style={styles.overlay} />
        <View style={styles.dataUser}>
          <Text style={styles.title}>Level: {level}</Text>
          <Text style={styles.titleUP}>{hits}/10</Text>
          <View style={{ flexDirection: "row" }}>
            {life.map((e, index) => (
              <FontAwesome
                key={index}
                style={styles.heart}
                name="heart"
                size={24}
                color="red"
              />
            ))}
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Será que você acerta?</Text>

          {currentQuestion && (
            <Text
              style={{
                fontSize: 24,
                marginBottom: 30,
                color: "#333",
                textAlign: "center",
                display: life.length === 0 ? "none" : "inline",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 20,
                margin: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.1,
                shadowRadius: 15,
                elevation: 10,
                transform: [{ translateY: life.length === 0 ? 0 : -10 }],
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {currentQuestion.question}
            </Text>
          )}

          {options.map((option, i) => (
            <View
              key={`option_${i + 2}`}
              style={{
                width: "100%",
                paddingHorizontal: 20,
                display: life.length === 0 ? "none" : "flex",
              }}
            >
              <TouchableOpacity
                disabled={isCorrect === true ? true : false}
                onPress={() => {
                  verificationAnswer(option);
                  setIsCorrect(true);
                }}
                style={{
                  backgroundColor: isCorrect
                    ? option === currentQuestion.correct_answer
                      ? "#84B026"
                      : "#FF5F5D"
                    : "#3CA6A6",

                  padding: 15,
                  marginBottom: 10,
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            </View>
          ))}

          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              display: life.length !== 0 ? "inline" : "none",
            }}
          >
            <TouchableOpacity style={styles.optionButtonNext}>
              <Text
                style={styles.optionNext}
                onPress={() => {
                  setIsCorrect(false);

                  setGenerateNewQuest(!generateNewQuestion);

                  //função para rendrizar uma pergunta teste
                  //selectRandomQuestion();
                }}
              >
                Próximo
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              display: life.length === 0 ? "inline" : "none",
            }}
          >
            <TouchableOpacity style={styles.optionButtonNext}>
              <Text
                style={styles.optionNext}
                onPress={() => {
                  setLife([1, 2, 3]);
                  setIsCorrect(false);
                  setGenerateNewQuest(!generateNewQuestion);

                  //função para rendrizar uma pergunta teste
                  //selectRandomQuestion();
                }}
              >
                Iniciar um novo jogo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </ImageBackground>
  );
};

export default HomeScreen;
