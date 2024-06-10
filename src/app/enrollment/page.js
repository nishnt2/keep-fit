'use client';

import EnrollmentForm from '../components/Form/enrollmentForm.jsx';
import styles from './page.module.css';
export default function Registration() {
  return (
    <div className={styles.main}>
      <EnrollmentForm />
    </div>
  );
}
