'use client';

import RegistrationForm from '../components/Form/registrationForm';
import styles from './page.module.css';
export default function Registration() {
  return (
    <div className={styles.main}>
      <RegistrationForm />
    </div>
  );
}
