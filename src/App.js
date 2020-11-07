import './App.css';
// import Typist from 'react-typist';
import { Typing } from 'sentences-typing';

const sentences = [
    'Hi,',
    // 'Welcome,',
    'This is venkatesh'
];

function App() {
  return (
    <div>
     <a href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></a>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id="AppBar">
    <div id="home_app_bar">
      <a>Home</a>
    </div>
    <div id="projects_app_bar">Projects</div>
    <div id="about_app_bar">About</div>
    <div id="contact_app_bar">Contact</div>
    <div id="blog_app_bar">Blog</div>
    </div>
    <div id='minititle'>
    <Typing sentences={sentences}/>
    </div>
    <div id='title'>
    {/* <Typing sentences={sentences} infinity/> */}
    {/* <Typist>
      Hi
      <Typist.Backspace count={3} delay={300} />
      This is Venkateshwarlu
    </Typist> */}
    </div>
    <div>
    </div>
    </div>

  );
}

export default App;
