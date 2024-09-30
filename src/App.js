import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <p>This is a simple React website.</p>
        <button className="cta-button">Click Me!</button>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            We create awesome web experiences using modern tools and technologies.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2024 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
