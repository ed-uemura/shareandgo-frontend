import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Review extends Component {
    // function to create a review
    create = async (review) => {
        try {
            // Send review object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'review/create/',
                review,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return review data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get all reviews of a user
    getAll = async () =>{
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'review/viewall/' + localStorage.getItem('userID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return review data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get one review
    getOne = async (reviewID) => {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'review/viewone/' + reviewID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return review data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to delete a review
    delete = async (reviewID) => {
        try {
            // Send review object to server
            const res = await axios.delete(
                process.env.REACT_APP_BACKEND_URL + 'review/delete/' + reviewID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return review data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to update a review
    update = async (reviewID, review) => {
        try {
            // Send review object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'review/update/' + reviewID,
                review,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return review data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}