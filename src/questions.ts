// First question: text input — fill in correctAnswers with accepted date formats
// Subsequent questions: choice — correctAnswer is the index (0-based) of the right option
type Question = {
  id?: number;
  type: "text" | "choice";
  question: string;
  options?: string[];
  correctAnswer: string | number;
}
export const QUESTIONNAIRE: Question[] = [
  {
    id: 1,
    type: "text",
    question: "When did we become boyfriend and girlfriend?",
    correctAnswer: "2023-05-23",
  },
  {
    id: 2,
    type: "choice",
    question: "When did we have our first kiss?",
    options: ["August 2019", "February 2023", "March 2023", "April 2023"],
    correctAnswer: 0,
  },
  {
    id: 3,
    type: "text",
    question: "when did Bronto come into our lives?",
    correctAnswer: "2023-12-24",
  },
  {
    id: 4,
    type: "choice",
    question: "when did Dantino come into our lives?",
    options: ["14 December 2024", "15 December 2024", "16 December 2024", "17 December 2024"],
    correctAnswer: 1,
  },
  {
    id: 5,
    type: "choice",
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your laugh", "Your honesty", "Your kindness"],
    correctAnswer: 2,
  },
]

export const VALENTINE_QUESTION = {
  type: "choice",
  question: "Will you be my Valentine?",
  options: ["Yes!", "Of course!"],
  correctAnswer: -1, // -1 = any option is correct
}
