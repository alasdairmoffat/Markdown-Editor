import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class FileDownload extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
  };

  // immediately downloads, doesn't give prompt
  downloadFile = () => {
    const { markdown } = this.props;

    const file = new Blob([markdown], { type: 'text/plain' });

    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = 'markdown.md';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  render() {
    const { children } = this.props;
    return <div onClick={this.downloadFile}>{children}</div>;
  }
}

const mapStateToProps = state => ({
  markdown: state.markdown.markdown,
});

export default connect(mapStateToProps)(FileDownload);
