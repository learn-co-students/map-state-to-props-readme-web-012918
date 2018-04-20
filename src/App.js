import React, { Component } from 'react';
import { connect } from 'react-redux'; // connect is to specify that this component needs to re-render when store changes
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//Listens to every change in the store. Change will call mapStateToProps
const mapStateToProps = (state) => {
  return { items: state.items }; //Filters out the change in store that is relevant to the component
};

//Let us know what this is connecting to
export default connect(mapStateToProps)(App);
