import React, { useState } from 'react';

const DialogflowComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialogflow = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleDialogflow}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: '9999',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    outline: 'none',
                }}
            >
                {isOpen ? 'Close ChatBot' : 'Open ChatBot'}
            </button>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '70px',
                    right: '20px',
                    zIndex: '9999', // Ensure it's above other elements
                }}>
                    <iframe
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/15bcd981-6215-4a16-8342-8286f8f5cc8f">
                    </iframe>
                </div>
            )}
        </div>
    );
}

export default DialogflowComponent;
