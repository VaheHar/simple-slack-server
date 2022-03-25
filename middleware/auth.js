import jwt from 'jsonwebtoken';

const secret = 'task';

export const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		let decodedData;

		if (token) {
			decodedData = jwt.verify(token, secret);

			res.userId = decodedData?.id;
		}
		next();
	} catch (error) {
		console.log(error);
	}
};