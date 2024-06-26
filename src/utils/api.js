const baseUrl = 'https://freeci.ci'
const apiRoutes = {
  'analyst.variants': baseUrl + '/api/all-variants',
  'analyst.variants.today': baseUrl + '/api/all-variants-today',
  'analyst.variants.period': baseUrl + '/api/all-variants-period',
  gfreelancer: baseUrl + '/api/g-freelancer',
  gmission: baseUrl + '/api/g-mission',
  gcontract: baseUrl + '/api/g-contract',
  gturnover: baseUrl + '/api/g-turnover'
}

export { apiRoutes, baseUrl }
