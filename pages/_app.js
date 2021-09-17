import { FirebaseAuthListenner } from '../Firebase/client/AuthContext';
import { Provider } from '../Firebase/client/AuthReducer';

import '../styles/globals.css';
function MyApp({ Component, pageProps, data }) {

  return (
    <Provider>
      <FirebaseAuthListenner>
        <Component {...pageProps} />
      </FirebaseAuthListenner>
    </Provider>
  )
}

export default MyApp
