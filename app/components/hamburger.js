import Component from '@glimmer/component';
import { action } from '@ember/object';
import React from 'react';
import { render } from 'react-dom';
import Hamburger from 'hamburger-react';

export default class extends Component {
  @action
  install(root) {
    render(React.createElement(Hamburger), root);
  }
}
