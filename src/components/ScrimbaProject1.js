import React,{useState} from 'react';
import '../css/scrimbaproject1.css'

const ScrimbaProject1 = () => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () =>{
        setDarkMode(prevMode => !prevMode);
    }
    console.log(darkMode);
    
    return (
    <div className={`scrimba-container ${darkMode ? 'dark' : ''}`}>
            <nav>
                <img src={require(`../images/logo192.png`)} alt="react logo" />
                <h3>ReactFacts</h3>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
            <main>
                <h1 className='main--title'>Fun facts about React</h1>
                <hr/>
                <ul className='main--facts'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}

export default ScrimbaProject1;
