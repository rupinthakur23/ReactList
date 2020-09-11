import React , {Component} from 'react';

class AddTodo extends Component {
    state= {
        content:null

    }
    onChange = (e) =>{
        this.setState({
            content:e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content:""
        })

    }
    render(){
        return (
            <div>

            <form onSubmit={this.onSubmit}>
            <label>Add new TODO:</label>
            <input type="text" onChange={this.onChange} value={this.state.content}/>
            <button>Submit</button>
            
            </form>
            </div>

        )
    }
}

export default AddTodo