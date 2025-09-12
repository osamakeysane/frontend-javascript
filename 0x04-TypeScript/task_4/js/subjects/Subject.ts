namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export interface Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void;
    getRequirements(): string;
    getAvailableTeacher(): string;
  }
}
