import React, { Component, useState } from 'react';

import './Results.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';

const Results = ({ bigMediaFinal, smallMediaFinal, note, condition, aprove, reprove, erro }) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <>
            <Alert className="alert" color="info" isOpen={aprove} toggle={onDismiss}>
                Você já passou, parabéns!
            </Alert>
            <Alert className="alert" color="info" isOpen={reprove} toggle={onDismiss}>
                Parece que você reprovou :(
            </Alert>
            <Alert className="alert" color="info" isOpen={condition} toggle={onDismiss}>
                Tirando 10.0, sua média será {bigMediaFinal.toFixed(1)}
            </Alert>
            <Alert className="alert" color="info" isOpen={condition} toggle={onDismiss}>
                Tirando {note.toFixed(1)}, sua média será {smallMediaFinal.toFixed(1)}
            </Alert>

            <Alert className="alert" color="danger" isOpen={erro} toggle={onDismiss}>
                Digite uma média entre 0 e 10
            </Alert>
        </>
    )

}

export default Results;

// import React, { useState } from 'react';
// import { Alert } from 'reactstrap';

// const AlertExample = (props) => {
//     const [visible, setVisible] = useState(true);

//     const onDismiss = () => setVisible(false);

//     return (
//         <Alert color="info" isOpen={visible} toggle={onDismiss}>
//             I am an alert and I can be dismissed!
//         </Alert>
//     );
// }

// export default AlertExample;