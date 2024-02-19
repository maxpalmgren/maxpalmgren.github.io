import ScreenSelector from "./components/ScreenSelector";

function App() {
  return (
    <div className="bg-slate-800 text-white w-screen py-4 height: 100svh sm:h-screen">
      <div className="flex justify-center items-center">
        <ScreenSelector></ScreenSelector>
      </div>
    </div>
  );
}

export default App;
