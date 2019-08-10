import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import marked from 'marked';
import Interweave from 'interweave';

marked.setOptions({
  gfm: true,
});

export class PreviewWindow extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
  };

  render() {
    const { markdown } = this.props;
    const markdownHtml = marked(markdown);
    return <Interweave content={markdownHtml} />;
  }
}

const mapStateToProps = state => ({
  markdown: state.markdown.markdown,
});

export default connect(mapStateToProps)(PreviewWindow);
