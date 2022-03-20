import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default {
    name: 'Po Nguyen',
    title: 'Software Engineer',

    birthday: 'May 29th, 1998',
    email: 'pnguye55@uncc.edu',
    address: '10353 Bunclody Dr, Charlotte, NC 28213',
    phone: '919-599-7006',
    socials: {
        Facebook: {
            link: 'https://www.facebook.com/ponguyennn/',
            text: 'My Facebook',
            icon: <FacebookIcon />,
        },
        Instagram: {
            link: 'https://www.instagram.com',
            text: 'My Instagram',
            icon: <InstagramIcon />,
        },
        LinkedIn: {
            link: 'https://www.facebook.com/ponguyennn/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />,
        },
        GitHub: {
            link: 'https://www.facebook.com/ponguyennn/',
            text: 'My GitHub',
            icon: <GitHubIcon />,
        }
    }
}