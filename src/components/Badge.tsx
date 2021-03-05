import { ReactNode } from "react";
import styles from '../styles/components/Badge.module.css';

interface BadgeProps {
  children: ReactNode;
  tech: string;
}

export function Badge({children, ...rest}: BadgeProps) {
  const {tech} = rest;
  return (
    <div className={styles.badge}>
      <span className={`${tech === 'nodejs' ? styles.nodejs 
        : tech === 'reactjs' ? styles.reactjs : styles.nextjs}`}
      >
        {children}
      </span>
    </div>
  )  
}