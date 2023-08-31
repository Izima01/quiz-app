import { useState } from 'react';
import './App.css';
import useQuestionFetcher from './useQuestionFetcher';

const details = {
  name: '',
  age: 0,
  category: '',
  difficulty: '',
  limit: 0
};

function App() {
  // const [user, setUser] = useState(details);
  // const { data, isLoading } = useQuestionFetcher(user?.category, user?.limit, user?.difficulty);
  const [startRunning, setStartRunning] = useState(false);

  return (
    // <RouterProvider />
    <div className="App">
      {/* <Home user={user} setUser={setUser} setStartRunning={setStartRunning} />
      <Questions startRunning={startRunning} setstartRunning={setStartRunning} data={data} /> */}
    </div>
  );
}

export default App;
