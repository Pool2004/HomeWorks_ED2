import React from 'react';
import BotonLimpiar from '../../buttons/BotonLimpiar';
import BotonVuelta from '../../buttons/BotonVuelta';
import BotonNegativo from '../../buttons/BotonNegativo';
import FunctionButton from '../../buttons/FunctionButton';
import BotonNumero from '../../buttons/BotonNumero';
import BotonIgual from '../../buttons/BotonIgual';
import { NumpadStyles } from './NumpadStyles';

function Numpad() {
    return (
        <NumpadStyles>
            <BotonLimpiar />
            <BotonVuelta />
            <BotonNegativo />
            <FunctionButton buttonValue={'/'} />
            <BotonNumero buttonValue={7} />
            <BotonNumero buttonValue={8} />
            <BotonNumero buttonValue={9} />
            <FunctionButton buttonValue='*' />
            <BotonNumero buttonValue={4} />
            <BotonNumero buttonValue={5} />
            <BotonNumero buttonValue={6} />
            <FunctionButton buttonValue='-' />
            <BotonNumero buttonValue={1} />
            <BotonNumero buttonValue={2} />
            <BotonNumero buttonValue={3} />
            <FunctionButton buttonValue='+' />
            <div className='zeroButton'>
                <BotonNumero buttonValue={0} />
            </div>
            <BotonNumero buttonValue='.' />
            <BotonIgual />
        </NumpadStyles>
    );
}

export default Numpad;