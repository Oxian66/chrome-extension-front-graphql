/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Container,
  TextField,
  Stack,
  Button,
  List,
  CircularProgress,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Divider,
  LinearProgress,
  FormControl,
} from '@mui/material/';
import axios from 'axios';
import moment from 'moment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useQuery, useMutation, gql } from '@apollo/client';
 
const Popup = () => {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [location, setLocation] = useState('');

  const GET_COMMENTS = gql`
  query getComments($location: String!) {
    getComments(location: $location) {
      username
      text
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation createComment($commentText: CreateCommentInput!){
    createComment(commentText: $commentText ){
      username
      text
      time
    } 
  }
`;


const [createComment, {data: data2}] = useMutation(CREATE_COMMENT);

const {data} = useQuery(GET_COMMENTS, {variables: {location: "www.apolographql.com"}},);
console.log('data', data);

  useEffect(() => {
    //setLoading(true);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = (tabs[0].url.split('/')[2]);
      console.log('url', url);
      setLocation(url);
      console.log('location:', location)
      setReviews(data.getComments);
      // axios.get(`http://localhost:3000/graphql/${encodeURIComponent(url)}`)
      //   .then((res) => {
      //     const reviews = res.data;
      //     console.log('reviews', reviews)
      //     const temp = [];
      //     reviews.forEach(review => {
      //       temp.push(<ListItem alignItems='flex-start' key={review._id}>
      //         <ListItemAvatar>
      //           <Avatar />
      //         </ListItemAvatar>
      //         <ListItemText
      //           primary={`${review.username} - ${moment(review.time).format('HH:mm DD MMM')}`}
      //           secondary={<Typography
      //             sx={{ wordWrap: 'break-word' }}>{review.comment}</Typography>}
      //         />
      //       </ListItem>, <Divider />);
      //     });
      //     temp.length > 0 ? setReviews(temp) : setReviews(<Typography sx={{ display: 'flex', alignContent: 'center' }}>No
      //       reviews!</Typography>);
      //     //setLoading(false);
      //   });
      
    });
   
  }, [location, data]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const submit = async () => {
    //setLoading(true);
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //   const url = tabs[0].url.split('/')[2];
      // axios.post(process.env.base_url, {
      //   time: new Date().toISOString(),
      //   location: url,
      //   isLiked: true,
      //   username: 'choenix',
      //   comment: userInput,
      // })
      //   .then((res) => {
      //     setLoading(false);
      //     setUserInput('');
      //     setRerender(!rerender);
      //     setError(false);
      //   })
      //   .catch((err) => {
      //     setError(true);
      //     setLoading(false);
      //   });
    //});
    createComment({variables: {commentText: {
      time: new Date().toISOString(),
      location,
      isLiked: true,
      username: 'choenix',
      text: userInput,
    }}});
    setRerender(true)
  };


  return (
      <Container sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'spaceBetween',
        flexWrap: 'wrap',
        width: '100%',
        minWidth: '20rem',
        height: '100%'
        }}>
        <Stack>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="" />
            <p>Adam Lambert</p>
            
           </Stack>
           {/* <p>Review score: {reviews.isLiked}</p> */}
           <Stack direction="row" spacing={2}>
            <ThumbUpOffAltIcon color="success"/>
            <ThumbDownOffAltIcon color="error"/>
           </Stack>

           {/* <LinearProgress color="success" value={reviews.isLiked}/> */}
        </Stack>   
        
        <Stack sx={{ mt: 4 }} spacing={'2rem'} maxHeight={'10rem'}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {loading ? reviews.map(review => {
              return (
              <>
                <ListItem alignItems='flex-start' key={review._id}>
                   <ListItemAvatar>
                     <Avatar />
                </ListItemAvatar>
                <List>
                <ListItemText
                primary={`${review.username} - ${moment(review.time).format('HH:mm DD MMM')}`}
                secondary={
                <Typography
                  sx={{ wordWrap: 'break-word' }}>{review.text}
                  </Typography>
                }
              />
              </List>
                </ListItem>
                <Divider/>
              </>  
              )
            }) :
              <CircularProgress sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}
          </List>
        </Stack>


          <TextField
          error={error}
          value={userInput}
          onChange={handleUserInput}
          variant="outlined"
          label="Type your comment here"
          sx={{width: '100%', }}
          fullWidth
          autoComplete="off"
        />
                   
        <Button
          variant="contained"
          sx={{mt: 1,  }} 
          onClick={submit}
          size="small"
          color="inherit"
        >
          Send
        </Button>
            
      </Container>
  );
};

export default Popup;
