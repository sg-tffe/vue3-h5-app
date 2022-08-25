const host = process.env.NODE_ENV === 'production' ? '/tf' : '/api'

export const siteApi = {
  getList: `${host}/session/getlist`
}
