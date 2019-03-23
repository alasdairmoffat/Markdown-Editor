import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { updateMarkdown } from '../store/actions/markdownActions';
import { FormGroup, Label, Input } from 'reactstrap';

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
      <div>
        <FormGroup>
          <Label for="markdownInput">Markdown Input</Label>
          <Input
            type="textarea"
            name="text"
            id="markdownInput"
            value={markdown}
            onChange={this.onChange}
          />
        </FormGroup>
      </div>
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
