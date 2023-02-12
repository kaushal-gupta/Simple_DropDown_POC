import DropDown from "./DropDown";
function App() {
  return (
    <DropDown
      options={["Yes", "Probably Not"]}
      placeholder="Select"
      label="Should you use a dropdown?"
    />
  );
}

export default App;
