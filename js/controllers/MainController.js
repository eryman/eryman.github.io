var projectImageDir = 'img/projects/';

app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Gene Ryman';
  $scope.subtitle = 'WordPress/Front End Web Developer';
  $scope.location = 'Port Jefferson, NY';
  $scope.email = 'gene.ryman@gmail.com';
  $scope.phone = '516.459.6257';
  $scope.github = 'http://github.com/eryman';
  $scope.linkedin = 'https://www.linkedin.com/in/gene-ryman';
  $scope.headshot = '';
  $scope.about = ['WordPress/Front End Web Developer, veteran educator, and small business owner with a passion for making promotional products.  Recently created a program that turns a Facebook page into a single-page website using Bootstrap, Angular, PHP, and the Youtube and Facebook Graph APIs. Looking to combine my love for promotion with my coding skills to connect your organization to a wider demographic.'];
  $scope.languages = ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'Python'];
  $scope.frameworks = ['WordPress', 'AngularJS', 'ReactJS', 'Bootstrap', 'SASS', 'Jasmine', 'jQuery'];
  $scope.other = ['RESTful APIs', 'JSON', 'AJAX', 'Sublime Text 3', 'Git', 'Grunt'];
  $scope.experience = [
    {
      company: 'Connetquot Central School District',
      title: 'Permanent Substitute Teacher',
      location: 'Bohemia, NY',
      dates: '2014-Present',
      description: ['Preferred sub for music department throughout district', 'Maintain classroom management procedures and follow lesson plans to create sense of continuity']
    },{
      company: 'Music Simply Music',
      title: 'Piano Facilitator',
      location: 'Long Island, NY',
      dates: '2013-Present',
      description: ['Provide private piano lessons for students of all ages from a variety of diverse backgrounds, including adult, early childhood, and special needs students', 'Prepare students for annual recitals as well as a variety of nursing home performances as part of “Share My Music,” the company’s community outreach program']
    },{
      company: 'Northern Highlands Regional High School',
      title: 'Choir Director, Theory/General Music Teacher, Music Director, Accompanist',
      location: 'Allendale, NJ',
      dates: '2008-2013',
      description: ['Incorporated pop a cappella music into the repertoire of The Highlands Belles, a women’s choir; led group to the semifinals at the Intercollegiate High School A Cappella competition', 'Developed curriculum and created a new general music class based around American popular music of the past 100 years. Course included cross-curricular elements and technology integration, and adhered to New Jersey Core Curriculum Content Standards', 'Integrated student-centered learning techniques into my Honors Music Theory class by incorporating more group work and composition-based assignments, allowing students the opportunity to experiment with new concepts and musical constructs currently being learned', 'Nominated for “Best Music Direction” at the Metropolitan High School Theatre Awards four times for my work as music director for the school’s annual musical theatre productions']
    }
  ];
  $scope.accomplishments = [
    {
      organization: 'Ramapo College of New Jersey ',
      position: 'Guest Lecturer on Music Theory for Songwriting',
      dates: '2014'
    },{
      organization: 'Wanaque Elementary School Theatre Department',
      position: 'Music Director',
      dates: '2011'
    },{
      organization: 'NJSMA Region 1 High School Choir',
      position: 'Accompanist',
      dates: '2010'
    }
  ];
  $scope.references = [
    {
      name: 'Nick Ambrosino',
      position: 'Founder, Owner',
      organization: 'Music Simply Music',
      file: 'credentials/ambrosino.jpg',
    },{
      name: 'Tom Paster',
      position: 'Choir Director',
      organization: 'Northern Highlands Regional High School',
      file: 'credentials/paster.jpg',
    },{
      name: 'Joseph Occhino',
      position: 'Principal',
      organization: 'Northern Highlands Regional High School',
      file: 'credentials/occhino.jpg',
    },{
      name: 'Ava',
      position: 'Student',
      organization: 'Northern Highlands Regional High School',
      file: 'credentials/ava.jpg',
    }
  ];
  $scope.certs = [
    {
      title: 'Professional Public School Teacher (Music) Certificate',
      state: 'State of New York',
      file: 'credentials/cert-ny.png'
    },{
      title: 'Teacher of Music - Standard Certificate',
      state: 'State of New Jersey',
      file: 'credentials/cert-nj.png'
    }
  ]
  $scope.education = [
    {
      school: 'Boston University',
      program: 'Music Education',
      degree: 'MM',
      graduated: 'June 2012'
    },{
      school: 'SUNY Potsdam',
      program: 'Musical Studies',
      degree: 'BM',
      graduated: 'May 2007'
    }
  ];
  $scope.projectModal = [
    {
      name: null,
      screenshot: null,
      languages: null,
      description: null,
      date: null,
      githubLink: null
    }
  ];
  $scope.belles = [
    {
      name: 'Highlands Belles',
      age: 'Grades 9-12',
      objectives: ['Students will get experience singing a variety of challenging art and popular music, both accompanied and a cappella', 'Students will have opportunity to take music learning and group management into their own hands, assisting with choreography, costumes, and musical arrangements'],
      description: ['The Highlands Belles women’s choir was started by my coworker (a few years before I began teaching there) as one of two extracurricular honors choirs. The top honors choir was SATB but, as is common in a school choir program, substantially more girls than boys auditioned – so much more that he was able to start a women’s choir just with all of the exceptional female singers that didn’t make the SATB group. The group met for one two-hour long full rehearsal and one shorter section rehearsal for each individual section per week', 'I took over the choir in my second year of teaching (after accompanying and helping out with sectional rehearsals my first year) and transitioned the group from being mainly an art music choir to being a choir that performed both art music and a cappella pop music.', 'The integration of the pop a cappella style opened up whole new avenues for direct student involvement in the group. Individual students now had opportunities to choreograph the dances to each song, design group costumes, and even arrange music, all with instructor supervision, of course.', 'Beginning in my third year directing the group, we began participating in the national Intercollegiate High School a Cappella competition which, to this day, is still a tradition for the group. In my fourth year with the group, we made it to the semifinals.'],
      tech: ['Finale (for student arrangers)', 'ProTools (to record rehearsals and to record, mix, and master performances)'],
      id: 'belles',
      next: 'Honor Music Theory',
      nextHref: '#hmt'
    }
  ]
  $scope.courses = [
    {
      name: 'Honors Music Theory',
      age: 'Grades 10-12',
      duration: 'Full year course',
      prerequisites: 'Must be in band or choir or, if student is a musician but not involved in the school music program, they must pass an aptitude test on basic pitch/rhythm notation',
      objectives: ['Students will be able to perform melodic and harmonic analysis and composition/arranging with diatonic chords and pitches', 'Students will understand and recognize style characteristics of music from the three periods of the Common Practice Era as well as certain forms of modern pop music', 'Students will be able to aurally recognize and imitate intervals, scales, and melody using solfege'],
      method: ['The Honors Music Theory course was taught as a combination of teacher-centered and student-centered learning. New concepts were first taught through lecture and repetition by means of classwork and homework. Once students had a grasp on the new material, they would break up into their groups or “bands” and experiment with these new concepts through improvisation and composition.', 'Students would also have the opportunity to work on their musical ear through solfege singing of intervals, scales, and melody, as well as dictation of the same. This was typically worked on as a class and tested individually and privately.', 'Aside from basic musical constructs, students also learned about style characteristics of the Baroque, Classical, and Romantic periods, as well as some blues and jazz. Historical context, including biographical information about composers, was taught alongside the style characteristics to paint a fuller picture of each musical era. Activities included listening to recordings and performing simple analyses of key, melody, harmony, rhythm, and instrumentation.'],
      assessments: 'Assessments for this course included exams, compositions (with rubrics outlining expectations for both the final copy of the composition as well as the students’ performance of said composition), weekly quizzes, classwork, and homework.',
      tech: ['Finale (for creating a clean, readable copy of their compositions)', 'ProTools (for recording performances of student compositions)'],
      syllabus: 'courses/hmt/syllabus.pdf',
      lessonplan: 'courses/hmt/lessonplan.pdf',
      assignment: 'courses/hmt/assignment.pdf',
      studentwork: 'courses/hmt/studentwork.pdf',
      exam: 'courses/hmt/exam.pdf',
      id: 'hmt',
      next: 'AP Music Theory',
      nextHref: '#apmt'
    },{
      name: 'AP Music Theory',
      age: 'Grades 11-12',
      duration: 'Full year course',
      prerequisites: 'Successful completion of Honors Music Theory',
      objectives: ['Students will be able to perform melodic and harmonic analysis and composition/arranging with chromatic chords and pitches', 'Students will understand and recognize style characteristics of music from the three periods of the Common Practice Era as well as certain forms of modern pop music', 'Students will be able to aurally recognize, imitate, and notate intervals, scales, melody, and harmony using solfege'],
      method: ['Like the Honors Music Theory course, AP Music Theory was taught as a combination of teacher-centered and student-centered learning. New concepts were first taught through lecture and repetition by means of classwork and homework. Unlike the Honors course however, in which the compositions were a bit “freestyle,” with students using simple constructs such as chords and melodic devices to compose in the genre/style of their choosing, composition assignments in the AP course were much more regimented, with students composing in specific Common Practice Era forms and styles, such as inventions, rondos, and waltzes.', 'Students moved beyond simple ear training with diatonic intervals, scales, and melody, to begin working with chromatic pitches and harmonic dictation. Like in the Honors course, this was typically worked on as a class and tested individually and privately.', 'Style characteristics of music from the Common Practice Era would be revisited as well, but with a much more in depth approach than in the Honors course. Students studied form and performed in depth melodic and harmonic analysis on various pieces of music from the Baroque, Classical, and Romantic eras.', 'Beyond all of this, students also spent a great deal of time working through AP review questions, obtained from the CollegeBoard site as well as the Barron’s review book. These were given as homework and included on exams.'],
      assessments: 'Assessments for this course included exams, compositions (with rubrics outlining expectations for both the final copy of the composition as well as the students’ performance of said composition, when applicable), weekly quizzes, classwork, and homework.',
      tech: ['Finale (for creating a clean, readable copy of their compositions)', 'ProTools (for recording performances of student compositions)'],
      syllabus: 'courses/apmt/syllabus.pdf',
      lessonplan: 'courses/apmt/lessonplan.pdf',
      assignment: 'courses/apmt/assignment.pdf',
      studentwork: 'courses/apmt/studentwork.pdf',
      exam: 'courses/apmt/exam.pdf',
      id: 'apmt',
      next: 'Evolution of Popular Music',
      nextHref: '#epm'
    },{
      name: 'Evolution of Popular Music',
      age: 'Grades 9-12',
      duration: 'Half year course',
      prerequisites: 'None',
      objectives: ['Students will be able to discern between different styles of popular music from the last century', 'Students will understand the historical context of the evolution of various musical styles'],
      method: ['The purpose of the Evolution of Popular Music course is to allow students to learn about the history and evolution of the music they listen to on a regular basis. This course was developed with both musicians and non-musicians in mind. The student-centered nature of the class allowed students to pick the music they want to research from each decade, allowing their own musical proclivities to guide their learning. All in all, the course was designed to help students expand their own musical tastes.', 'Structurally, the course works as follows: First, the instructor gives a lecture and some reading assignments on the decade being covered to present historical and musical context. Then, each student studies their own choice of musician or genre (from a prescribed list) and present their findings to the class in the form of a PowerPoint presentation which included historical/biographical context as well as five recordings and analyses of the music, generally in terms of instrumentation, structure, and lyrics. After students had their opportunity to present, an exam would be given, which included questions on history, style, and a listening section in which students would have to name certain songs and their genres.', 'Students who happened to be musicians were invited to perform music rather than play a recording during their presentation for extra credit.'],
      assessments: 'Assessments included unit exams, student presentations (with a checklist outlining expectations), listening quizzes, and reading assignments for classwork and homework.',
      tech: ['PowerPoint (for student presentations)', 'ProTools (to record students on the occasion that they chose to perform music rather than play a recording)'],
      syllabus: 'courses/epm/syllabus.pdf',
      lessonplan: 'courses/epm/lessonplan.pdf',
      assignment: 'courses/epm/assignment.pdf',
      studentwork: 'courses/epm/studentwork.pdf',
      exam: 'courses/epm/exam.pdf',
      id: 'epm',
      next: 'Contact Me',
      nextHref: '#contact'
    }
  ]
  $scope.getProject = function(){
    console.log(this);
    $scope.projectModal.name = this.project.name;
    $scope.projectModal.screenshot = this.project.screenshot;
    $scope.projectModal.languages = this.project.languages;
    $scope.projectModal.description = this.project.description;
    $scope.projectModal.date = this.project.date;
    $scope.projectModal.githubLink = this.project.githubLink;
    setTimeout(function(){$('.modal').css('padding-right', '0');}, 200);
  }
  $scope.stretchModal = function(){
    $('.modal').css('padding-right', '0');
  }
}]);