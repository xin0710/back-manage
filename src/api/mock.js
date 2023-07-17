import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import premission from './mockServeData/premission'
import user from './mockServeData/user'

//定义mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

//用户列表的数据
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
//根据后端的接口模拟出的数据
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',premission.getMenu)