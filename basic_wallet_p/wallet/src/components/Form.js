import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


function Form(props) {
   const {setUserId} = props;
   const classes = useStyles();

    function handleChange(e) {
        setUserId(
            e.target.value
        )
    }
    console.log(props)
    function handleSubmit(e) {
        e.preventDefault()
        props.history.push('/dashboard')
    }
    return (
        <div className='form-container'>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <TextField placeholder='User ID' name='userId'
                id="outlined-basic" label="User ID" variant="outlined" />
                <Button type='submit' id='view-wallet' variant="contained">View Wallet</Button>
            </form>
        </div>
    );
}

export default Form;