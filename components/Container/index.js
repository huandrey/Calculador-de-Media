// import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Container.module.css'

// // import container from './Container.module.css'
// import Field from '../Field';

// export default function Container({ titule }) {
//     return (
//         <div className="container">
//             <h2 className="titule">Preencha com sua media</h2>
//             <Field />
//         </div>
//     )
// }

import React, { Component } from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import Field from '../Field';
import Results from '../Results';

export default class Container extends Component {
    state = {
        media: '',
        bigMediaFinal: '',
        smallMediaFinal: '',
        note: '',
        condition: false
    }

    handleInput = (e) => {
        this.setState({
            media: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const { media } = this.state;

        const bigMediaFinal = this.calcBigMedia(media);
        const smallMediaFinal = this.calcSmallMedia(media);


        this.setState({
            bigMediaFinal,
            smallMediaFinal,
            condition: true,
        })


    }

    calcBigMedia = (media) => {
        const bigMediaFinal = (media * 6 + 40) / 10

        return bigMediaFinal
    }

    calcSmallMedia = (media) => {
        const note = this.calcSmallNote(media);
        console.log(note)
        const smallMediaFinal = (media * 6 + note * 4) / 10

        this.setState({
            note,
        })

        return smallMediaFinal
    }

    calcSmallNote = (media) => {
        const smallNote = (50 - 6 * media) / 4
        return smallNote
    }

    render() {
        const { media, bigMediaFinal, smallMediaFinal, note, condition } = this.state;

        return (
            <div>
                <div className="cont p-2 my-8 rounded">
                    <Toast>
                        <ToastHeader className="titule">Calculador de media</ToastHeader>
                        <ToastBody className="description">
                            Saiba o quanto voce precisa tirar na final sem precisar de tabela
                        </ToastBody>
                        <Field
                            handleInput={this.handleInput}
                            handleClick={this.handleClick}
                            media={media}
                        />
                    </Toast>
                    <Results
                        note={note}
                        bigMediaFinal={bigMediaFinal}
                        smallMediaFinal={smallMediaFinal}
                        condition={condition}
                    />
                </div>
            </div >
        );
    }
};
