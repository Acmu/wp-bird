import styles from './a.less';

console.log(styles);

const divElement = document.createElement('div');
divElement.className = divElement.innerHTML = styles.wrapper;
document.body.append(divElement);

const firstName = 'Mingyuan';
const lastName = 'Zheng';

console.log(`I'm ${firstName} ${lastName}`);

// zm

export const a = 'hello ts';
