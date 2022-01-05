module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fbe638d753c9e7690a2e6f5cb7b45339'),
  },
});
