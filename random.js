// 这是一个外部引用的js文件，用来实现一些通用的功能

// 定义一个函数，用来获取本地存储中的数据，并转换成对象格式
function getStorage(key) {
    var value = localStorage.getItem(key); // 获取本地存储中的数据
    if (value) {
        return JSON.parse(value); // 如果有数据，就转换成对象格式并返回
    } else {
        return null; // 如果没有数据，就返回null
    }
}

// 定义一个函数，用来将对象格式的数据保存到本地存储中
function setStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // 将对象格式的数据转换成字符串，并保存到本地存储中
}

// 定义一个函数，用来获取本地存储中的所有班级名字，并返回一个数组
function getClasses() {
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        return Object.keys(data); // 如果有数据，就返回对象的所有属性名，即班级名字
    } else {
        return null; // 如果没有数据，就返回null
    }
}

// 定义一个函数，用来根据班级名字获取本地存储中的对应人员名单，并返回一个数组
function getNamesByClass(className) {
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        return data[className]; // 如果有数据，就返回对象的属性值，即人员名单
    } else {
        return null; // 如果没有数据，就返回null
    }
}

// 定义一个函数，用来根据班级名字和人员名单更新本地存储中的数据
function updateNamesByClass(className, names) {
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        data[className] = names.split(" "); // 如果有数据，就将人员名单字符串用空格分隔成数组，并设置对象的属性值
    } else {
        data = {}; // 如果没有数据，就创建一个空对象
        data[className] = names.split(" "); // 将人员名单字符串用空格分隔成数组，并设置对象的属性值
    }
    setStorage("data", data); // 将更新后的对象保存到本地存储中
}

// 定义一个函数，用来根据班级名字新建或删除本地存储中的数据
function createClass(className) {
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        data[className] = []; // 如果有数据，就在对象中添加一个新属性，值为空数组
    } else {
        data = {}; // 如果没有数据，就创建一个空对象
        data[className] = []; // 在对象中添加一个新属性，值为空数组
    }
    setStorage("data", data); // 将更新后的对象保存到本地存储中
}

function removeClass(className) { 
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        delete data[className]; // 如果有数据，就在对象中删除指定的属性
        setStorage("data", data); // 将更新后的对象保存到本地存储中
    } else {
        return; // 如果没有数据，就什么都不做
    }
}

// 定义一个函数，用来检查并删除本地存储中的名字为空的班级
function removeEmptyClass() {
    var data = getStorage("data"); // 获取本地存储中的数据
    if (data) {
        delete data[""]; // 如果有数据，就在对象中删除名字为空的属性
        setStorage("data", data); // 将更新后的对象保存到本地存储中
    } else {
        return; // 如果没有数据，就什么都不做
    }
}
