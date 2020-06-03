import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{
    state = {
        language: 'english',
        color: 'primary'
    }
    onLanguageChange = (language , color) => {
        this.setState({language});
        this.setState({color});
    }


    render() {
        return(
            <div className="ui container" style={{marginTop: '3vh'}}>
                <div style={{marginBottom: '3vh'}}>
                    Select a language:
                    <i className="flag us" onClick={()=> this.onLanguageChange('english', 'primary')}/>
                    <i className="flag np" onClick={()=> this.onLanguageChange('nepali', 'green')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;