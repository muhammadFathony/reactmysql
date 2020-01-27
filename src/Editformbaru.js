import React, { useState } from 'react'

const EditUserForm = props => {

    return (
        <form>
            <label>Edit Judul</label>
            <input type="text" name="judul"  />
            <label>Edit Isi</label>
            <input type="text" name="isi"  />
            <button>Update promo</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
        </form>
    )
}

export default EditUserForm