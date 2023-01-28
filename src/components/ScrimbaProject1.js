import React from 'react';
import '../css/scrimbaproject1.css'

const ScrimbaProject1 = () => {
    return (
        <div>
            <nav>
                <img src={require(`../images/logo192.png`)} alt="react logo" />
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
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
