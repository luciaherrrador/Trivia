import React from 'react';
import '../stylesheets/App.scss';
import { getDataFromServer } from '../services/Api';
import Header from './Header';
import Table from './Table';
import Pager from './Pager';


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handleQuestions = this.handleQuestions.bind(this);
    this.state = {
      questions: [],
    }
  }

  componentDidMount() {
    getDataFromServer()
      .then(data => {
        this.setState({
          questions: data.results
        })
      })
  }

  /*handleQuestions(id) {
    console.log(id)
  }*/

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <Table questions={this.state.questions} />
        <Pager/>
      </div>
    );
  }
}

export default App;