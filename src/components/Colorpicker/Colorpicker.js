import { Component } from 'react';
import './Colorpicker.css'

export class Colorpicker extends Component {
  state = {
    activeOptIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptIdx)
      optionClasses.push('ColorPicker__option--active');

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Colorpicker</h2>
        <p>Обраний колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
