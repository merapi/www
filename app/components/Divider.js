import React, { Component } from 'react';
import { Styles } from 'helpers/constants';

const STYLES = {
  divider: {
    background: Styles.BG_COLOR_DIVIDER,
    height: 50
  }
};

export default class Divider extends Component {
  render() {
    return (
      <div style={STYLES.divider}></div>
    );
  }
}