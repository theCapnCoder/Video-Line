import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <p>Hello</p>
      <Button size="small" variant="contained">начать звонок</Button>
      <Button size="small" variant="outlined">Конференция</Button>
    </div>
  );
}

export default App;
