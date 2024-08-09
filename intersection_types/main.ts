// Intersection
interface Student1 {
  student_Id: number;
  name: string;
}

interface Teacher1 {
  teacher_Id: number;
  teacher_name: string;
}

type intersected_type = Student1 & Teacher1;

let obj1: intersected_type = {
  student_Id: 3232,
  name: "abbas",
  teacher_Id: 7873,
  teacher_name: "ali",
};

console.log(obj1.teacher_Id);
console.log(obj1.name);
