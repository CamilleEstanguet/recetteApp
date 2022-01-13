module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '421a60375e4894102b8190e388e49f4b'),
  },
});
