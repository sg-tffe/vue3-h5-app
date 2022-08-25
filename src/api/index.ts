import axiosInstance from '@/interceptors/axios'
import { siteApi } from '@/constants/api'
import { Result } from '@/constants/variableType'

export const getList = (data: any, callback?: any) => {
  axiosInstance({
    method: 'post',
    url: siteApi.getList,
    data
  }).then((res: Result) => {
    callback(res)
  })
}
