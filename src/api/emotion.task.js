import request from '@/plugin/axios'

export default {
  list (pageNum, pageSize) {
    return request({
      url: `/task/list/${pageNum}/${pageSize}`,
      method: 'get',
    })
  },

  create (data) {
    return request({
      url: '/task/create',
      method: 'post',
      data,
    })
  },

  getById (id) {
    return request({
      url: `/task/getById/${id}`,
      method: 'get',
    })
  },
}
