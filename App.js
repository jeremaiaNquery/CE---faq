import React, { useState } from 'react';
import { Box } from '@wix/design-system';

// DynamicFAQAccordion Component
const DynamicFAQAccordion = ({ faqs }) => {
  return (
    <Box>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </Box>
  );
};

// FAQManager Component
const FAQManager = ({ faqs, onFaqsChange }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const addFaq = () => {
    if (newQuestion && newAnswer) {
      onFaqsChange([...faqs, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  return (
    <Box>
      <h2>Manage FAQs</h2>
      <input
        type="text"
        placeholder="New Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
      />
      <button onClick={addFaq}>Add FAQ</button>
    </Box>
  );
};

// Main App Component
const App = () => {
  const [faqs, setFaqs] = useState([
    { question: "What is your return policy?", answer: "We offer a 30-day return policy for all items." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to most countries worldwide." },
  ]);

  return (
    <div className="App">
      <h1>FAQ Application</h1>
      <DynamicFAQAccordion faqs={faqs} />
      <FAQManager faqs={faqs} onFaqsChange={setFaqs} />
    </div>
  );
};

export default App;
