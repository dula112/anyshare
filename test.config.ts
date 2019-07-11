import * as path from 'path'

/**
 * 测试环境信息
 */
export const config = {
    protocol: 'http:',
    host: process.env.TESTCAFE_HOST,
    port: 80,
    siteId: 'e03e37bc-d37a-11e8-9fdd-005056826555',
    adminId: '266c6a42-6131-4d62-8f39-853e7093701c',
    thirdPartyPluginFilePath: path.resolve(__dirname, 'assets/test.tar.gz')
}

/**
 * 测试用账号
 */
export const testUser = {
    account: 'testcafe',
    password: 'EISOO.com123',
    displayName: 'TestCafe测试用户',
}

/**
 * 数据库信息
 */
export const dbInfo = {
    host: config.host,
    port: 3320,
    user: 'Anyshare',
    password: 'asAlqlTkWU0zqfxrLTed'
}

/**
 * ssh连接信息
 */
export const sshInfo = {
    host: '10.2.64.163',
    port: 22,
    username: 'root',
    password: 'driver'
}