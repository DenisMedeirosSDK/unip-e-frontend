import React, { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  title: string;
  question: string;
  children?: ReactNode;
}

export function SurveyQuestions({ title, question, children }: Props) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <p className={styles.question}>{question}</p>
      </div>
      {children}
    </div>
  );
}
