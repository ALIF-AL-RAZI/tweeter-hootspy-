/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-return */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { Avatar, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import useAuth from 'hooks/useAuth';
// import axios from 'axios';
// import { ReactSession } from 'react-client-session';
import TweetsyConfig from 'TweetsyConfig';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment';

// const BASE_URL = TweetsyConfig.getNodeUrl();
// ==============================|| SETTINGS PAGE ||============================== //

const Settings = () => {
    const navigate = useNavigate();
    const { twitter, dbUser, isExpired } = useAuth();
    const [plan, setPlan] = useState({
        title: '',
        description: ''
    });
    const [subscribeInfo, setSubscribeInfo] = useState();

    const theme = useTheme();
    return (
        <MainCard sx={{ minHeight: '100%' }}>
            <Typography variant="h3">Settings</Typography>
            <Box
                sx={{
                    background: '#F1F5FB',
                    p: 3,
                    mt: 4,
                    borderRadius: '10px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2
                    }}
                >
                    <Avatar src={twitter?.photoUrl || dbUser?.profileIMG} variant="rounded" sx={{ height: 54, width: 54 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4">{dbUser.name}</Typography>
                        {/* <Typography variant="body" sx={{ color: '#B7BFC8' }}>
                            {twitter.screenName}
                        </Typography> */}
                    </Box>
                </Box>
                <Divider sx={{ mt: 3, mb: 2 }} />

                <Typography sx={{ color: '#B7BFC8' }}>Email:</Typography>
                <Typography variant="h4" sx={{ fontWeight: 500 }} color={theme.palette.grey[700]}>
                    {dbUser.email}
                </Typography>
            </Box>
            <Typography color={theme.palette.grey[500]} sx={{ mt: 5, mb: 2 }}>
                Subscription :
            </Typography>

            <Box
                sx={{
                    background: '#F1F5FB',
                    p: 3,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: 2,
                    width: '100%'
                }}
            >
                <Avatar src="logo-only.png" variant="rounded" sx={{ height: 53, width: 53, background: 'white', p: '5px' }} />
                <Box>
                    <Typography
                        sx={{
                            color: theme.palette.grey[600],
                            fontWeight: 500
                        }}
                    >
                        {isExpired === true ||
                            (subscribeInfo?.current_period_end && new Date(subscribeInfo.current_period_end) < Date.now())
                            ? 'Subscription/Trial Expired.'
                            : plan?.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.grey[400]
                        }}
                    >
                        {isExpired === true ||
                            (subscribeInfo?.current_period_end && new Date(subscribeInfo.current_period_end) < Date.now())
                            ? 'Please Subscribe To A New Plan. Your Current Subscription/Trial Has Expired.'
                            : plan?.description}
                    </Typography>
                    {/* <Typography
                        sx={{
                            color: theme.palette.grey[400]
                        }}
                    >
                        Subscription Left :
                        {subscribeInfo?.current_period_end
                            ? moment.duration(moment(subscribeInfo?.current_period_end).diff(moment())).asDays()
                            : 0}
                        days
                    </Typography> */}
                </Box>
                {isExpired === true || (subscribeInfo?.current_period_end && new Date(subscribeInfo.current_period_end) < Date.now()) ? (
                    <Typography
                        sx={{
                            color: theme.palette.grey[400],
                            marginLeft: 'auto',
                            marginRight: '0'
                        }}
                    >
                        <Button onClick={() => navigate('/subscription')} variant="contained">
                            Subscribe Now
                        </Button>
                    </Typography>
                ) : (
                    ''
                )}
            </Box>
        </MainCard>
    );
};

export default Settings;
