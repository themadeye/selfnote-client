
import React, {useState, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import JoditEditor from "jodit-react";

export default function AddressForm(props) {
  
	// const editor = useRef(null)
  const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	const [content, setContent] = useState('')
  //Send input value to parent state
  const handleChange = name => event => {
    console.log('form onchange', event.target.value)
    console.log('form onchange name', name)
    props.onChange({
      [name]: event.target.value
    });
  };

  const editorChange = name => event=> {
    console.log('editor event', event)
    console.log('editor name', name)
    props.onChange({
      [name]: event
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Note Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="major"
            name="major"
            label="Major"
            fullWidth
            value={props.value}
            onChange={handleChange('major')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="subcategory"
            name="subcategory"
            label="Sub-category"
            fullWidth
            value={props.value}
            onChange={handleChange('subcategory')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            fullWidth
            value={props.value}
            onChange={handleChange('title')}
          />
        </Grid>
        <Grid item xs = {12}>
        <JoditEditor
          // ref={editor}
          value={content}
          config={config}
          name="details"
          tabIndex={1} // tabIndex of textarea
          // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={editorChange('details')}
        />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}