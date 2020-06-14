import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;

    render() {
        const english = {text: 'Name', placeHolder: 'Search Something'}
        const nepali = {text: 'नाम', placeHolder: 'केहि खोज्नुहोस्'}
        const text = this.context.language === 'english'? english : nepali
        return(
            <div className="ui field">
                <label>{text.text}</label>
                <input placeholder={text.placeHolder} />
            </div>
        )
    }
}

export default Field;