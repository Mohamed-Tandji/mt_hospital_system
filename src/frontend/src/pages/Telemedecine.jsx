import React from 'react'
import Header from './header'
import Footer from './footer'

const Telemedecine = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
    <Header />
       

        <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px',  backgroundColor: '#d2e8d2' }}>
            <div style={{ height: '100vh', width: '100vw' }}>
                <iframe
                src="http://localhost:8501" 
                style={{ height: '100%', width: '100%', border: 'none' }}
                title="Streamlit Application"
                allow="camera; microphone"
                />
            </div>
        </div>

    <Footer />
</div>

  )
}

export default Telemedecine