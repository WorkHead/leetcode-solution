和笔算加法的逻辑差不多，给方法添加第三个参数，用以传入上一位的相加结果，递归调用方法，每次拿到当前的数字相加，把结果append进上次的相加结果中，append的同时需要处理上一位的进位。