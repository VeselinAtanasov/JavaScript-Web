import React, {Component} from 'react';
import '../styles/Welcome.css';
import Logo from './Logo';
import Button from './Button';
class Welcome extends Component{

    render(){
        let title = this.props.title || 'Veselin';
        let subtitle = this.props.subtitle || 'Atanasov';
        let className = 'Welcome-'+(this.props.style || 'default');
        return(
            <div className={className}>
                <h1>Title {title}</h1>
                <h2>Subtitle {subtitle}</h2>
                <Logo />
                <br/>
                <Button text="Click me"/>
            </div>
        );
    }
}

export default Welcome ;