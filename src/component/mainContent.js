import React from 'react';
import FirstIntroduction from './FirstIntroduction';
import IntroImg from '../images/intro-bg.jpeg';
import MoreInformation from './MoreInformation';
import Help from './HelpClient';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';


class Main extends React.Component {
    render(){
        return(
            <main>
                <FirstIntroduction url={IntroImg}/>
                <MoreInformation />
                <Help />
                <Experience />
                <Projects />
                <Contact />
            </main>
        )
    }
}

export default Main;