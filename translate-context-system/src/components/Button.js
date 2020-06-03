import React from 'react';
import LanguageContect from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'Submit': 'बुझाउनुहोस्';
    }
    
    renderColor(color) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContect.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContect.Consumer>
            </button>
        )
    }

    render () {
        return(
            <ColorContext.Consumer>
            {color => this.renderColor(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;