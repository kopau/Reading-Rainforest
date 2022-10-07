import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Map from './Map';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const greenStyle = {
  backgroundColor: '#9CFC97',
}

const tanStyle = {
  backgroundColor: '#FFCF9C',
}

const redStyle = {
  backgroundColor: 'red',
}

const imgStyle = {
  padding: '1px',
  width: '100px',
  height: '100px',
}

const coverStyle ={
  width: '180px',
  height: '220px',
}

const ConfirmedCard = (props) => {
  const [open, setOpen] = useState(false);
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);
  const [tradeLat, setTradeLat] = useState(null);
  const [tradeLng, setTradeLng] = useState(null);
  const [userBook, setUserBook] = useState(null);
  const [traderBook, setTraderBook] = useState(null);
  const [traderInfo, setTrader] = useState(null);

  const changeCompleted = function () {
    axios.put(`${process.env.REACT_APP_BE_URI}/trade/status`, {tradeId: props.trade.transactionID, status:'completed', uid: props.user.uid})
      .then(results => console.log(results))
      .catch ((err) => console.log(err))
    setTimeout(props.update(), 200);
  }

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.trade.isbnTrader}`)
      .then((results) => setTraderBook(results.data.items[0]))
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${props.trade.isbnUser}`)
      .then((results) => setUserBook(results.data.items[0]))
    axios.get(`${process.env.REACT_APP_BE_URI}/user/${props.trade.tradedToUser}/`)
      .then((results) => setTrader(results.data))
  }, [props.trade])

  useEffect(() => {
    if(traderInfo) {
      setUserLat(props.user.lat);
      setUserLng(props.user.long);
      setTradeLat(traderInfo.lat);
      setTradeLng(traderInfo.long);
    }
  }, [traderInfo])

  const handleOpen = function () {
    setOpen(true);
  }

  const handleClose = function () {
    setOpen(false);
  }

  return traderInfo && tradeLng && userBook && traderBook ? (
    <div>
      <Box sx={{borderRadius: '25px', width: '1100px', height: '315px', m:6, backgroundColor:"#BBDEF0"}}>
        <Stack direction="row" spacing={5} justifyContent="center">
          <div>
            <Card sx={{ minWidth: 215, maxWidth: 215, maxHeight: 245, m:1.5}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Trader's Info
                </Typography>
                <Typography variant="h5" component="div">
                  {traderInfo.name}
                </Typography>
                <img style={imgStyle} src={traderInfo.profilePhoto} alt =""/>
                <Typography sx={{ fontSize: 14, mb: 1 }} color="text.secondary">
                  {traderInfo.email}
                </Typography>
                <Typography sx={{ mb: 1}} color="text.secondary">
                  RATINGS
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{maxWidth: 215, maxHeight: 245, m: 1.5}}>
              <CardContent style={{margin: 0}}>
                <img style={coverStyle} src={traderBook.volumeInfo.imageLinks.thumbnail} alt=""/>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ overflow: 'auto', minHeight: 245, maxWidth: 215, maxHeight: 245, m:1.5}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Book to Receive
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                  {traderBook.volumeInfo.title}
                </Typography>
                <Typography sx={{ fontSize: 12, mb: 1 }} color="text.secondary">
                  By {traderBook.volumeInfo.authors[0]}
                </Typography>
                <Typography variant="body2" component="div">
                    {traderBook.volumeInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
          <Card sx={{ overflow: 'auto', minHeight: 245, maxWidth: 215, maxHeight: 245, m:1.5}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Book to Trade
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                  {userBook.volumeInfo.title}
                </Typography>
                <Typography sx={{ fontSize: 12, mb: 1 }} color="text.secondary">
                  By {userBook.volumeInfo.authors[0]}
                </Typography>
                <Typography variant="body2" component="div">
                    {userBook.volumeInfo.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Stack>
        <Stack direction="row" spacing={20} justifyContent="center">
          <Button style={greenStyle} variant="contained">Message</Button>
          <Button style={tanStyle} variant="contained" onClick={handleOpen}>Map</Button>
          <Button style={redStyle} variant="contained" onClick={changeCompleted}>Mark as Complete</Button>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Map userLat={userLat} userLng={userLng} tradeLat={tradeLat} tradeLng={tradeLng}/>
        </Box>
      </Modal>
    </div>
  ) : <></>
}

export default ConfirmedCard;