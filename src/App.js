import React, { Component } from "react";
import { Button } from "./Components/Buttons/Buttons.jsx";
import { Statistic } from "./Components/Statistic/Statistic.jsx";
import { Notification } from "./Components/Notification/Notification.jsx";
import { Section } from "./Components/Section/Section.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Button
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {good || neutral || bad > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default App;
