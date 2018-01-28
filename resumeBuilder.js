var bio = {
    "name" : "ـJana Ali",
    "role" : "CS student",
    "contacts" : {
        "email" : "vip-j-123@hotmail.com",
        "github" : "Ja20na",
       
    },
    "picture": "icon.jpg",
    "welcomeMessage": "Hello! I'm a student in Albaha Univercity ",
    "skills": ["HTML", "CSS", "JS"]
};

var works = {
    "jobs": [
        {
           "I don't have a work yet!"
};

var projects = {
	"projects": [
		{
			"title": "html page",
			
			"url": "https://github.com/Ja20na/jana-pro1-"
		};
		

var education = {
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Frontend Web Development Nanodegree",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "school": "Albaha Univercity",
            "title": "CS",
            "url": "http://portal.bu.edu.sa/"
        }
    ]
};



var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);

for (var i = 0; i < formattedContactInfo.length; i++) {
    $('#topContacts').append(formattedContactInfo[i]);
    $('#footerContacts').append(formattedContactInfo[i]);
}

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkills);
    }
}

works.display = function() {
    if (works.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);

        for (var job in works.jobs ) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', works.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', works.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', works.jobs[job].location);
            var formattedWorkDate = HTMLworkDates.replace('%data%', works.jobs[job].workDate);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', works.jobs[job].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkDate);
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        $('#projects').append(HTMLprojectStart);


        for (var i in projects.projects) {
            var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[i].datesWorked);
            var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);


            $('.project-entry:last').append(formattedProjTitle);
            $('.project-entry:last').append(formattedProjDates);
            $('.project-entry:last').append(formattedProjDescription);


            if (projects.projects[i].images.length > 0) {
                for(var img in projects.projects[i].images) {
    				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
    				$(".project-entry:last").append(formattedProjectImage);
    			}
            }

        }
    }
};

education.display = function() {
    if(education.onlineCourses.length > 0) {
        $('#education').append(HTMLschoolStart);

        if(education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title );
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school );
                var formattedComplated = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates );
                var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url );
                // var formattedProjImg = HTMLprojectImage.replace('%data%', projects.projects[i].images);
                $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                $('.education-entry:last').append(formattedComplated);
                $('.education-entry:last').append(formattedURL);

            }
        }
    }
};

$('#mapDiv').append(googleMap);
works.display();
projects.display();
education.display();
