import React from 'react'
const styles = () => ({
  footer: {
    color: 'white',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#37474f',
    minHeight: '20vh',
    paddingBottom: '2rem',
    fontFamily: 'Lato',
    fontSize: '15.5px',
    letterSpacing: '1.5px',
  },
})
export default () => <div style={styles().footer}>© 2018 PROJECT CHICKENS STUDIO</div>