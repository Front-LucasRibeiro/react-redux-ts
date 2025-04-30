import { Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Home from "./pages/Home";
import "./styles/index.css";

function App() {
  // const count = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  return (
    // <>
    //   <div>
    //     <h1>Contador: {count}</h1>
    //     <button onClick={() => dispatch(increment())}>Incrementar</button>
    //     <button onClick={() => dispatch(decrement())}>Decrementar</button>
    //   </div>
    //   <CharacterList />
    // </>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharacterList />} />
    </Routes>
  );
}

export default App;
