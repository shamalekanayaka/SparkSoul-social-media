import React from "react";
import { Link, useParams } from "react-router-dom";


const Result = () => {
  const { mbtiType, username } = useParams();

  // Dummy data for MBTI types and descriptions
  const mbtiTypesData = {
    INFJ: "The Counselor. Creative and determined, often seen as complex and deep.",
    ENFJ: "The Teacher. Warm, empathetic, and responsible, often seen as natural leaders.",
    INFP: "The Healer. Poetic, kind, and altruistic, always eager to help a good cause.",
    ENFP: "The Champion. Enthusiastic, creative, and sociable, free-spirited and independent.",
    INTJ: "The Mastermind. Innovative, strategic, and independent, always sees the big picture.",
    ENTJ: "The Commander. Bold, imaginative, and strong-willed, excellent at brainstorming.",
    INTP: "The Architect. Logical, precise, and analytical, enjoys exploring new ideas.",
    ENTP: "The Visionary. Smart, curious, and outgoing, loves debating and original thinking.",
    ISFJ: "The Protector. Practical, loyal, and gentle, sensitive to the needs of others.",
    ESFJ: "The Provider. Caring, social, and conscientious, reliable and eager to help.",
    ISTJ: "The Inspector. Responsible, organized, and decisive, dedicated and strong-willed.",
    ESTJ: "The Supervisor. Practical, realistic, and matter-of-fact, decisive and quickly moves to implement decisions.",
    ISFP: "The Composer. Gentle, sensitive, and compassionate, enjoys creating and pleasing others.",
    ESFP: "The Performer. Spontaneous, energetic, and enthusiastic, lives in the moment.",
    ISTP: "The Craftsman. Independent, practical, and adaptable, excels in understanding and building things.",
    ESTP: "The Dynamo. Energetic, outgoing, and curious, loves action and challenges.",
  };

  const description = mbtiTypesData[mbtiType] || "Invalid MBTI type";

  return (
    <div className="result">
      <h1>Congratulations, {username}!</h1>
      <h3>Your MBTI Personality Type: {mbtiType}</h3>
      <p>{description}</p>
        <Link to={'/Login'}>
            <button className="home">Login</button>
        </Link>
    </div>
  );
};

export default Result;
