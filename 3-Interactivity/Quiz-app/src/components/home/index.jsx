import styles from '../../styles/components/home.module.css';
import Button from '../shared/button';
import Input from '../shared/input';

export default function Home({ handleViewState, handleUserForm }) {
  const handleSubmit = e => {
    e.preventDefault();

    /**
     * For now, we need just to prevent
     * the default behavior of the form submission (Reload the page).
     *
     * We will not submit the form
     */
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
            onChange={(e) => handleUserForm(e, 'fullName')}
            label={'Full name'}
            placeholder={'Enter your full name'}
          />
          <Input
            label={'Email adress'}
            onChange={(e) => handleUserForm(e, 'email')}
            placeholder={'Enter your email adress'}
          />
        </div>
        <div style={styles['submit_button']}>
          <Button onClick={() => handleViewState('quiz')}>Get started</Button>
        </div>
      </form>
    </div>
  );
}
