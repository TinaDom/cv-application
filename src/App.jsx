import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <main className="cv-container">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  );
}

export default App;