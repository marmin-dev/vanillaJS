const student = (age) => {
  switch (age) {
    case 25:
      console.log("학생이 아닙니다");
      break;
    case 20:
      console.log("대학생입니다");
      break;
    case 17:
      console.log("고등학생입니다");
      break;
    case 14:
      console.log("중학생입니다");
      break;
    case 8:
      console.log("초등학생입니다");
      break;
    default:
      console.log("학생이 아닙니다");
      break;
  }
};
student(24);
student(17);
