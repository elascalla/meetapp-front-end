import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdPlace, MdEvent } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

export default function Details({ location }) {
  const dispatch = useDispatch();
  const { meetup } = location.state;
  const loading = useSelector(state => state.meetup.loading);

  function handleCancel() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Link
            to={{
              pathname: `/edit/${meetup.id}`,
              state: { meetup },
            }}
          >
            <Button color="#4DBAF9" disabled={meetup.past}>
              <MdEdit size={15} />
              Editar
            </Button>
          </Link>
          <Button type="button" onClick={handleCancel} disabled={loading}>
            <MdDeleteForever size={15} />
            {loading ? 'Cancelando' : 'Cancelar'}
          </Button>
        </div>
      </header>

      <img src={meetup.banner.url} alt="Banner" />

      <span>{meetup.description}</span>

      <footer>
        <div>
          <MdEvent color="#fff" size={18} />
          <time>{meetup.dateFormatted}</time>
        </div>

        <div>
          <MdPlace color="#fff" size={18} />
          <address>{meetup.location}</address>
        </div>
      </footer>
    </Container>
  );
}

Details.propTypes = {
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
        dateFormatted: PropTypes.string,
        past: PropTypes.bool,
      }),
    }),
  }).isRequired,
};
