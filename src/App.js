import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-200 via-pink-200 to-purple-300">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Password Generator
      </h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
