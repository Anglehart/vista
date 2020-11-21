import React from 'react';
import UsersList from './components/usersList';
import UserInfo from './components/userInfo';
import networkService from './services/networkService';
import './App.css';

function App() {
  const [present, setPresent] = React.useState([]);
  const [quitting, setQuitting] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  const [category, setCategory] = React.useState(1);
  
  function userClick(value) {
    setCurrent(value);
  }
  
  function handleCategory(i) {
    setCurrent([]);
    setCategory(i);
  }
  
  React.useEffect(() => {
    networkService.getPresent()
    .then((res) => {
      if (!res) return Promise.reject(res);
      setPresent(res);
    })
    .catch(() => {
      console.log('Server error.')
    })
  }, [])
    
  React.useEffect(() => {
    networkService.getQuitting()
    .then((res) => {
      if (!res) return Promise.reject(res);
      setQuitting(res);
    })
    .catch(() => {
      console.log('Server error.')
    })
  }, [])
  
  React.useEffect(() => {
    const leftBlock = document.querySelector('.user-info');
    const rightBlock = document.querySelector('.users-list');
    const wrapper = document.querySelector('main')
    const resizer = document.getElementById('resizer');
    resizer.addEventListener('mousedown', initResize, false);
    
    function initResize(e) {
      document.addEventListener('mousemove', Resize, false);
      document.addEventListener('mouseup', stopResize, false);
    }
    function Resize(e) {
      leftBlock.style.width = (e.clientX - leftBlock.offsetLeft) + 'px';
      rightBlock.style.width = (wrapper.offsetWidth - e.clientX + 10) + 'px';
    }
    function stopResize(e) {
      document.removeEventListener('mousemove', Resize, false);
      document.removeEventListener('mouseup', stopResize, false);
    }
  }, [])
  

  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main>
        <UserInfo current={current} />
        <div id="resizer"></div>
        <UsersList
          category={category}
          list={category === 1 ? present : quitting} 
          handleCategory={handleCategory} 
          userClick={(value) => userClick(value)}
        />
      </main>
    </div>
  );
}

export default App;
