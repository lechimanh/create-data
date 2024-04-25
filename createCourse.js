import fs from 'fs';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomObject(index) {
    return {
        id: "",
        termId: "123456",
        courseName: `Nhập môn kinh doanh ${index.toString().padStart(2, '0')}`,
        classCredit: "MGT2902_49K01.2-E 1",
        semesterId: "343",
        synopsis: "MGT2902_49K01.2-E 1",
        courseTypeList: [
            "1367"
        ],
        teacherIds: [
            "51055552713"
        ],
        studentInfoList: [
            "51055552749",
            "41289327450"
        ],
        deptName: "Quản lý chung",
        hideFlag: "0"
    };
}

const objects = [];
var count = 0;
for (let i = 1; i <= 4000; i++) {
    count++;
    objects.push(createRandomObject(i));
}

fs.writeFileSync('courseData.json', JSON.stringify(objects, null, 4));

console.log('Đã tạo thành công ' + count + ' đối tượng và lưu vào file "courseData.json"');
