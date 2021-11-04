import React from 'react';
import './SaveList.css';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SaveList({ saves, loadSave, deleteSave }) {
  return (
    <div className="sidebar">
      <Typography>My Projects</Typography>
      <Paper style={ {maxHeight: 400, minWidth: 250, overflow: 'auto'} }>
        <List >
          {saves.length ? saves.map((name, key) =>
            <>
              <ListItem
                key={ key }
                secondaryAction={
                  <>
                    <IconButton
                      aria-label="load"
                      onClick={ () => loadSave(name) }
                    >
                      <FolderIcon/>
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={ () => deleteSave(name) }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText primary={ name }/>
              </ListItem>
              <Divider />
            </>
            ) :
            <ListItem>
              <ListItemText primary="No saved projects"/>
            </ListItem>
          }
        </List>
      </Paper>
    </div>
  )
};
