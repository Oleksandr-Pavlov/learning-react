import { Component } from 'react';
import './Dropdown.css'

export class Dropdown extends Component {

  state = {
    visible: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  }

  render() {

    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button type="button" className="Dropdowm__toggle" onClick={this.toggle}>
          {visible? 'Сховати' : 'Показати'}
        </button>
        {visible && (
          <div className="Dropdown__menu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}