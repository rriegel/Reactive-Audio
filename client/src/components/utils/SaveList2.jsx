import React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SaveList2() {

  const generate = (element) => {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <List dense={dense}>
      { generate (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>,
      )}
    </List>
  )
};

