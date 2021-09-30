import React from 'react';

import styles from './styles.module.scss';

interface Props {
  title: string;
  question: string;
}

export function SurveyQuestions({ title, question }: Props) {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <p className={styles.question}>{question}</p>
      </div>
    </>
  );
}
