import { useState } from "react";
import { Button } from "./Components/Buttons/Buttons.jsx";
import { Statistic } from "./Components/Statistic/Statistic.jsx";
import { Notification } from "./Components/Notification/Notification.jsx";
import { Section } from "./Components/Section/Section.jsx";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title="Please leave feedback">
        <Button options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      {good || neutral || bad > 0 ? (
        <Section title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
}
