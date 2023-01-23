import { Grid } from '@mui/material';

const Header = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={4}>
				1
			</Grid>
			<Grid item xs={6}>
				2
			</Grid>
			<Grid item xs={2}>
				3
			</Grid>
		</Grid>
	);
};

export default Header;
