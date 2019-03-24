import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { updateMarkdown } from '../store/actions/markdownActions';
import { Input } from 'reactstrap';

export class EditorWindow extends Component {
  static propTypes = {
    markdown: PropTypes.string.isRequired,
    updateMarkdown: PropTypes.func.isRequired,
  };

  onChange = event => {
    const { updateMarkdown } = this.props;
    const newMarkdown = event.target.value;

    updateMarkdown(newMarkdown);
  };

  render() {
    const { markdown } = this.props;

    return (
      <Fragment>
        <Input
          type="textarea"
          name="text"
          value={markdown}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  markdown: state.markdown.markdown,
});

export default connect(
  mapStateToProps,
  { updateMarkdown },
)(EditorWindow);
