import React, { useEffect, useState } from 'react';

function BackendCheck() {
  const [message, setMessage] = useState('Checking backend...');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage('❌ Could not reach backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '20px' }}>
      <h2>Backend Connection Test</h2>
      <p>{message}</p>
    </div>
  );
}

export default BackendCheck;
