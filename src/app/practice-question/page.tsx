'use client';
import { useState } from 'react';

const question = {
  text: 'Was war am 8. Mai 1945?',
  answers: [
    'Ende des Zweiten Weltkriegs in Europa',
    'Tod Adolf Hitlers',
    'Wahl von Konrad Adenauer zum Bundeskanzler',
    'Beginn des Berliner Mauerbaus',
  ],
  correctIndex: 0,
};

export default function PracticeQuestion() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setShowResult(true);
  };

  return (
    <main className="max-w-xl mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl font-extrabold mb-8 text-blue-900 dark:text-blue-200 text-center">Practice Question</h1>
      <div className="mb-4">
        <p className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">{question.text}</p>
        <ul className="space-y-4">
          {question.answers.map((answer, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === question.correctIndex;
            let btnStyle =
              'w-full text-lg px-6 py-4 rounded-xl border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400';
            if (showResult && isSelected) {
              btnStyle += isCorrect
                ? ' bg-green-600 text-white border-green-700'
                : ' bg-red-600 text-white border-red-700';
            } else if (showResult && isCorrect) {
              btnStyle += ' bg-green-100 border-green-400 text-green-900';
            } else {
              btnStyle += ' bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900';
            }
            return (
              <li key={idx}>
                <button
                  className={btnStyle}
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                  tabIndex={0}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
        {showResult && selected !== null && (
          <div className="mt-8 text-center">
            {selected === question.correctIndex ? (
              <span className="text-green-700 dark:text-green-400 text-xl font-bold">Correct!</span>
            ) : (
              <span className="text-red-700 dark:text-red-400 text-xl font-bold">Incorrect. The correct answer is:<br /><span className="underline">{question.answers[question.correctIndex]}</span></span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
