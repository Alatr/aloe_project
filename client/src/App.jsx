import Container from '@material-ui/core/Container';
import { useState } from 'react';
import SentencesMix from './components/CardsMix.jsx';
import { uniqueId } from 'lodash';

function App() {
  const [cards, setSentence] = useState([
    'He quickly reads a book.',
    // 'Mandy is a pretty girl.',
    // 'The class is terribly loud today.',
    // 'Max is a good singer.',
    // 'You can easily open this tin.',
    // 'It"s a terrible day today.',
    // 'She sings the song well.',
    // 'He is a careful driver.',
    // 'He drives the car carefully.',
    // 'The dog barks loudly.',
  ]);
  return (
    <Container>
      <div className='App'>
        {cards.map(sentence => (
          <SentencesMix id={uniqueId()} value={sentence} />
        ))}
      </div>
    </Container>
  );
}

export default App;
