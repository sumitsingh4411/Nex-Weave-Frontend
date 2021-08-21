import React from 'react'
import circle from '../../assets/images/sync-alt-solid.svg';
import { Button, Checkbox, FormControlLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './HeaderStyle.css';
function Top() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ marginLeft: 30 }}>
                    <p style={{ fontSize: 30, fontWeight: 'bolder', color: '#4D148C' }}>Campaigns</p>
                </div>
                <div style={{ marginRight: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ marginRight: 30 }}>
                        <img src={circle} alt="" style={{ height: 20 }} />
                    </div>
                    <Button variant="outlined" color="secondary" startIcon={<AddIcon />}>
                        Create a new Camaings
                    </Button>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p className="jay" >All Camaigns</p>
                    <p className="jay">Quick Camaigns</p>
                    <p className="jay">CSV Camaigns</p>
                    <p className="jay">URI over Camaigns</p>
                </div>
                <div>
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Show Archieved" />
                </div>
            </div>
        </div>
    )
}

export default Top
