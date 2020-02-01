import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { addToDO, doneToDO } from '../../State/Actions';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fields:{}};
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    addTodo() {
        let data = {
            id : this.props.isEdit ? this.props.data.id :this.props.todoList.reduce((max,x)=>max>x.id?max:x.id,0)+1,
            title : this.state.fields.ttl,
            description : this.state.fields.desc,
            status : Number(this.state.fields.status) ,
            createdAt : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
          }
        if(this.props.isEdit) {
            this.props.editItem(data);
        }else {
            this.props.tambahItem(data);
        }
        this.props.closeModal();
    }
    componentDidMount() {
        if(this.props.data){
            let fields = {
                ttl : this.props.data.title,
                desc : this.props.data.description,
                status : this.props.data.status.toString()
            }
            this.setState({fields})
        }    
    }
    render() {
        return (
            <Fragment >
                    <Form.Group controlId="formTittle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange.bind(this, "ttl")} value={this.state.fields["ttl"]} placeholder="title" />
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange.bind(this, "desc")} value={this.state.fields["desc"]} placeholder="desctiption" />
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Done</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange.bind(this, "status")} value={this.state.fields["status"]}>
                            <option value={0}>In Progress</option>
                            <option value={1}>Done</option>
                        </Form.Control>
                    </Form.Group>
                <Button variant="primary" onClick={this.addTodo.bind(this)}>
                        Save Changes
                </Button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => {
    return {
      tambahItem: (data) => {
        dispatch(addToDO(data))
      },
      editItem: (data) => {
        dispatch(doneToDO(data))
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Add);