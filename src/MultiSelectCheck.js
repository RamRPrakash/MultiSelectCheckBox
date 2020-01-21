import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
const MenuProps = {
  PaperProps: {
    style: {
      // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
var names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

class MultiSelectCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: []
    };
  }
  handleChange = e => {
    var data = e.target.value;
    this.setState({
      personName: data
    });
    console.log(this.state.personName);
  };
  render() {
    return (
      <div>
        <div>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={this.state.personName}
            onChange={this.handleChange}
            input={<Input />}
            renderValue={selected => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={
                    this.state.personName.indexOf(name) === -1 ? false : true
                  }
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    );
  }
}

export default MultiSelectCheck;
