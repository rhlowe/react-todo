import './App.css';
import { useState } from 'react';
import List from './List';
import TestData from './test-fruit';
function App() {
  const [list, setList] = useState([]);
  // const [list, setList] = useState(TestData);
  const [darkMode, setDarkMode] = useState(false);

  const sortedList = list.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  const todoItems = sortedList.filter(item => item.complete === false);
  const completeItems = sortedList.filter(item => item.complete === true);

  const [listItemText, setListItemText] = useState('');

  const updateList = event => {
    event.preventDefault();
    const newItem = {
      id: list.length,
      name: listItemText,
      complete: false,
    };
    setList([
      ...list,
      newItem,
    ]);
    setListItemText('');
  }

  const updateListItemText = event => {
    setListItemText(event.target.value);
  }

  const toggleChecked = passedItem => {
    const filteredList = list.filter(listItem => listItem.id !== passedItem.id)
    passedItem.complete = !passedItem.complete;

    setList([
      ...filteredList,
      passedItem,
    ])
  }

  let appClasses = ['App'];

  if (darkMode) {
    appClasses.push('darkmode')
  }

  return (
    <div className={appClasses.join(' ')}>
      <header className="App-header app-section">
        <h1>Todos</h1>
      </header>

      <section className="App-form app-section">
        <form onSubmit={updateList} class="main-form">
          <label>
            <span>Add an item</span>
            <input
              onChange={updateListItemText}
              type="text"
              value={listItemText}
            />
          </label>
          <button type="submit">+ Add Item</button>
        </form>

        <details>
          <summary>Options</summary>
          <form>
            <label>
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
              <span>Darkmode</span>
            </label>
          </form>
        </details>
      </section>

      <main className="App-body app-section">
        <List
          items={todoItems}
          open="open"
          summary="To-Do"
          toggleChecked={toggleChecked}
        />

        <hr />

        <List
          items={completeItems}
          summary="Done"
          toggleChecked={toggleChecked}
        />
      </main>

      <footer className="app-section">
        <center><a href="https://rob.zone">Rob</a> made this</center>
      </footer>
    </div>
  );
}

export default App;
