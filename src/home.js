import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");

  const handleNextStep = () => {
    if (step === 1 && name.trim()) setStep(2);
    if (step === 2 && answer) setStep(3);
  };

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 10000);
      return () => clearTimeout(timer); // Clean up the timeout on unmount
    }
  }, [step]);

  return (
    <div style={styles.container}>
      {step === 1 && (
        <div style={styles.card}>
          <h1>Welcome, 5B student!</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleNextStep} style={styles.button}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div style={styles.card}>
          <h2>
            Hi {name}, do you still remember to study during this holiday?
          </h2>
          <div style={styles.buttonContainer}>
            <button
              onClick={() => {
                setAnswer("yes");
                handleNextStep();
              }}
              style={styles.button}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setAnswer("no");
                handleNextStep();
              }}
              style={styles.button}
            >
              No
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={styles.card}>
          <h2>Mr. Getser has a message for you...</h2>
          <div style={styles.loader}></div>
        </div>
      )}

      {step === 4 && (
        <div style={styles.card}>
          {answer === "yes" ? (
            <h2>Good job 👍{name}! </h2>
          ) : (
            <h2>Hmmm  😡, remember to study {name}!</h2>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "90%",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  loader: {
    border: "4px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "4px solid #3498db",
    width: "40px",
    height: "40px",
    margin: "20px auto",
    animation: "spin 2s linear infinite",
  },
};

