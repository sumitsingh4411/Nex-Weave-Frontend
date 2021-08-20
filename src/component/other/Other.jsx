import React from 'react'
import { Link } from 'react-router-dom'

function Other() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 300 }}>
            <Link to='/' style={{
                fontSize: 24, fontWeight: 'bolder'
            }}>Go to home page</Link>
        </div>
    )
}

export default Other
