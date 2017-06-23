import React from 'react';
import Button from './components/Button';
import s from './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Testing React with Jest, Enzyme, Chai, and Sinon',
      subHeader: 'Wesley Chiang',
      clicked: false,
      message: 'Lorem dicta repellendus error quaerat voluptates? Autem incidunt eius sequi consectetur animi odit corrupti Debitis repudiandae praesentium et tempore voluptatum ducimus quae! Minima ipsum dolor ab cumque unde Quaerat deleniti.',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.headerContainer}>
          <h1 className={s.header}>{this.state.header}</h1>
          <h2 className={s.subHeader}>{`By: ${this.state.subHeader}`}</h2>
        </div>
        <div className={s.section}>
          <Button handleClick={this.handleClick} buttonContent="Click Me" />
        </div>
        <div className={s.section}>
          {
            this.state.clicked &&
            <div className={s.messageContainer}>
              { this.state.message }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
