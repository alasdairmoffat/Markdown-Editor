import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { clearError } from '../store/actions/errorActions';

export class ErrorDisplay extends Component {
  state = {
    isVisible: false,
  };

  static propTypes = {
    error: PropTypes.shape({
      code: PropTypes.number,
      message: PropTypes.string,
    }),
    clearError: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    if (this.props.error.message && !this.state.isVisible) {
      this.setState({ isVisible: true });
      setTimeout(this.removeError, 2000);
    }
  }

  removeError = () => {
    this.props.clearError();
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <Fragment>
        <Alert
          color="danger"
          isOpen={this.state.isVisible}
          toggle={this.removeError}
        >
          {this.props.error.message}
        </Alert>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(
  mapStateToProps,
  { clearError },
)(ErrorDisplay);
