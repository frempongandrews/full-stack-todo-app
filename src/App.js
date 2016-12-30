import React from 'react';
import './App.css';
import axios from "axios";
import moment from "moment";
// moment().format('MMMM Do YYYY, h:mm:ss a'); // December 30th 2016, 9:15:30 pm
// moment().format('dddd , Do ');
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListBoard from './components/ListBoard';


const App = React.createClass({
    //get todos from server and set to state
    getInitialState () {
      return {
          todos: [],
          currentDate: {
              day: moment().format('dddd , Do '),
              month: moment().format('MMMM')
          }
      }
    },
    componentWillMount () {
        axios.get('https://todosserver.herokuapp.com/todos')
            .then(function (response) {
                // console.log(response.data);
                this.setState({
                    todos: response.data
                })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    },
    render () {

        // console.log(this.state);
        //console.log(this.state.currentDate.day + " " + this.state.currentDate.month);

//
//         axios.post('https://todosserver.herokuapp.com/todos',{
//             name: "buying tesla",
//
//         }
// )
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// axios.get('https://todosserver.herokuapp.com/todos')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


        //     axios({
        //         method: 'delete',
        //         url: 'https://todosserver.herokuapp.com/todos/'
        //     })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        return (
            <div className="App">
                <Header currentDate={this.state.currentDate} todos={this.state.todos}/>
                <ListBoard/>
                <AddTodo />
            </div>
        )
    }
});


export default App;
