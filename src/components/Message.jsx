import styles from './Message.module.css';

export function Message(props) {

  return (
    <div className='Message'>
      <header className='Message-header'>
        My First React Message
        <h1 className={styles.color}>Hi, Guys!</h1>
        <h3>My name is <span className={styles.name}>Yaroslav</span></h3>
        <p>{props.title}</p>
      </header>
    </div >
  )
}