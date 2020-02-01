import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Progress from './Progress';
import {connect} from 'react-redux';
import { fetchToDO } from '../State/Actions'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    }
    componentDidMount() {
        fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list',{
            method:'get'
        }).then((response) => {
            return response.json();
        }).then((jsonData) => {
            this.props.addItem(jsonData);
        })
    }
    render() {
        return (
            <Fragment >
                <Header/>
                <Container >
                 <Progress/>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => {
    return {
      addItem: (list) => {
        dispatch(fetchToDO(list))
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Main);