/**
 * @description 简单方便打 tag
 */

// 使用 npm version minor 等可以自动打 tag，此脚本可废弃
const path = require('path');
const childProcess = require('child_process');
const curVer = `v${require('../package.json').version}`;

const isDel = process.argv.slice(2).includes('DEL');

const main = async () => {
  try {
    await new Promise((resolve, reject) => {
      childProcess.exec(
        `git tag ${isDel ? '-d' : ''} ${curVer}`,
        { cwd: path.join(__dirname, '..') },
        error => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        },
      );
    });
  } catch (error) {
    console.log('报错啦', error);
  }
};
main();

/**
 * https://www.jianshu.com/p/cdd80dd15593
 *
 * 远程删除标签 git push origin :refs/tags/v1.0.0
 * 更新全部标签到远程 git push origin --tags
 * 更新单个标签到远程 git push origin v1.0.0
 * 查看全部标签 git tag
 */
