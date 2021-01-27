import React, { Component, useState } from 'react';

import './Results.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';

const Results = ({ bigMediaFinal, smallMediaFinal, note, condition }) => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
    return (
        <>
            <Alert className="alert" color="info" isOpen={condition} toggle={onDismiss}>
                Tirando 10, sua media ficara {bigMediaFinal}.
            </Alert>
            <Alert className="alert" color="info" isOpen={condition} toggle={onDismiss}>
                Tirando {note.toFixed(2)}, sua media ficara {smallMediaFinal}.
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