'use client'

import '@toast-ui/editor/toastui-editor.css';

import { Editor, EditorProps } from '@toast-ui/react-editor'
import React, { MutableRefObject } from 'react'

import PropTypes from 'prop-types'

const WrappedEditor = (props: EditorProps & { ref: MutableRefObject<Editor> }) => {
  return <Editor {...props} />;
};

WrappedEditor.propTypes = {
  forwardedRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
};

export default WrappedEditor;