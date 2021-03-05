import React from 'react';

import './Field.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form, FormGroup, Input, Button,
} from 'reactstrap';
import { VscSmiley } from 'react-icons/vsc';

export default function Field({
  handleInput, handleClick, media, handleKeyPress,
}) {
  return (
  // <div className="fields">
  //     <input type="text" name="media1"></input>
  //     <Button color="btn btn-primary mb-3">Adicionar</Button>
  // </div>

        <Form className="form">
            <FormGroup className="tam">
                {/* <Label>Digite sua media</Label> */}
                <Input onKeyPress={handleKeyPress} onChange={handleInput} className="inp" type="text" value={media} placeholder="Digite sua media aqui" />
                <Button className="btn" onClick={handleClick} color="success">Calcular</Button>
                <VscSmiley size={20} />
            </FormGroup>
        </Form>
  );
}
