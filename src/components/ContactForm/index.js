/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(errors);
    console.log({
      name, email, phone, category,
    });
  }

  return (

    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>

        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
