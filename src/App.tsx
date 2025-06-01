import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Music } from "./components/Music/Music";
import { Videos } from "./components/Videos/Videos";
import { Shows } from "./components/Shows/Shows";
import { Shop } from "./components/Shop/Shop";
import { MailingList } from "./components/MailingList/MailingList";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Music />
      <Videos />
      <Shows />
      <Shop />
      <MailingList />
      <Contact />
    </div>
  );
}

export default App;
