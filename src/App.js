
import './App.css';
import SearchableList from './components/Searchable.tsx'
import Modal from './components/modal.tsx';
import { useEffect ,useState} from 'react';

function App() {
  const urlToFetch =
  "https://itunes.apple.com/us/rss/topalbums/limit=100/json ";
const [showModal, setShowModal] = useState(false);
const [currentItem, setCurrenItem] = useState(null);
const [items, setItems] = useState([]);

const setModalState = (state) => {
  setShowModal(state)
}

const setCurrentState = (state) => {
  setCurrenItem(state)
}

useEffect(() => {
  const asyncFetch = async function () {
    try {
      const data = await fetch(urlToFetch, {
        headers: {
          Accept: "application/json"
        }
      });
      let {feed} = await data.json()
      setItems(feed.entry)
      console.debug(feed);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };
  asyncFetch();
}, []);

  return (
    <div className="App">
          <SearchableList items={items} setShowModal={setModalState} setCurrenItem={setCurrentState} />
          { showModal && <Modal currentItem={currentItem} onClose={() => setModalState(false)} />}
    </div>
  );
}

export default App;
