import React, { useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Adicione uma imagem do seu meetup'),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  location: Yup.string().required(
    'Insira o local onde será realizado o meetup'
  ),
  date: Yup.date('Insira uma data válida')
    .required('Insira a data em que o meetup acontecerá')
    .typeError('Insira uma data válida'),
});

export default function Edit({ location }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);

  const meetup = useMemo(
    () => ({
      ...location.state.meetup,
      date: parseISO(location.state.meetup.date),
    }),
    [location.state.meetup]
  );

  function handleSubmit(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Content>
        <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
          <BannerInput name="banner_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input
            name="description"
            placeholder="Descrição completa"
            multiline
            rows="4"
          />
          <DatePicker name="date" placeholder="Data do meetup" />
          <Input name="location" type="" placeholder="Localização" />

          <div align="right" id="save">
            <button type="submit">
              {loading ? 'Salvando...' : 'Salvar meetup'}
            </button>
          </div>
        </Form>
      </Content>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.string,
        banner: PropTypes.shape({
          url: PropTypes.string,
        }),
        date: PropTypes.string,
        dateFormatted: PropTypes.string,
      }),
    }),
  }).isRequired,
};
