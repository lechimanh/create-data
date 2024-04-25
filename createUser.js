import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        name: `Mạnh Test ${index.toString().padStart(2, '0')}`,
        mobile: `035${getRandomInt(1000000, 9999999)}`,
        email: `manhchile${getRandomInt(1000000, 9999999)}@gmail.com`,
        no: getRandomInt(10000000000, 99999999999).toString(),
        deptName: 'Khoá K24',
        newPassword: '',
        userType: '2'
    };
}

const objects = [];
var count = 0;
for (let i = 1; i <= 4000; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('userData.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "userData.json"');
