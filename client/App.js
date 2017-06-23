import React from 'react';
import Button from './components/Button';
import Page from './components/Page';
import s from './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Write better React and Javascript code with ESLint, Jest, and Enzyme',
      subHeader: 'Wesley Chiang',
      clicked: false,
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
            <Page />
          }
        </div>
      </div>
    );
  }
}

export default App;
