import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Page404 = () => {
	return (
		<div>
			<Helmet>
				<meta name='description' content='404 page. Page is not found' />
				<title>Page is not found</title>
			</Helmet>

			<ErrorMessage />
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
					marginBlock: '10px',
				}}
			>
				Page doesn't exist
			</p>
			<Link
				to='/'
				style={{
					display: 'block',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '28px',
					marginTop: '30px',
					textDecoration: 'underline',
				}}
			>
				Back to main page
			</Link>
		</div>
	);
};

export default Page404;
