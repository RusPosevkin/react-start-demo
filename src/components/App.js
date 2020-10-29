import React from 'react';
import api from '../api/api';
import Input from './Input';
import Button from './Button';
import Spinner from './Spinner';
import Card from './Card';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoadiing] = React.useState(false);

  React.useEffect(() => {
    setIsLoadiing(true);

    api.search(searchQuery).then(data => {
      setCards(data.results.map((item) => ({
        id: item.id,
        src: item.urls.regular,
        alt: item.alt_description,
        title: item.description,
        subtitle: item.user.name,
      })));

      setIsLoadiing(false);
    });
  }, [searchQuery]);

  return (
    <div className="App">
      <div className="App-content">
        <div className="App-search">
          <Input placeholder="Search free high-resolution photos" />
          <Button title="Search" handleClick={() => setSearchQuery('usa')} />
        </div>
        <div className="App-cards">
          {
            isLoading
              ? <Spinner />
              : cards.map(({ id, ...props }) => <Card key={id} {...props} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
