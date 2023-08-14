import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

function createNoteItem(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is title" content="This is content" /> */}

      {notes.map(createNoteItem)}
      <Footer />
    </div>
  );
}

export default App;
