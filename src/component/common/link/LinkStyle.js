import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '../Style.css';

function LinkStyle({ name, imagename, to, value }) {
    console.log(value)
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'black', }}>
            <Typography
                className="hello"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    padding: 12,
                    paddingLeft: 40,
                }}>
                <img src={imagename} alt={imagename} style={{ height: 22, marginRight: 30 }} />
                <p style={{ fontWeight: 'bolder', margin: 0, padding: 0, opacity: 0.7 }}>{name}</p>
            </Typography>
        </Link>
    )
}

export default LinkStyle
