"use client"
import React from 'react';
import styles from "@/styles/Learn.module.css"
import frontendData from "@/prompt/frontend.json"

const LearnComponent= () => {
  const [prompt, setPrompt] = React.useState('');
  const [completion, setCompletion] = React.useState('');

  const handlePrompt = async (selectData) => {
    setPrompt(selectData);
    setCompletion('Loading...');

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectData }),
      });

      const data = await response.json();
      setPrompt('');
      setCompletion(data.result.choices[0].text);
    } catch (error) {
      console.log(error);
      setCompletion('An error occurred while fetching data.');
    }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Learn Frontend with AI</h1>
      <h6 className={styles.desc}>{frontendData?.title}</h6>
      {frontendData?.list.map((data, i) => (
        <div
          key={i}
          className={styles.listItem}
          onClick={() => handlePrompt(data)}
        >
          {data}
        </div>
      ))}

      <div>Prompt: {prompt}</div>
      <div>
        Completion:{' '}
        {completion.split('\n').map((item, i) => (
          <div key={i}>{item}<br /></div>
        ))}
      </div>
    </div>
  );
};

export default LearnComponent;
