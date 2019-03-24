import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import FileUpload from './FileUpload';
import FileFownload from './FileDownload';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm">
          <NavbarBrand href="/" className="mr-auto">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <FileUpload>
                  <NavLink>Load File</NavLink>
                </FileUpload>
              </NavItem>
              <NavItem>
                <FileFownload>
                  <NavLink>Save to File</NavLink>
                </FileFownload>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://help.github.com/en/categories/writing-on-github"
                  target="__blank"
                >
                  Guide
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
