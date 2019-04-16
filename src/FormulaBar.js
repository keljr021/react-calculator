import React, { Component } from 'react';

class FormulaBar extends Component {

    render() {

        let { numArray, opArray, value } = this.props;
        let formulaString = '';

        for( let n = 0; n < numArray.length; n++) {
            formulaString += numArray[n] + ' ';

            if (typeof opArray[n] !== 'undefined') {
                let formatOp = opArray[n];
                switch(opArray[n]) {
                    case 'add':
                        formatOp = '+';
                        break;
                    case 'sub':
                        formatOp = '-';
                        break;
                    case 'mul':
                        formatOp = '*';
                        break;
                    case 'div':
                        formatOp = '/';
                        break;
                    default:
                        break;
                }
                
                formulaString += formatOp + " ";
            }

        }

        formulaString += (value === null ? " " : value);

        return (
            <div className={"calc-formula"}>{formulaString}</div>
        );
    }
}

export default FormulaBar;