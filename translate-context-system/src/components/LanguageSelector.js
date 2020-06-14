import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return(
            <div style={{marginBottom: '3vh'}}>
            Select a language:
            <i className="flag us" onClick={()=> this.context.onLanguageChange('english')}/>
            <i className="flag np" onClick={()=> this.context.onLanguageChange('nepali')} />
        </div>
        )
    }
}

export default LanguageSelector;