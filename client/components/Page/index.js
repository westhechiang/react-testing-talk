import React from 'react';
import s from './style.scss';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          id: 0,
          label: 'ESLint',
          definition: 'Linter',
          description: 'ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.',
          style: `${s.subject} ${s.eslint}`,
        },
        {
          id: 1,
          label: 'Jest',
          definition: 'Test Runner',
          description: 'Jest is a test runner by Facebook. Its main goal is to provide an integrated "zero-configuration" experience for developers.',
          style: `${s.subject} ${s.jest}`,
        },
        {
          id: 2,
          label: 'Enzyme',
          definition: 'Test Utility',
          description: 'Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components\' output.',
          style: `${s.subject} ${s.enzyme}`,
        },
      ],
    };
  }

  render() {
    return (
      <div className={s.container}>
        {
          this.state.subjects.map(subject => (
            <div className={s.subjectContainer}>
              <div className={subject.style} key={subject.id}>
                <div className={s.label}>
                  { subject.label }:
                </div>
                <div className={s.definition}>
                  { subject.definition }
                </div>
              </div>
              <p className={s.description}>{ subject.description }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Page;
