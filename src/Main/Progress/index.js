import React, { Fragment } from 'react';
import { Table, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteToDO } from '../../State/Actions'
import Modal from './modal';
class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            filter: 'a' };
    }
    sortA;
    closeModal() {
		this.setState({
			isModalOpen: false
		});
	}
    handleChange(field, e) {
        let filter = this.state.filter;
        filter = e.target.value;
        this.setState({ filter });
    }
    render() {
        const a = this.props.todoList.map(x=>x);
        const b = this.props.todoList.map(x=>x);
        a.sort(function(x, y) {
            return (x.createdAt < y.createdAt)? 1 : -1 ;
        });
        b.sort(function(x, y) {
            return (x.createdAt > y.createdAt)? 1 : -1 ;
        });
        let toDoInProgress = isNaN(this.state.filter) ? this.props.todoList : this.state.filter === 0 ? b.filter(x => x.status === Number(this.state.filter)) : a.filter(x => x.status === Number(this.state.filter));
        let tableTodo = toDoInProgress.map(function (x, key) {
            return <tr key={key}>
                <th>{x.title}</th>
                <th>{x.description}</th>
                <th>{x.status === 1 ? 'done' : ''}</th>
                <th>{x.createdAt}</th>
                <th><Modal title="View" isEdit={true} data={x}/></th>
            </tr>
        });
        return (
            <Fragment >
                <Modal title="Add"/>
                <br></br><br></br>
                <Form.Control as="select" onChange={this.handleChange.bind(this, 'filter')} value={this.state.filter}>
                    <option value="a">All</option>
                    <option value={1}>Done</option>
                    <option value={0}>In Progress</option>
                </Form.Control>
                <br></br>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>description</th>
                            <th>Status</th>
                            <th>created</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTodo}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => {
    return {
        hapusItem: (index) => {
            dispatch(deleteToDO(index))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Progress);