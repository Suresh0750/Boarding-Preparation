let studentNames = ['suresh','akil','sanooj','hari','jithin']


function studentPortal(allStudents,studentsName){
     for(let i=0;i<allStudents.length;i++){
        if(studentsName==allStudents[i]) return i
     }
}


console.log(studentPortal(studentNames,'hari'))