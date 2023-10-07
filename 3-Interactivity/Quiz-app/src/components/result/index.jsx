import styles from '../../styles/components/result.module.css';
import Button from '../shared/button';
import UserDetails from '../userDetails';

export default function Result({
  userInfo,
  score,
  message,
  handleViewState,
  resetQuizState,
}) {
  return (
    <div className={styles['result']}>
      <h3>Result</h3>

      <div className={styles['result_info']}>
        <div className={styles['user_details']}>
          <p>User details:</p>
          <UserDetails {...userInfo} />
        </div>
        <div className={styles['score']}>
          <p>Score:</p>
          <div className={styles[score > 7 ? 'success' : 'failure']}>
            <h2>{score}/15</h2>
          </div>
          <p
            className={`${styles['message']} ${
              styles[score > 7 ? 'success' : 'failure']
            } `}
          >
            {message}
          </p>
        </div>
      </div>

      <div className={styles['action_buttons']}>
        <Button
          onClick={() => {
            resetQuizState();
            handleViewState('collectUserInfo');
          }}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
