import './App.css';

import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My storybook test</h1>
      </header>
      <main>
        <Card title="Hello World!" imgUrl='./bayern.jpg' description="Hello World! This is a storybook!" button />
      </main>
    </div>
  );
}

export default App;
