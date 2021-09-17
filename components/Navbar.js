import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/dist/client/router';
import { doSignOut } from '../Firebase/client/firebase';
import { Context } from '../Firebase/client/AuthReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {

  const router = useRouter();

  const classes = useStyles();
  const { state } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => router.push('/')}>
              <a className="nav-link active" aria-current="page">Home</a>
            </li>
            {(
              state.authUser ? (
                <>
                  <li className="nav-item" onClick={() => router.push('/dashbord')}>
                    <a className="nav-link">Dashbord</a>
                  </li>
                  <li className="nav-item" onClick={() => {
                    doSignOut()
                      .then(() => {
                        router.push('/login');
                      })
                      .catch(err => console.log("Error: ", err));

                  }}>
                    <a className="nav-link">Logout</a>
                  </li>
                </>) : (
                <>
                  <li className="nav-item" onClick={() => router.push('/register')}>
                    <a className="nav-link">Register</a>
                  </li>
                  <li className="nav-item" onClick={() => router.push('/login')}>
                    <a className="nav-link">Login</a>
                  </li>
                </>
              )
            )}

          </ul>



        </div>
      </div>
    </nav>


  );
}
