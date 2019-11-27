module.exports = {
    publicPath: process.env.NODE_ENV === 'env02' || process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'stag'
      ? '/'
      : '/'
  }