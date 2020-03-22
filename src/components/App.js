import React from 'react';
import '../stylesheets/App.scss';
import { getDataFromServer } from '../services/Api';
import Header from './Header';
import Table from './Table';
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getDataFromServer()
      .then(data => {
        this.setState({
          questions: data.results
        })
      })
  }

  handleChange(value) {
    this.setState({
      search: value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <Filters
        handleChange={this.handleChange}
        search={this.state.search}
        />
        <Table 
        questions={this.state.questions}
        search={this.state.search}
        />
      </div>
    );
  }
}

export default App;