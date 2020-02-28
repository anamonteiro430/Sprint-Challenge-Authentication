//comes from index.js and reads the secrets
//i can change the scret in just here

module.exports = {
	jwtSecret: process.env.JWT_SECRET || 'supersecret'
};
