import styles from './a.less';

console.log(styles);

const divElement = document.createElement('div');
divElement.className = divElement.innerHTML = styles.wrapper;
document.body.append(divElement);

export const a = 'hello ts';
