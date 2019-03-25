import React, { Component } from 'react';
import Files from 'react-files';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadFromFile } from '../store/actions/markdownActions';
import { updateError } from '../store/actions/errorActions';

export class FileUpload extends Component {
  static propTypes = {
    clickable: PropTypes.bool,
    loadFromFile: PropTypes.func.isRequired,
    updateError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    clickable: true,
  };

  onFilesChange = files => {
    this.props.loadFromFile(files[0]);
  };

  onFilesError = error => {
    this.props.updateError(error);
  };

  render() {
    const { clickable, children } = this.props;
    return (
      <Files
        onChange={this.onFilesChange}
        onError={this.onFilesError}
        accepts={['.md']}
        multiple={false}
        maxFileSize={10000000}
        minFileSize={0}
        clickable={clickable}
      >
        {children}
      </Files>
    );
  }
}

export default connect(
  null,
  { loadFromFile, updateError },
)(FileUpload);
