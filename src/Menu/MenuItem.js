import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        animation: '1s appear forwards',
        animationDelay: this.props.delay
      },
      menuItem: {
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? 'black' : '#555',
        backgroundColor: this.state.hover? '#e4e4e4' : 'white',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'lightgrey',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay: this.props.delay
      }
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

export default MenuItem;
