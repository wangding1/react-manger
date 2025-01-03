import styles from './Login.module.less'
import { Form, Input, Button, App } from 'antd'
import { useState } from 'react'
import { Login } from '@/types/api'
import { login } from '@/api/index'
import storage from '@/utils/storage'
import { message } from '@/utils/AntdGlobal'

function LoginFc() {
  const [loading, setLoading] = useState(false)
  async function onFinish(values: Login.params) {
    setLoading(true)
    let res = await login(values)
    setLoading(false)
    storage.set('token', res)
    const params = new URLSearchParams(location.search)
    message.success('登录成功')
    setTimeout(() => {
      location.href = params.get('callback') || '/welcome'
    }, 1000)
    try {
    } catch (error) {}
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form name='basic' onFinish={onFinish} autoComplete='off'>
          <Form.Item name='userName' rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='userPwd' rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' block htmlType='submit' loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginFc
