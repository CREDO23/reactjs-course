import { useState } from 'react';
import styles from '../../styles/components/home.module.css';
import Button from '../shared/button';
import Input from '../shared/input';

export default function Home({ setView, handleUserForm, userInfo }) {
  const [error, setError] = useState({
    fullName: '',
    email: '',
  });

  const resetErrors = () => {
    setError({
      fullName: '',
      email: '',
    });
  };

  const handleSubmit = e => {
    //Prevent default behavior
    e.preventDefault();

    //Reset errors
    resetErrors();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    /**
     * ^: Anchors the match to the start of the string.
     * [a-zA-Z0-9._%+-]+: Matches one or more characters that can be letters, digits, dots, underscores, percent signs, plus signs, or hyphens. This part represents the local part of the email address before the "@" symbol.
     * @: Matches the "@" symbol.
     * [a-zA-Z0-9.-]+: Matches one or more characters that can be letters, digits, dots, or hyphens. This part represents the domain name (excluding the top-level domain).
     * \.: Matches the dot before the top-level domain.
     * [a-zA-Z]{2,}: Matches at least two or more letters for the top-level domain (e.g., com, org, net).
     * $: Anchors the match to the end of the string.
     */

    const fullNameRegex = /^[a-zA-Z-']{3,} [a-zA-Z-' ]{2,}$/;
    /**
     * ^: Anchors the match to the start of the string.
     * [a-zA-Z-' ]{4,}: Matches at least 4 characters that can be lowercase letters, uppercase letters, hyphens, or spaces. The {4,} quantifier specifies that there should be at least 4 characters, so with the initial uppercase letter, you have a total of at least 5 characters.
     * $: Anchors the match to the end of the string.
     */

    const isValidEmail = emailRegex.test(userInfo.email);
    const isValidFullName = fullNameRegex.test(userInfo.fullName);

    if (isValidEmail && isValidFullName) {
      setView('quiz');
    } else {
      if (!isValidFullName) {
        setError(prevE => {
          return {
            ...prevE,
            fullName: 'Please enter a valid full name e.g: John Doe',
          };
        });
      }

      if (!isValidEmail) {
        setError(prevE => {
          return {
            ...prevE,
            email:
              'Please enter a valid email address e.g john.doe@example.com',
          };
        });
      }
    }
  };
  return (
    <div className={styles['home']}>
      <div className={styles['intro']}>
        <h3>React Quiz</h3>
        <p>
          Test your knowledge of React by answering the questions we've
          specially selected for you. <br /> <br />{' '}
          <b>It's fun and it's free</b>.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles['form']}>
        <div className={styles['inputs_form']}>
          <Input
            onChange={e => handleUserForm(e, 'fullName')}
            label={'Full name'}
            placeholder={'Enter your full name'}
            value={userInfo.fullName}
            error={error.fullName}
          />
          <Input
            label={'Email adress'}
            onChange={e => handleUserForm(e, 'email')}
            placeholder={'Enter your email adress'}
            value={userInfo.email}
            error={error.email}
          />
        </div>
        <div style={styles['submit_button']}>
          <Button>Get started</Button>
        </div>
      </form>
    </div>
  );
}
