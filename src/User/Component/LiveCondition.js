import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './CssFiles/livecondition.css'
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import 'jquery.waitforimages';

function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Welcome On my website
            </Typography>
            {/* Your address form content goes here */}
        </React.Fragment>
    );
}

function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment details
            </Typography>
            {/* Your payment form content goes here */}
        </React.Fragment>
    );
}

function Review({ products, addresses, payments }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Booking recept
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ₹34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Other Charges
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

function CheckCarCondition() {
    useEffect(() => {
        $('.container-body').css({
            'background': 'none',
            'background-position': 'initial',
            'background-size': 'initial',
            'background-attachment': 'initial'
        });
    
        $('.container-body').fadeIn("slow");
        $('.preloader').fadeOut("slow");
    }, []);
    

    return (
        <div>
            <div className="preloader">
                <div className="spinner">
                    <p><div className="double-bounce1"></div></p>
                    <p><div className="double-bounce2"></div></p>
                </div>
                <p>Transferring you to payment</p>
            </div>

            <div className="container-body">
                <div className="container form-container">
                    <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-7 col-xlg-12">
                      
                        <div className="col-xs-12 col-sm-7 col-md-8 col-lg-8 col-lg-8 col-xlg-8 payment-details">
                            <p className="credit-card-title">Credit Card Details</p>
                            <p><input type="number" className="long-number" required placeholder="Account Number" /></p>
                            <select className="month-select minimal">
                                <option>Expiry Month</option>
                                {[...Array(12)].map((_, i) => <option key={i + 1}>{String(i + 1).padStart(2, '0')}</option>)}
                            </select>
                            <select className="year-select minimal">
                                <option>Expiry Year</option>
                                {[...Array(10)].map((_, i) => {
                                    const year = new Date().getFullYear();
                                    return <option key={i}>{year + i}</option>;
                                })}
                            </select>
                            <input type="number" className="security-code" placeholder="eg. 123" />
                            <p className="security-code-p">3 or 4 digits found on the signature strip</p>

                            <div className="bottom-buttons">
                                <div className="proceed">
                                    <button className="proceed-button">Proceed</button>
                                </div>
                                <div className="or">Or</div>
                                <div className="paypal">
                                    <button className="paypal-button">Pay with <i className="fa fa-paypal paypal-icon" aria-hidden="true"></i>PhonePay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getStepContent(stepIndex, products, addresses, payments) {
    switch (stepIndex) {
        case 0:
            return <AddressForm style={{ height: '100%' }} />;
        case 1:
            return <Review products={products} addresses={addresses} payments={payments} style={{ height: '100%' }} />;
        case 2:
            return <CheckCarCondition style={{ height: '100%' }} />;
        default:
            throw new Error('Unknown stepIndex');
    }
}

export default function LiveCondition() {



    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/userhome')
    }
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const steps = ['Welcome', 'Booking_recept', 'Check Car Condition'];

    const products = [
        {
            name: 'Car 1',
            desc: 'Issue_Date',
            price: '₹9.99',
        },
        {
            name: 'Car 2',
            desc: 'Issue_Date',
            price: '₹9.99',
        },
        { name: 'Other Charges', desc: '', price: 'Free' },
    ];

    const addresses = ['Siddheshwar nagar ', 'Morar', 'Gwalior', 'MP', '474006'];
    const payments = [
        { name: 'Car Model', detail: 'Toyota ' },
        { name: 'Car holder', detail: 'Car_holder_name' },
        { name: 'Car number', detail: 'MP07 XX 1233' },
        { name: 'return date', detail: '04/2024' },
    ];

    return (
        <div className='body'>
            <React.Fragment>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    color="default"
                    elevation={0}
                    sx={{
                        position: 'relative',
                        borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <Typography onClick={handleHome} variant="h6" color="inherit" noWrap>
                            <Button>  Car Rental & RMS</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container component="main" maxWidth="md" maxHeight="100vh" sx={{ mb: 12 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 12, md: 12,height:'200px' }, p: { xs: 12, md: 12 } }}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout Booking detail
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <React.Fragment>
                            {getStepContent(activeStep, products, addresses, payments)}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 12 }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 2 }}>
                                        Back
                                    </Button>
                                )}
                                {activeStep !== steps.length - 1 && (
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3 }}
                                    >
                                        Next
                                    </Button>
                                )}
                            </Box>
                        </React.Fragment>
                    </Paper>
                </Container>
            </React.Fragment>
        </div>
    );
}
