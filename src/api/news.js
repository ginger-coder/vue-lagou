import http from './index'
//新闻类api
export default {
  getNews: (params) => { return http.get('/api/cms/cmsinfo/querytop', { ...params }) },
  advList: (params) => { return http.get('/api/advert/advertinfo/querytop', { ...params }) },
  getBanner: (params) => { return http.get('/api/cms/cmsinfo/querytop', { ...params }) }
}
