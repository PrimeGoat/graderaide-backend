/******************
 * YOUR CODE HERE *
 ******************/

const Grade = function(assignment, score) {
  return {
    assignment: assignment,
    score: score
  };
}

const Term = function(hours, grades = []) {
  return {
    addGrade: function(assignment, score) {
      //this.grades.push(Grade(assignment, grade));
      this.grades.push({assignment: assignment, score: score});
    },

    hours: hours,
    grades: grades
  };
}

const Course = function(name, terms = []) {
  return {
    addTerm: function(hours) {
      this.terms.push(Term(hours));
    },
    
    name: name,
    terms: terms
  };
}

const Student = function(name, course, term = 1) {
  return {
    addCourse: function(name) {
      this.courses.push(Course(name))
    },
    getAverage: function(courseName = "", termNum = "") {
      let allGrades = [];
      for(course of this.courses) {
        if(courseName == "" || course.name == courseName) {
          for(let i = 0; i < course.terms.length; i++) {
            if(termNum == "" || i == termNum) {
              for(grades of course.terms[i].grades) {
                allGrades.push(grades.score);
              }
            }
          }
        }
      }
      return allGrades.reduce((total, num) => (total + num)) / allGrades.length;
    },

    name: name,
    course: course,
    term: term,
    courses: []
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
