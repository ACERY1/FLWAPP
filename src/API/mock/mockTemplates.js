/* 手动添加返回数据示例 */
const StudentCenter = {
	'code': 0,
	'msg': '成功',
	'data': {
		'name': '郭小纲',
		'avatar': '/avatar',
		'sex': 1,
		'schoolId': 1,
		'profession': '电子信息工程',
		'status': 1,
		'redFlowerNum': 0,
		'tutorNum': 0,
		'workedTime': 0
	}
}

const TutorCenter = {
	'code': 0,
	'msg': '成功',
	'data': {
		'name': '郭德纲',
		'avatar': '/avatar',
		'isTutor': 1,
		'trade': 1,
		'company': '德云科技有限公司',
		'position': 'CEO',
		'redFlowerNum': 2,
		'stuNum': 2,
		'clockNum': 2
	}
}

const UserLogin = {
	'code': 0,
	'msg': '登录成功',
	'data': {
		'role': 1
	}
}
const UserInviteCodeCheck = {
	'code': 0,
	'msg': '邀请码可用'
}

const UserVerifyCode = {
	'code': 0,
	'msg': '验证码发送成功'
}

const UserVerifyCodeCheck = {
	'code': 0,
	'msg': '验证码正确'
}

const UserRegister = {
	'code': 0,
	'msg': '注册成功',
	'data': {
		'role': 1
	}
}

const Test = {
	'list|1-10': [
		{'id|10': 1}
	]
}

export {
	UserLogin,
	UserInviteCodeCheck,
	UserVerifyCode,
	UserVerifyCodeCheck,
	UserRegister,
	StudentCenter,
	TutorCenter,
	Test
}
