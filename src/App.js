import logo from './logo.svg';
import './App.css';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Example title="React Children">
        <p>Am a child from example</p>
        <p>Am also a Child not a prop</p>
      </Example>
      <Example title="Example2 React Children">
        <p>You can have anything displayed in the example children</p>
        <p>We have had anything we wanted displayed in our children props</p>
      </Example>
    </div>
  );
}

export default App;
