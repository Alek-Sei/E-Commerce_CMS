import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <p>Welcome to Watashi no Mise CMS</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
