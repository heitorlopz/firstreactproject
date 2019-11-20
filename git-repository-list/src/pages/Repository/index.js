import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  // como é um unico repositorio, inicia como objeto
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  // Assíncrono pq vai fazer chamadas na API
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    // utilizamos dessa forma para as duas rotas executarem ao mesmo tempo
    const [repository, issues] = await Promise.all([
      await api.get(`/repos/${repoName}`),
      await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    return <h1>Repository</h1>;
  }
}
