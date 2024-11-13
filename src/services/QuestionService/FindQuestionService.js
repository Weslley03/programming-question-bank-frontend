import axios from "axios";

const baseUrl = 'http://localhost:8000';

export async function findAllQuestions() {
  const response = await axios.get(`${baseUrl}/question-findall`);
  return response.data.QuestionProps;
};