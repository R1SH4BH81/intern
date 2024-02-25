import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted content:', content);
    console.log('Uploaded file:', file);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (option: string) => {
    // Handle menu option click here
    console.log('Menu option clicked:', option);
    // For example, you can set the content based on the option clicked
    setContent(`You selected the "${option}" option.`);
    // Close the menu
    setShowMenu(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hyperly Content Creation Dashboard</h1>
      <div className={styles.dropdown}>
       <img className={styles.user} src="https://th.bing.com/th/id/OIP._LotbG1SgjcwdzpQ4pBu7QHaHa?w=512&h=512&rs=1&pid=ImgDetMain" ></img> <button className={styles.menuButton1} onClick={toggleMenu}>share with ></button>
        {showMenu && (
          <div className={styles.dropdownContent}>
            <button className={styles.menuOption} onClick={() => handleMenuClick('Anyone')}>Anyone</button>
            <button className={styles.menuOption} onClick={() => handleMenuClick('Connections')}>Connections</button>
            <button className={styles.menuOption} onClick={() => handleMenuClick('Groups')}>Groups</button>
          </div>
        )}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={handleContentChange}
          placeholder="Write your LinkedIn post here..."
          rows={4}
          cols={50}
        />
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonGroup}>
            <label htmlFor="fileInput" className={styles.fileInputLabel}>
              <span className={styles.plusIcon}>+</span>
             
            </label>
            <button className={styles.button} type="submit">Submit</button>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.menuButton} onClick={toggleMenu}>Menu</button>
            {showMenu && (
              <div className={styles.dropdownContent}>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Schedule')}>Schedule</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Poll')}>Poll</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Templates')}>Templates</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Celebrate')}>Celebrate</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Job')}>Job</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Documents')}>Documents</button>
                <button className={styles.menuOption} onClick={() => handleMenuClick('Services')}>Services</button>
                {/* Add more menu options as needed */}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
