import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const CardComponent = (props:any) => {

    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
                {/* <Card variant="outlined"> */}
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Mayr group
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Residential
                        </Typography>
                        <Typography variant="body2">
                            availble for NYSE
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                {/* </Card> */}
            </Box>
        </div>
    )
}