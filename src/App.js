import React from 'react';
import './App.css';
import axios from "axios";
import moment from "moment";
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListBoard from './components/ListBoard';
import AddTodoForm from './components/AddTodoForm';


const App = React.createClass({
    //get todos from server and set to state
    getInitialState () {
        return {
            todos: [],

            currentDate: {
                day: moment().format('dddd , Do '),
                month: moment().format('MMMM')
            },

            isAdding: false,
            isEditing: false,

            taskFormName: "",
            taskFormTime: ""

        }
    },
    componentWillMount () {
        axios.get('https://todosserver.herokuapp.com/todos')
            .then(function (response) {
                // console.log(response.data);
                if (response.status === 200) {
                    this.setState({
                        todos: response.data
                    })
                }
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    },

    showAddTask () {
        this.setState({
            isAdding: true,
        })
    },

    onTaskNameChange (name) {
        this.setState({
            taskFormName: name
        })
    },

    onTaskTimeChange (time) {
        this.setState({
            taskFormTime: time
        })
    },


    onSubmitTask (name, time) {
        // console.log(name);
        // console.log(time);

        var newTask = {
            name: name,
            time: time,
            completed: false
        }

        axios.post('https://todosserver.herokuapp.com/todos', {
                name: name,
                time: time
            }
        )
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({
            todos: this.state.todos.concat([newTask]),
            isAdding: false
        });

    },

    onCompletedTask (checkedValue, target) {
        console.log(checkedValue);
        console.log(target);

        axios.put('https://todosserver.herokuapp.com/todos/' + target.id, {
                completed: checkedValue,
            }
        )
            .then(function (response) {
                // console.log(response);
                var todos = this.state.todos;
                var len = todos.length;
                for (var i = 0; i < len; i++) {
                    if (target.id !== response._id) {
                        console.log("yes");
                    }
                }
                // this.setState({
                //     todos: this.state.todos.concat([newTask]),
                //     isAdding: false
                // });
                console.log(response);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });









    },

    render () {

        // console.log(this.state);
        //console.log(this.state.currentDate.day + " " + this.state.currentDate.month);


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
                <ListBoard
                    todos={this.state.todos}
                    onCompletedTask={this.onCompletedTask}
                />
                <AddTodo showAddTask={this.showAddTask}/>
                {this.state.isAdding ?
                    <AddTodoForm
                        taskFormName={this.state.taskFormName}
                        taskFormTime={this.state.taskFormTime}
                        onTaskNameChange={this.onTaskNameChange}
                        onTaskTimeChange={this.onTaskTimeChange}
                        onSubmitTask={this.onSubmitTask}
                    />
                    : null}
            </div>
        )
    }
});


export default App;
