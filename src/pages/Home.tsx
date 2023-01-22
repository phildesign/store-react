import { Grid } from '@mui/material';

const Home = () => {
	return (
		<div>
			Home
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					1
				</Grid>
				<Grid item xs={6}>
					2
				</Grid>
				<Grid item xs={6}>
					3
				</Grid>
				<Grid item xs={6}>
					4
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
