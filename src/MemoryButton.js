import React, { Component } from 'react';

class MemoryButton extends Component {

    handleClick = () => {
        this.props.recallMemory(this.props.index);
    }

    render() {

        let formatNum = (this.props.number).toString();

        if (formatNum.length > 5) {
            formatNum = formatNum.substring(0, 4) + '...'; 
        }

        return (
            <button className={"btn btn-sm calc-mem-num"} onClick={this.handleClick} title={this.props.number}>{formatNum}</button>
        );
    }
}

export default MemoryButton;
