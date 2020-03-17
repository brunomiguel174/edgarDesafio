import React from "react";
import "../Styles/DropDown.less";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "blue", width: "200px"}}>

        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          Choose...{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className="active" href="#Bacalhau">
                Bacalhau com natas
              </a>
            </li>
            <li>
              <a href="#Lombo">Lombo Assado</a>
            </li>
            <li>
              <a href="#Pato">Arroz de Pato</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
