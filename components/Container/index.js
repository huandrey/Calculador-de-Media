// import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Container.module.css';

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
      bigMediaFinal: 0,
      smallMediaFinal: 0,
      note: 0,
      condition: false,
      aprove: false,
      reprove: false,
      erro: false,
    }

    handleInput = (e) => {
      this.setState({
        media: e.target.value,
      });
    }

    handleClick = (e) => {
      e.preventDefault();

      const { media } = this.state;

      this.setState({
        aprove: false,
        reprove: false,
        condition: false,
        erro: false,
      });

      if (media >= 4 && media < 7) {
        const smallMediaFinal = this.calcSmallMedia(media);
        const bigMediaFinal = this.calcBigMedia(media);

        this.setState({
          smallMediaFinal,
          bigMediaFinal,
          condition: true,
        });
      } else if (media >= 7 && media <= 10) {
        this.setState({
          aprove: true,
        });
      } else if (media < 4) {
        this.setState({
          reprove: true,
        });
      } else {
        this.setState({
          erro: true,
        });
      }
    }

    calcBigMedia = (media) => {
      const bigMediaFinal = (media * 6 + 40) / 10;

      return bigMediaFinal;
    }

    calcSmallMedia = (media) => {
      const note = this.calcSmallNote(media);
      const smallMediaFinal = (media * 6 + note * 4) / 10;

      this.setState({
        note,
      });

      return smallMediaFinal;
    }

    calcSmallNote = (media) => {
      const smallNote = ((50 - 6 * media) / 4) + 0.05;
      return smallNote;
    }

    handleKeyPress = (e) => {
      if (e.charCode === 13) {
        // e.preventDefault()
        this.handleClick(e);
      }
      setTimeout(() => {
        if (e.charCode < 46 || e.charCode > 57) {
          e.target.value = '';
        }
      }, 0.1);
    }

    render() {
      const {
        media, bigMediaFinal, smallMediaFinal, note, condition, aprove, reprove, erro,
      } = this.state;

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
                          handleKeyPress={this.handleKeyPress}
                        />

                    </Toast>
                    <Results
                      note={note}
                      bigMediaFinal={bigMediaFinal}
                      smallMediaFinal={smallMediaFinal}
                      condition={condition}
                      aprove={aprove}
                      reprove={reprove}
                      erro={erro}
                    />
                </div>
            </div>
      );
    }
}
