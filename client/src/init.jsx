import App from './App.jsx';
import Header from './components/Header.jsx';

export default () => {
  return (
    <>
      <Header />
      <main className='main'>
        <App />
      </main>
    </>
  );
};
