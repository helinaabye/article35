import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ApprovalIcon from '@mui/icons-material/Approval';


export const SidebardData = [
    {
        title:"Home",
        icon: <HomeIcon />,
        link :"/"
    },
    {
        title:"Profile",
        icon: <AccountCircleIcon />,
        link :"/profile"
    },
    {
        title:"New Blog",
        icon: <PostAddIcon />,
        link :"/home"
    },
    {
        title:"My Blogs",
        icon: <BookIcon />,
        link :"/home"
    },
    {
        title:"Approved Blogs",
        icon: <ApprovalIcon />,
        link :"/home"
    },
]

