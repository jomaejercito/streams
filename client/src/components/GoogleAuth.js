import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '537822661394-da6lq198fh8aediiqv3642ckjbmdd337.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  
  render() {
    return (
      <div>
        Google Auth
      </div>
    )
  }
}

export default GoogleAuth;