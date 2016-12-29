import React from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListBoard from './components/ListBoard';



const App = React.createClass({
    render () {
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
                <Header />
                <ListBoard/>
                <AddTodo />
            </div>
        )
    }
});



export default App;
