//const { set } = require("../api/server");

console.log('Admin js Loaded');

//<i class="fa fa-user-md" aria-hidden="true"></i>

//let DOMAIN_NAME = 'https://adconnect.co.ke/';
let DOMAIN_NAME = 'http://127.0.0.1:3000/';
let API_PATH = 'api/';
const DOMAIN = `${DOMAIN_NAME}${API_PATH}`;

const inputUserName = document.getElementById('name');
const inputUserEmail = document.getElementById('userEmail');
const inputUserRole = document.getElementById('role');
const inputUserAccess = document.getElementById('access');
const inputUserPassword = document.getElementById('userPassword');
const inputUserSearch = document.getElementById('searchUserInput');
const inputLeadSearch = document.getElementById('searchLeadsInput');
const inputPackageSearch = document.getElementById('packageSearchInput');
const inputModuleSearch = document.getElementById('moduleSearchInput');
const inputResourceSearch = document.getElementById('resourceSearchInput');
const inputAppointmentSearch = document.getElementById('searchAppointmentInput');
const inputApplicationSearch = document.getElementById('searchApplicationInput');
const inputAppointmentEdit = document.getElementById('appointmentInput');
const inputTitle1 = document.getElementById('inputTitle1');
const inputIntroduction = document.getElementById('inputIntroduction');
const inputExperience = document.getElementById('inputExperience');
const inputMission = document.getElementById('inputMission');
const inputIcon = document.getElementById('inputIcon');
const inputVideoTitle = document.getElementById('inputTitle2');
const inputVideoFile = document.getElementById('inputVideo');
const inputPlanName = document.getElementById('plan-name');
const inputBasicPeriod = document.getElementById('basic-period');
const inputBasicAmount = document.getElementById('basic-amount');
const inputBronzePeriod = document.getElementById('bronze-period');
const inputBronzeAmount = document.getElementById('bronze-amount');
const inputSilverPeriod = document.getElementById('silver-period');
const inputSilverAmount = document.getElementById('silver-amount');
const inputGoldPeriod = document.getElementById('gold-period');
const inputGoldAmount = document.getElementById('gold-amount');
const inputModuleTitle = document.getElementById('module-title');
const inputModuleDescription = document.getElementById('module-description');
const inputModuleVideo = document.getElementById('module-video-link');
const inputModuleCourse = document.getElementById('module-course');
const inputModuleResource = document.getElementById('module-resource');
const inputResourceTitle = document.getElementById('resource-title');
const inputResourceLink = document.getElementById('resource-link');
const inputResourceFile = document.getElementById('input-resource');

const addMoreResource = document.getElementById('addMoreResources');
const btnPreviousResource = document.getElementById('prevResource');
const btnNextResource = document.getElementById('nextResource');
const textResourceCounter = document.getElementById('counterDisplay');

const inputResourceContainer = document.getElementById('resourceContainer');

const inputCourseTitle = document.getElementById('input-title');
const inputCourseDescription = document.getElementById('input-description');
const inputCoursePreviewLink = document.getElementById('input-preview-link');
const inputCoursePlan = document.getElementById('input-course-plan');

const textUsernameSession = document.getElementById('usernameSession');
const textUserPopupHeader = document.getElementById('popupHeaderText');
const textUserPopupHeaderAppt = document.getElementById('popupHeaderTextAppt');
const textAboutPopupHeader = document.getElementById('popupHeaderTextAbout');
const textModulePopupHeader = document.getElementById('textHeaderModulePopup');
const textResourcePopupHeader = document.getElementById('textHeaderResourcePopup');
const textCoursePopupHeader = document.getElementById('popupHeaderTextCourse');
const textPackagePopupHeader = document.getElementById('popupPackageHeaderText');
const textApplicationPopupHeader = document.getElementById('popupHeaderTextApplication');
const textApplicationContent = document.getElementById('titleTextApplication');
const textErrorContainer = document.getElementById('errorMessage');
const textErrorContainerV = document.getElementById('errorMessage2');
const textLoaderText = document.getElementById('loadingText');
const textTitle = document.getElementById('titleText');
const textSubTitle = document.getElementById('subtitleText');
const textFooter = document.getElementById('footerText');
const textPackageErroCo = document.getElementById('packageErrorMessage');

const textAreaAboutContent = document.getElementById('aboutInput');

const loader = document.getElementById('loader');

const btnClosePopup = document.getElementById('btnClosePopup');
const btnSubmitUserData = document.getElementById('submitButton');
const btnSubmitModule = document.getElementById('btnSubmitModule');
const btnSubmitPackageData = document.getElementById('submitNewPackage');
const btnCreateUser = document.getElementById('createUserButton');
const btnReschedule = document.getElementById('btnReschedule');
const btnUpdateAbout = document.getElementById('btnUpdateAbout');
const btnRegisterAbout = document.getElementById('btnRegisterAbout');
const btnDownload = document.getElementById('downloadButton');
const btnCreatePackage = document.getElementById('btnCreatePackage');
const btnCreateCourse = document.getElementById('btnCreateCourse');
const btnCreateModule = document.getElementById('btnCreateModule');

const sectionUserManagement = document.getElementById('userContentMgt');
const sectionVideoManagement = document.getElementById('videoContentMgt');
const sectionLeadsManagement = document.getElementById('leadsContentMgt');
const sectionReportsManagement = document.getElementById('reportsContentMgt');
const sectionSettingsManagement = document.getElementById('settingsContentMgt');
const sectionWorkflowsManagement = document.getElementById('workflowsContentMgt');
const sectionCommunicationManagement = document.getElementById('communicationContentMgt');
const sectionDocumentManagement = document.getElementById('documentContentMgt');
const sectionAppointmentManagement = document.getElementById('appointmentContentMgt');
const sectionApplicationManagement = document.getElementById('applictionContentMgt');
const sectionCourseContentManagement = document.getElementById('courseContentMgt');

const userMgt = document.getElementById('userMgt');
const contentMgt = document.getElementById('contentMgt');
const aboutMgt = document.getElementById('aboutMgt');
const videoMgt = document.getElementById('videoMgt');
const leadMgt = document.getElementById('leadMgt');
const apptMgt = document.getElementById('apptMgt');
const crmMgt = document.getElementById('crmMgt');
const reportMgt = document.getElementById('reportMgt');
const settingMgt = document.getElementById('settingMgt');
const workflowMgt = document.getElementById('workflowMgt');
const commMgt = document.getElementById('commMgt');
const coursesMgt = document.getElementById('coursesMgt');
const docsMgt = document.getElementById('docsMgt');
const applicationMgt = document.getElementById('applicationMgt');

const packageMgt = document.getElementById('package-mgt');
const courseMgt = document.getElementById('course-mgt');
const moduleMgt = document.getElementById('module-mgt');
const resourceMgt = document.getElementById('resource-mgt');
const clientMgt = document.getElementById('client-mgt');
const paymentMgt = document.getElementById('payment-mgt');
const subscriptionMgt = document.getElementById('subscription-mgt');

const popupUserMgt = document.getElementById('userPopUp');
const popupAppointment = document.getElementById('appointmentPopup');
const popupAbout = document.getElementById('aboutPopup');
const popupCourseRegister = document.getElementById('courseRegisterPopup');
const popupModuleRegister = document.getElementById('moduleRegistration');
const popupLoader = document.getElementById('loaderPopup');
const popupPackage = document.getElementById('package-popup');
const aboutRegisterPopup = document.getElementById('aboutRegisterPopup');
const videoRegisterPopup = document.getElementById('videoRegisterPopup');
const aboutPhotoPopup = document.getElementById('aboutPhotoPopup');
const aboutVideoPopup = document.getElementById('aboutVideoPopup');
const applicationPopup = document.getElementById('applicationPopup');
const aboutPhotoViewArea = document.getElementById('photoViewArea');
const aboutVideoViewArea = document.getElementById('popupVideo');

const packagesContent = document.getElementById('packages-content');
const coursesContent = document.getElementById('courses-content');
const modulesContent = document.getElementById('modules-content');
const clientsContent = document.getElementById('clients-content');
const paymentsContent = document.getElementById('payments-content');
const subscriptionsContent = document.getElementById('subscriptions-content');

const formLogin = document.getElementById('login-form');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const twoWordsPattern = /^\S+\s+\S+/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
const dateTimePattern = /^\d{4}-\d{2}-\d{2}, \d{2}\.\d{2} (AM|PM) - \d{2}\.\d{2} (AM|PM)$/;

let isUpdate = false;
let isUpdateMode = false;
let isLogIn = false;
let userIndex = null; // To store the index for updating a user
let appointmentIndex = null; // To store the index for updating an appointment
let isTitle = false;
let isIntro = false;
let isMission = false;
let isExperience = false;
let isGoal = false;
let isTrigger = false;
let isOccupation = false;
let isInvestment = false;

let userList = [];
let leadList = [];
let courseList = [];
let modulesList = [];
let resourcesList = [];
let appointmentList = [];
let resourceToRegisterList = [];
let aboutList = [];
let videoList = [];
let applicationList = [];
let packagesList = [];
let aboutIndex = null;
let packageIndex = null;

let errorMessages = '';

/**
 * Method for displaying error messages to the user
 * @param {the error text to be displayed} errorMessage
 * @param {the container for displaying the error text} errorMessageElement
 * @returns a view if true
 */
function handleErrorMessage(errorMessage, errorMessageElement) {
    if (errorMessage && errorMessage.trim() !== '') {
        errorMessageElement.style.display = 'block';
        errorMessageElement.innerHTML = errorMessage;

        setTimeout(() => {
            errorMessageElement.style.display = 'none';
        }, 4000);

        return false;
    } else {
        errorMessageElement.style.display = 'none';
        return true;
    }
}

const getCurrentYear = () => {
    const now = new Date();
    const year = now.getFullYear();

    return `${year}`;
};

textFooter.textContent = `© ${getCurrentYear()} AdConnect | All rights reserved.`;

async function fetchUsers() {
    showLoader();
    textLoaderText.textContent = 'Fetching Users. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}users`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        userList = await response.json();

        populateUsers();
        clearInput();
    } catch (error) {
        console.error('Error fetching users messages:', error);
    } finally{
        hideLoader();
    }
}

function userManagement(){
    sectionUserManagement.style.display = 'flex';
    sectionVideoManagement.style.display = 'none';
    sectionLeadsManagement.style.display = 'none';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionAppointmentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'none';

    userMgt.classList.add('activ');
    contentMgt.classList.remove('activ');
    aboutMgt.classList.remove('activ');
    videoMgt.classList.remove('activ');
    leadMgt.classList.remove('activ');
    apptMgt.classList.remove('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    applicationMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    coursesMgt.classList.remove('activ');
    //Manage Lists
    fetchUsers();
}

function contentManagement(){
    sectionUserManagement.style.display = 'none';
    sectionVideoManagement.style.display = 'flex';
    sectionLeadsManagement.style.display = 'none';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionAppointmentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'none';

    userMgt.classList.remove('activ');
    contentMgt.classList.add('activ');
    aboutMgt.classList.add('activ');
    videoMgt.classList.add('activ');
    leadMgt.classList.remove('activ');
    apptMgt.classList.remove('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    applicationMgt.classList.remove('activ');
    coursesMgt.classList.remove('activ');

    fetchAbout();
}
function leadsManagement(){
    sectionUserManagement.style.display = 'none';
    sectionVideoManagement.style.display = 'none';
    sectionLeadsManagement.style.display = 'flex';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionAppointmentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'none';

    userMgt.classList.remove('activ');
    contentMgt.classList.remove('activ');
    aboutMgt.classList.remove('activ');
    videoMgt.classList.remove('activ');
    leadMgt.classList.add('activ');
    apptMgt.classList.remove('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    applicationMgt.classList.remove('activ');
    coursesMgt.classList.remove('activ');

    fetchLeads();
}
function appointmentManagement(){
    sectionUserManagement.style.display = 'none';
    sectionVideoManagement.style.display = 'none';
    sectionLeadsManagement.style.display = 'none';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'none';
    sectionAppointmentManagement.style.display = 'flex';

    userMgt.classList.remove('activ');
    contentMgt.classList.remove('activ');
    aboutMgt.classList.remove('activ');
    videoMgt.classList.remove('activ');
    leadMgt.classList.remove('activ');
    apptMgt.classList.add('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    applicationMgt.classList.remove('activ');
    coursesMgt.classList.remove('activ');

    fetchAppointments();
}

function applicationManagement(){
    sectionUserManagement.style.display = 'none';
    sectionVideoManagement.style.display = 'none';
    sectionLeadsManagement.style.display = 'none';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'flex';
    sectionAppointmentManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'none';

    userMgt.classList.remove('activ');
    contentMgt.classList.remove('activ');
    aboutMgt.classList.remove('activ');
    videoMgt.classList.remove('activ');
    leadMgt.classList.remove('activ');
    apptMgt.classList.remove('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    coursesMgt.classList.remove('activ');
    applicationMgt.classList.add('activ');

    fetchApplications();
}

function courseManagement(){
    sectionUserManagement.style.display = 'none';
    sectionVideoManagement.style.display = 'none';
    sectionLeadsManagement.style.display = 'none';
    sectionReportsManagement.style.display = 'none';
    sectionSettingsManagement.style.display = 'none';
    sectionWorkflowsManagement.style.display = 'none';
    sectionCommunicationManagement.style.display = 'none';
    sectionDocumentManagement.style.display = 'none';
    sectionApplicationManagement.style.display = 'none';
    sectionCourseContentManagement.style.display = 'flex';
    sectionAppointmentManagement.style.display = 'none';

    userMgt.classList.remove('activ');
    contentMgt.classList.remove('activ');
    aboutMgt.classList.remove('activ');
    videoMgt.classList.remove('activ');
    leadMgt.classList.remove('activ');
    apptMgt.classList.remove('activ');
    crmMgt.classList.remove('activ');
    reportMgt.classList.remove('activ');
    settingMgt.classList.remove('activ');
    workflowMgt.classList.remove('activ');
    commMgt.classList.remove('activ');
    docsMgt.classList.remove('activ');
    applicationMgt.classList.remove('activ');
    coursesMgt.classList.add('activ');

    packagesManagement();
}

function packagesManagement(){
    packagesContent.style.display = 'flex';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'none';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.add('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.remove('active-tab');

    fetchPackages();
}

function courseContentManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'flex';
    modulesContent.style.display = 'none';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.add('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.remove('active-tab');

    fetchCourses();
    fetchPackages();
}
function moduleManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'flex';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.add('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.remove('active-tab');

    fetchModules();
}
function resourceManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'flex';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.add('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.remove('active-tab');
}
function clientManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'none';
    clientsContent.style.display = 'flex';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.add('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.remove('active-tab');
}
function paymentManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'none';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'flex';
    subscriptionsContent.style.display = 'none';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.add('active-tab');
    subscriptionMgt.classList.remove('active-tab');
}
function subscriptionManagement(){
    packagesContent.style.display = 'none';
    coursesContent.style.display = 'none';
    modulesContent.style.display = 'none';
    clientsContent.style.display = 'none';
    paymentsContent.style.display = 'none';
    subscriptionsContent.style.display = 'flex';

    packageMgt.classList.remove('active-tab');
    courseMgt.classList.remove('active-tab');
    moduleMgt.classList.remove('active-tab');
    resourceMgt.classList.remove('active-tab');
    clientMgt.classList.remove('active-tab');
    paymentMgt.classList.remove('active-tab');
    subscriptionMgt.classList.add('active-tab');
}


// Function to display a message
function displayMessage(type, text) {
    const container = document.getElementById('errorContainer');

    // Create message element
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.innerHTML = `
        <p>${text}</p>
        <div class="error-close-btn" onclick="removeMessage(this)">
            <i class="fa-solid fa-xmark"></i>
        </div>
    `;
    // Add message to the container
    container.appendChild(message);

    // Remove message after 7 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 10000);
}

// Function to remove a message with slide-left animation
function removeMessage(button) {
    const message = button.parentElement;
    if (message.parentElement) {
        // Add the slide-left class to trigger the animation
        message.classList.add('slide-left');

        // Remove the element after the animation completes
        message.addEventListener('animationend', () => {
            message.remove();
        });
    }
}

function applyTooltipToElement(descriptionElement, id) {
        const description = document.getElementById(id);
        //const descriptionElement = document.querySelector(".item-course-description");
        
        // Create overlay element
        const tooltipOverlay = document.createElement("div");
        tooltipOverlay.classList.add("tooltip-overlay");
        tooltipOverlay.textContent = descriptionElement.textContent; // Set the full text to show in the overlay
        
        // Append overlay to the description element
        description.appendChild(tooltipOverlay);

        // Show overlay on hover
        // Event listener to show the overlay when hovering over the description
        descriptionElement.addEventListener("mouseenter", function () {
            tooltipOverlay.style.visibility = "visible"; // Make tooltip visible
            tooltipOverlay.style.display = "block"; // Ensure the overlay is displayed
        });

        // Event listener to track the cursor's position and move the tooltip accordingly
        descriptionElement.addEventListener("mousemove", function (event) {
            const cursorX = event.clientX - 250; // Offset the tooltip slightly from the cursor
            const cursorY = event.clientY - 30; // Offset the tooltip slightly from the cursor

            // Update the position of the tooltip relative to the cursor
            tooltipOverlay.style.left = `${cursorX}px`;
            tooltipOverlay.style.top = `${cursorY}px`;
        });

        // Hide overlay when hover ends
        descriptionElement.addEventListener("mouseleave", function () {
            console.log('Hovered Out');
            tooltipOverlay.style.display = "none";
        });
    }
document.addEventListener("DOMContentLoaded", () => {
    // Example usage
    //displayMessage('error-display', 'This is an error message. style="color: rgb(236, 2, 2); display: flex; margin: 65px 10px 2px 10px; background-color: #fc7b7b; text-align: center; font-size: 11px; padding: 4px 15px; border-radius: 5px; position: fixed; margin-top: 65px;');
    //displayMessage('success', 'This is a success message. style="color: rgb(236, 2, 2); display: flex; margin: 65px 10px 2px 10px; background-color: #fc7b7b; text-align: center; font-size: 11px; padding: 4px 15px; border-radius: 5px; position: fixed; margin-top: 65px;');

    // Fetch when the page loads
    document.getElementById('adminHero').style.display = 'block';
    if (window.innerWidth < 1024) {
        document.querySelectorAll("body > *:not(.mobile-warning)").forEach(el => el.style.display = "none");
        document.getElementById('adminHero').style.display = 'none';
        document.getElementById('admin-footer').style.display = 'none';
        document.getElementById('admin-header').style.display = 'none';
        document.querySelector(".mobile-warning").style.display = "block";
    }
    //if (isLogIn) userManagement();
    //fetchLeads();
    //fetchAbout();
    //fetchAppointments();
    //contentManagement();
    //userManagement();
    document.getElementById('userMgt').addEventListener('click', userManagement);
    document.getElementById('contentMgt').addEventListener('click', contentManagement);
    document.getElementById('leadMgt').addEventListener('click', leadsManagement);
    document.getElementById('apptMgt').addEventListener('click', appointmentManagement);
    document.getElementById('applicationMgt').addEventListener('click', applicationManagement);
    document.getElementById('coursesMgt').addEventListener('click', courseManagement);

    document.getElementById('package-mgt').addEventListener('click', packagesManagement);
    document.getElementById('course-mgt').addEventListener('click', courseContentManagement);
    document.getElementById('module-mgt').addEventListener('click', moduleManagement);
    document.getElementById('resource-mgt').addEventListener('click', moduleManagement);
    document.getElementById('client-mgt').addEventListener('click', clientManagement);
    document.getElementById('payment-mgt').addEventListener('click', paymentManagement);
    document.getElementById('subscription-mgt').addEventListener('click', subscriptionManagement);

    btnSubmitUserData.addEventListener('click', userRegistrationOrUpdate);
    btnSubmitModule.addEventListener('click', registerOrUpdateModule);
    addMoreResource.addEventListener('click', addResource);
    btnSubmitPackageData.addEventListener('click', packageRegistrationOrUpdate);
    btnDownload.addEventListener('click', downloadExcel);
});

function navigateTo(section) {
    document.querySelectorAll('#content').forEach(sec => sec.classList.add('.hidden'));
    section.classList.remove('.hidden');
}
function activeClass(nav) {
    document.querySelectorAll('.admin-sidebar ul').forEach(sec => sec.classList.remove('activ'));
    nav.classList.add('activ');
}

/**
 * Refreshes the user table
 */
function refreshUserTable(){
    userList = [];
    fetchUsers();
}
function refreshCoursesTable(){
    courseList = [];
    fetchCourses();
}

function refreshApplicationTable(){
    applicationList = [];
    fetchApplications();
}
function refreshPackagesTable(){
    packagesList = [];
    fetchPackages();
}
function refreshModulesTable(){
    modulesList = [];
    fetchModules();
}
function refreshResourceTable(){
    resourcesList = [];
    fetchResources();
}

function refreshAbout(){
    aboutList = [];
    fetchAbout();
}
function refreshVideos(){
    videoList = [];
    fetchAbout();
}

function refreshLeadsTable(){
    leadList = [];
    fetchLeads();
}

function refreshAppointmentTable(){
    appointmentList = [];
    fetchAppointments();
}

async function handleLogin() {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessageContainer = document.getElementById('errorMessage');

    if(email === ''){
        handleErrorMessage('Please Input Email', errorMessageContainer);
        document.getElementById('email').focus();
        return;
    }
    if(!emailPattern.test(email)){
        handleErrorMessage('Enter a valid email!', errorMessageContainer);
        document.getElementById('email').focus();
        return;
    }
    if(password === ''){
        handleErrorMessage('Please Input password', errorMessageContainer);
        document.getElementById('email').focus();
        return;
    }
    if(!passwordPattern.test(password)){
        handleErrorMessage('Enter a valid password!', errorMessageContainer);
        document.getElementById('password').focus();
        return;
    }

    auth = { email, password };

    showLoader();
    try {
        // Perform the fetch call
        const response = await fetch(`${DOMAIN}auth`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        // Check if the response is OK
        if (!response.ok) {
            // Handle server-side errors (e.g., 401, 400)
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert(errorData.error || 'Invalid email or password.');
            return;
        }
        hideLoader();
        // Parse JSON response
        const data = await response.json();
        console.log('Response Data:', data);

        // If login is successful
        alert('Login Successful!');
        document.getElementById('adminHero').style.display = 'block';
        document.getElementById('login-page').style.display = 'none';

        // Update Username
        if (textUsernameSession) {
            textUsernameSession.textContent = data.username; // Use the `username` from the server response
        }

        // Open Session with users loaded
        isLogIn = true;
        userManagement();
        populateUsers();
    } catch (error) {
        // Handle network errors
        console.error('Network Error:', error);
        alert('An error occurred while logging in. Please try again.');
    }
}

// Function to show the loader
function showLoader() {
    loader.classList.remove('hidden');
    popupLoader.style.height ='100%';
}

// Function to hide the loader
function hideLoader() {
    loader.classList.add('hidden');
    popupLoader.style.height ='0%';
    textLoaderText.textContent = '';
}

async function fetchData(url, populateCallback) {
    showLoader();
    textLoaderText.textContent = 'Fetching Data. Please Wait!';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        populateCallback(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideLoader();
    }
}

async function fetchAbout() {
    showLoader();
    textLoaderText.textContent = 'Fetching Data. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}about-data`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        aboutList = await response.json();

        populateAbout();
    } catch (error) {
        console.error('Error fetching Appointments messages:', error);
    }
    try {
        const response = await fetch(`${DOMAIN}video-data`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        videoList = await response.json();

        populateVideo();
    } catch (error) {
        console.error('Error fetching Appointments messages:', error);
    }
    hideLoader();
}


async function fetchAppointments() {
    showLoader();
    textLoaderText.textContent = 'Fetching Appointments. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}appointments`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        appointmentList = await response.json();

        populateAppointments();
    } catch (error) {
        console.error('Error fetching Appointments messages:', error);
    } finally{
        hideLoader();
    }
}

async function fetchPackages() {
    showLoader();
    textLoaderText.textContent = 'Fetching Packages. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}packages`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        packagesList = await response.json();
        console.log('Fetch Packages Data:', packagesList);
        // Populate the select element with packages
        populateSelect(packagesList);

        populatePackages();
    } catch (error) {
        displayMessage('error-display', 'Failed to fetch Packages. Please try again');
        console.error('Error fetching Packages messages:', error);
    } finally{
        hideLoader();
    }
}

async function fetchCourses() {
    showLoader();
    textLoaderText.textContent = 'Fetching Courses. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}courses`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        courseList = await response.json();
        console.log('Fetch Courses Data:', courseList);

        populateCourseSelect(courseList);

        populateCourses();
    } catch (error) {
        displayMessage('error-display', 'Failed to fetch Courses. Please try again');
        console.error('Error fetching Courses Data:', error);
    } finally{
        hideLoader();
    }
}
async function fetchModules() {
    showLoader();
    fetchCourses();
    textLoaderText.textContent = 'Fetching Modules. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}modules`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        modulesList = await response.json();
        console.log('Fetch Modules Data:', modulesList);

        populateModules();
    } catch (error) {
        displayMessage('error-display', 'Failed to fetch Modules. Please try again');
        console.error('Error fetching Modules Data:', error);
    }

    try {
        const response = await fetch(`${DOMAIN}resources`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        resourcesList = await response.json();
        console.log('Fetch Resources Data:', resourcesList);

        populateResources();
    } catch (error) {
        displayMessage('error-display', 'Failed to fetch Resources. Please try again');
        console.error('Error fetching Resources Data:', error);
    } finally{
        hideLoader();
    }
}

async function fetchResources() {
    showLoader();
    textLoaderText.textContent = 'Fetching Resources. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}resources`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        resourcesList = await response.json();
        console.log('Fetch Resources Data:', resourcesList);

        populateResources();
    } catch (error) {
        displayMessage('error-display', 'Failed to fetch Resources. Please try again');
        console.error('Error fetching Resources Data:', error);
    } finally{
        hideLoader();
    }
}

// Function to populate the select element with packages
function populateSelect(packages) {
    inputCoursePlan.innerHTML = ''; // Clear existing content
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Select a Package';
    option.disabled = true;
    inputCoursePlan.appendChild(option);
    packages.forEach(pkg => {
        const opt = document.createElement('option');
        opt.value = pkg.id;
        opt.textContent = pkg.package_name;
        inputCoursePlan.appendChild(opt);
    });
}

// Function to populate the select element with courses
function populateCourseSelect(courses) {
    inputModuleCourse.innerHTML = ''; // Clear existing content
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Select a Course';
    option.disabled = true;
    inputModuleCourse.appendChild(option);
    courses.forEach(pkg => {
        const opt = document.createElement('option');
        opt.value = pkg.id;
        opt.textContent = pkg.title;
        inputModuleCourse.appendChild(opt);
    });
}

async function fetchApplications() {
    showLoader();
    textLoaderText.textContent = 'Fetching Aplications. Please Wait!';
    try {
        const response = await fetch('/api/marketing-strategy-applications');
        if (!response.ok) {
            throw new Error('Failed to fetch applications');
        }
        const data = await response.json();
        console.log("API Response:", data);

        if (data.applications && Array.isArray(data.applications)) {
            applicationList = data.applications;
            populateApplications();
        } else {
            console.error("Expected an array but got:", data.applications);
        }
    } catch (error) {
        console.error("Error fetching applications:", error);
    } finally {
        hideLoader();
    }
}

async function fetchLeads() {
    showLoader();
    textLoaderText.textContent = 'Fetching Leads. Please Wait!';
    try {
        const response = await fetch(`${DOMAIN}clients`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        leadList = await response.json();

        populateLeads();
    } catch (error) {
        console.error('Error fetching Leads messages:', error);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
    }
}

function populateUsers() {
    const dataList = document.getElementById('userList');
    dataList.innerHTML = ''; // Clear existing content

    if (userList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Registered Users Available!</p>';
        return;
    }

    userList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
        <p class="item-user-id">${item.id}</p>
        <p class="item-user-name">${item.name}</p>
        <p class="item-user-email">${item.email}</p>
        <p class="item-user-roles">${item.role}</p>
        <p class="item-user-access">${item.access_level}</p>
        <button id="userUpdateBtn" onclick="openUpdateUser(${index})">UPDATE</button>
        <button id="userDeleteBtn" onclick="deleteUser(${index})">DELETE</button>
      `;
        dataList.appendChild(listItem);
    });
}

function populateAbout() {
    const dataList = document.getElementById('aboutList');
    dataList.innerHTML = ''; // Clear existing content

    if (aboutList.length === 0) {
        dataList.innerHTML = '<p style="margin: 100px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No About Data Available!</p>';
        return;
    }

    aboutList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.style.marginTop = '3px';
        listItem.innerHTML = `
        <p class="item-about-id">${item.id}</p>
        <p class="item-about-title" style="cursor: pointer;" onclick="previewTitle(${index})">${item.title}</p>
        <p class="item-about-introduction" style="cursor: pointer;" onclick="previewIntroduction(${index})">${item.introduction}</p>
        <p class="item-about-experience" style="cursor: pointer;" onclick="previewExperience(${index})">${item.experience}</p>
        <p class="item-about-mission" style="cursor: pointer;" onclick="previewMission(${index})">${item.mission}</p>
        <p class="item-about-status" style="cursor: pointer;" onclick="updateStatus(${index})">${item.status}</p>
        <p class="item-about-image" onclick="previewImage(${index})"></p>
        <i id="leadDeleteBtn" class="fa fa-trash" onclick="deleteAbout(${index})" aria-hidden="true"></i>
    `;

        // Select the image div inside the newly created listItem
        const iconImageBg = listItem.querySelector('.item-about-image');

        // Set the background image property
        if (iconImageBg && item.icon) {
            iconImageBg.style.backgroundImage = `url(${item.icon})`;
            iconImageBg.style.marginTop = '8px';
            iconImageBg.style.marginBottom = '8px';
        }

        // Append the list item to the container
        dataList.appendChild(listItem);
    });
}

function populateVideo() {
    const dataList = document.getElementById('videoList');
    dataList.innerHTML = ''; // Clear existing content

    if (videoList.length === 0) {
        dataList.innerHTML = '<p style="margin: 100px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Video Data Available!</p>';
        return;
    }

    videoList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.style.marginTop = '3px';
        listItem.innerHTML = `
        <p class="item-about-id">${item.id}</p>
        <p class="item-about-title" style="cursor: pointer;" >${item.title}</p>
        <p class="item-about-introduction" style="cursor: pointer;" >${item.created_by}</p>
        <p class="item-about-introduction" style="cursor: pointer;" >${item.created_on}</p>
        <p class="item-about-status" style="cursor: pointer;" onclick="updateVideoStatus(${index})">${item.status}</p>
        <p class="item-about-image" style="cursor: pointer;" onclick="previewVideo(${index})"></p>
        <i id="leadDeleteBtn" class="fa fa-trash" onclick="deleteVideo(${index})" aria-hidden="true"></i>
    `;
        // Append the list item to the container
        dataList.appendChild(listItem);
    });
}

function populateApplications() {
    const dataList = document.getElementById('applicationList');
    dataList.innerHTML = ''; // Clear existing content

    // Check if applicationList is an array
    if (!Array.isArray(applicationList)) {
        console.error("applicationList is not an array:", applicationList);
        dataList.innerHTML = '<p style="margin: 100px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">Error: Invalid data format!</p>';
        return;
    }
    if (applicationList.length === 0) {
        dataList.innerHTML = '<p style="margin: 100px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Applications Data Available!</p>';
        return;
    }

    applicationList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.style.marginTop = '3px';
        listItem.innerHTML = `
        <p class="item-user-id">${item.applicationDate}</p>
        <p class="item-user-name" style="cursor: pointer;" >${item.applicantFName} ${item.applicantLName}</p>
        <p class="item-user-email" style="cursor: pointer;" >${item.email}</p>
        <p class="item-appointment-phone" style="cursor: pointer;" >${item.phone}</p>
        <p class="item-appointment-notes" style="cursor: pointer;" onclick="previewOccupation(${index})">${item.occupation}</p>
        <p class="item-appointment-notes" style="cursor: pointer;" onclick="previewTrigger(${index})">${item.marketTriggers}</p>
        <p class="item-appointment-notes" style="cursor: pointer;" onclick="previewGoal(${index})">${item.strategyGoal}</p>
        <p class="item-appointment-notes" style="cursor: pointer;" onclick="previewInvestment(${index})">${item.strategyInvestment}</p>
        <p class="item-appointment-status" style="cursor: pointer;" onclick="updateApplicationStatus(${index})">${item.status}</p>
        <i id="leadDeleteBtn" class="fa fa-trash" onclick="deleteApplication(${index})" aria-hidden="true"></i>
    `;
        // Append the list item to the container
        dataList.appendChild(listItem);
    });
}

function previewOccupation(index){
    textApplicationPopupHeader.textContent = `OCCUPATION`;
    textApplicationContent.textContent = `${applicationList[index].occupation}`;
    openApplicationPopup();
}
function previewTrigger(index){
    textApplicationPopupHeader.textContent = `MARKET TRIGGER(S)`;
    textApplicationContent.textContent = `${applicationList[index].marketTriggers}`;
    openApplicationPopup();
}
function previewGoal(index){
    textApplicationPopupHeader.textContent = `CLIENT GOAL`;
    textApplicationContent.textContent = `${applicationList[index].strategyGoal}`;
    openApplicationPopup();
}
function previewInvestment(index){
    textApplicationPopupHeader.textContent = `INVESTMENT`;
    textApplicationContent.textContent = `${applicationList[index].strategyInvestment}`;
    openApplicationPopup();
}
async function updateApplicationStatus(index) {
    try {
        textLoaderText.textContent = 'Updating Application Status. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}marketing-strategy-applications/${applicationList[index].applicationDate}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ status: 'RESOLVED'}),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Status Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            applicationList[index].status = 'RESOLVED';
            populateApplications();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally {
        hideLoader();
    }
}

async function deleteApplication(index) {
    if (confirm('Are you sure you want to delete this Application?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}marketing-strategy-applications/${applicationList[index].applicationDate}`, {method: 'DELETE'});
            if (!response.ok) throw new Error('Failed to delete Application');
            errorMessages = 'Application deleted successfully';
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            applicationList.splice(index, 1);
            populateApplications();
        } catch (error) {
            console.error('Error deleting Application:', error);

            errorMessages = 'Failed to delete Application. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally {
            hideLoader();
        }
    }
}


function populateCourses() {
    const dataList = document.getElementById('courseList');
    dataList.innerHTML = ''; // Clear existing content

    if (courseList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Courses Available!</p>';
        return;
    }

    courseList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
        <p class="item-course-name">${item.title}</p>
        <p class="item-course-description">${item.description}</p>
        <div class="item-course-view" onclick="previewCourse(${index})"><p>VIEW</p></div>
        <div class="item-course-view"><p>VIEW</p></div>
        <i id="leadPreviewMailBtn" onclick="courseUpdate(${index})" class="fa fa-pencil-square" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deleteCourse(${index})" class="fa fa-trash" aria-hidden="true"></i>
      `;
        dataList.appendChild(listItem);
    });

    // Get all the descriptions with the class .item-course-description
    const descriptionElements = document.querySelectorAll(".item-course-description");

    // Apply the tooltip to each description element (including duplicates)
    descriptionElements.forEach(function (descriptionElement) {
        applyTooltipToElement(descriptionElement, 'courseList');
    });
}

function populateResources() {
    const dataList = document.getElementById('resourceList');
    dataList.innerHTML = ''; // Clear existing content

    if (resourcesList.length === 0) {
        dataList.innerHTML = '<p style="margin:100px 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Resources Available!</p>';
        return;
    }

    resourcesList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
        <p class="item-module-name">${item.title}</p>
        <p class="item-module-description">${item.mname}</p>
        <div class="item-module-view" onclick="previewResource(${index})"><p>VIEW</p></div>
        <i id="leadPreviewMailBtn" onclick="resourceUpdate(${index})" class="fa fa-pencil-square" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deleteResource(${index})" class="fa fa-trash" aria-hidden="true"></i>
      `;
        dataList.appendChild(listItem);
    });

    // Get all the descriptions with the class .item-course-description
    const descriptionElements = document.querySelectorAll(".item-module-description");

    // Apply the tooltip to each description element (including duplicates)
    descriptionElements.forEach(function (descriptionElement) {
        applyTooltipToElement(descriptionElement, 'moduleList');
    });
}

function previewResource(index){
    // Construct the URL to the document
    const documentUrl = `${DOMAIN}${resourcesList[index].resource}`;

    // Set the iframe source to the document URL
    const documentFrame = document.getElementById('documentFrame');
    documentFrame.src = documentUrl;

    // Open the modal
    const modal = new bootstrap.Modal(document.getElementById('documentModal'));
    modal.show();
}

function populateModules() {
    const dataList = document.getElementById('moduleList');
    dataList.innerHTML = ''; // Clear existing content

    if (modulesList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Courses Available!</p>';
        return;
    }

    modulesList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
        <p class="item-module-name">${item.title}</p>
        <p class="item-module-description">${item.about}</p>
        <div class="item-module-view" onclick="previewModule(${index})"><p>VIEW</p></div>
        <p class="item-module-course">${item.cname}</p>
        <p class="item-module-resource">${item.resource}</p>
        <i id="leadPreviewMailBtn" onclick="moduleUpdate(${index})" class="fa fa-pencil-square" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deleteModule(${index})" class="fa fa-trash" aria-hidden="true"></i>
      `;
        dataList.appendChild(listItem);
    });

    // Get all the descriptions with the class .item-course-description
    const descriptionElements = document.querySelectorAll(".item-module-description");

    // Apply the tooltip to each description element (including duplicates)
    descriptionElements.forEach(function (descriptionElement) {
        applyTooltipToElement(descriptionElement, 'moduleList');
    });
}

function populatePackages() {
    const dataList = document.getElementById('packageList');
    dataList.innerHTML = ''; // Clear existing content

    if (packagesList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Packages Available!</p>';
        return;
    }

    packagesList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
        <p class="item-plan-name">${item.package_name}</p>
        <p class="item-plan-period">${item.n_period}</p>
        <p class="item-plan-amount">${item.n_amount}</p>
        <p class="item-plan-period">${item.b_period}</p>
        <p class="item-plan-amount">${item.b_amount}</p>
        <p class="item-plan-period">${item.s_period}</p>
        <p class="item-plan-amount">${item.s_amount}</p>
        <p class="item-plan-period">${item.g_period}</p>
        <p class="item-plan-amount">${item.g_amount}</p>
        <i id="leadPreviewMailBtn" onclick="updatePackages(${index})" class="fa fa-pencil-square" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deletePackage(${index})" class="fa fa-trash" aria-hidden="true"></i>
      `;
        dataList.appendChild(listItem);
    });
}

// Example usage
const packageData = {
    basicPeriod: '3MONTHS',
    bronzePeriod: '6MONTHS',
    silverPeriod: '9MONTHS',
    goldPeriod: '12MONTHS'
};

function updatePackages(index){
    isUpdateMode = true;
    packageIndex = index;

    textPackagePopupHeader.textContent = `Update Package`;

    inputPlanName.value = packagesList[index].package_name;
    inputBasicAmount.value = packagesList[index].n_amount;
    inputBronzeAmount.value = packagesList[index].b_amount;
    inputSilverAmount.value = packagesList[index].s_amount;
    inputGoldAmount.value = packagesList[index].g_amount;

    setPackagePeriods(packagesList[index].n_period);
    setPackagePeriods(packagesList[index].b_period);
    setPackagePeriods(packagesList[index].s_period);
    setPackagePeriods(packagesList[index].g_period);


    openPackagePopup();
}

async function moduleUpdate(index){
    packageIndex = index;
    isUpdateMode = true;
    addMoreResource.style.cssText = 'pointer-events: none; opacity: 0.3;';

    textModulePopupHeader.textContent = `Update Module`;

    inputModuleTitle.value = modulesList[index].title;
    inputModuleDescription.value = modulesList[index].about;
    //inputModuleCourse.value = modulesList[index].cname;
    inputModuleResource.value = modulesList[index].resource;
    inputModuleVideo.value = modulesList[index].video;

    // Set the active option based on the current modules's cname
    const options = inputModuleCourse.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === modulesList[index].ctitle) {
            options[i].selected = true;
            break;
        }
    }

    if (isModuleReferenced(modulesList[index].id)) {
        textResourcePopupHeader.textContent = `Update Resource`;
        inputResourceContainer.style.display = 'flex';
    
        // Wait for getResources to complete
        await getResources(modulesList[index].id);
    
        // Ensure resourceToRegisterList is populated and has at least one element
        if (resourceToRegisterList.length > 0) {
            inputResourceTitle.value = resourceToRegisterList[0].title;
            inputResourceLink.value = resourceToRegisterList[0].resource;
            //inputResourceFile.value = resourceToRegisterList[0].resource;
    
            textResourceCounter.textContent = resourceToRegisterList.length;
    
            btnPreviousResource.addEventListener('click', moveToPreviousResource);
            btnNextResource.addEventListener('click', moveToNextResource);
        } else {
            console.error("No resources found for this module.");
            displayMessage('error-display', 'No resources found for this module.');
        }
    } else {
    displayMessage('success', 'No modules to update for this module unless you\'d like to register new resources. \nPress the + button to add.');
        textResourcePopupHeader.textContent = `Register Resource`;
        addMoreResource.style.cssText = 'pointer-events: auto; opacity: 1;';
    }
    openModulePopup();
}

let control = 0;
function moveToPreviousResource(){
    if (control === 0) {
        displayMessage('error-display', 'You are at the beginning of the resource list content. Please press next button to view other resources.');
    } else {
        control--;
        inputResourceTitle.value = resourceToRegisterList[control].title;
        inputResourceLink.value = resourceToRegisterList[control].resource;
        //inputResourceFile.value = resourceToRegisterList[control].resource;
    }
}

let newFile = null;
inputResourceFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        newFile = file; // Store the new file
        console.log('New file selected:', file.name);
        displayMessage('success', `You have selected ${file.name}`);
        updateResource(resourceToRegisterList[control].id, control, newFile);
        //resourceToRegisterList[control].resource = newFile;
        console.log(`File to Update: ${resourceToRegisterList}`)
        
    } else {
        newFile = null; // No new file selected
    }
});

function moveToNextResource(){
    if (control === resourceToRegisterList.length - 1) {
        displayMessage('error-display', 'You are at the end of the resource list content. Please press previous button to view other resources.');
    } else {
        control++;
        inputResourceTitle.value = resourceToRegisterList[control].title;
        inputResourceLink.value = resourceToRegisterList[control].resource;
        //inputResourceFile.value = resourceToRegisterList[control].resource;
    }
}

async function isModuleReferenced(moduleId){
    try {
        // Call the API
        const response = await fetch(`${DOMAIN}resources/check-module/${moduleId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the result
        if (data.isReferenced) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'An error occurred while checking the module ID.');
    }

    return false;
}

async function getResources(moduleId){
    try {
        // Call the API
        const response = await fetch(`${DOMAIN}resources/${moduleId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        resourceToRegisterList = await response.json();
        console.log('Resources:', resourceToRegisterList);

    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'An error occurred while fetching resources.');
    }
}

function courseUpdate(index){
    isUpdateMode = true;
    packageIndex = index;

    textCoursePopupHeader.textContent = `Update Course`;

    inputCourseTitle.value = courseList[index].title;
    inputCourseDescription.value = courseList[index].description;
    inputCoursePreviewLink.value = courseList[index].preview;

    // Set the active option based on the current course's pname
    const options = inputCoursePlan.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === courseList[index].package) {
            options[i].selected = true;
            break;
        }
    }
    openCoursePopup();
}

function setPackagePeriods(period) {
    switch (period) {
        case '3 months':
            inputBasicPeriod.value =  packageData.basicPeriod;
            break;
        case '6 months':
            inputBronzePeriod.value =  packageData.bronzePeriod;
            break;
        case '9 months':
            inputSilverPeriod.value =  packageData.silverPeriod;
            break;
        case '12 months':
            inputGoldPeriod.value =  packageData.goldPeriod;
            break;
        default:
            inputBasicPeriod.value = '';
            inputBronzePeriod.value = '';
            inputSilverPeriod.value = '';
            inputGoldPeriod.value = '';
            break;
    }
}

function populateLeads() {
    const dataList = document.getElementById('leadList');
    dataList.innerHTML = ''; // Clear existing content

    if (leadList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Leads Available!</p>';
        return;
    }

    leadList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
      <div class="h-layout item-content" onclick="clicked(${index})">
        <p class="item-lead-id">${item.clientID}</p>
        <p class="item-lead-name">${item.clientName}</p>
        <p class="item-lead-email">${item.clientEmail}</p>
        <p class="item-lead-phone">${item.clientPhone}</p>
        <p class="item-lead-source">${item.clientSource}</p>
        <p class="item-lead-status">${item.clientStatus}</p>
        <p class="item-lead-subscription">${item.clientSubScription}</p>
        <p class="item-lead-date">${item.created_at}</p>
        <i id="leadPreviewMailBtn" onclick="previewEmailTemplate(${index})" class="fa fa-envelope-open" aria-hidden="true"></i>
        <i id="leadSendMailBtn" onclick="sendSubsequentEmail(${index})" class="fa fa-envelope" aria-hidden="true"></i>
        <i id="leadUnsubscribeBtn" onclick="unsubscribeFromLead(${index})" class="fa fa-sign-out" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deleteLead(${index})" class="fa fa-trash" aria-hidden="true"></i>
        </div>
      `;
        dataList.appendChild(listItem);
    });
}

function extractListData() {
    const leadList = document.getElementById("leadList"); // Get the parent div
    if (!leadList) {
        console.error("Lead list container not found!");
        return [];
    }

    const items = leadList.querySelectorAll(".item-content"); // Select child items
    let leadsList = [];

    items.forEach((item) => {
        const clientID = item.querySelector(".item-lead-id")?.textContent.trim() || "";
        const clientName = item.querySelector(".item-lead-name")?.textContent.trim() || "";
        const clientEmail = item.querySelector(".item-lead-email")?.textContent.trim() || "";
        const clientPhone = item.querySelector(".item-lead-phone")?.textContent.trim() || "";
        const clientSource = item.querySelector(".item-lead-source")?.textContent.trim() || "";
        const clientStatus = item.querySelector(".item-lead-status")?.textContent.trim() || "";
        const created_at = item.querySelector(".item-lead-date")?.textContent.trim() || "";

        // Check if the lead already exists in the list
        const isDuplicate = leadsList.some((lead) => lead.clientID === clientID);

        if (!isDuplicate) {
            leadsList.push({
                clientID,
                clientName,
                clientEmail,
                clientPhone,
                clientSource,
                clientStatus,
                created_at,
            });
        }
    });

    console.log("Unique Leads List:", leadsList); // Log the deduplicated data
    return leadsList;
}

/**
 * Function for getting the current date & time
 * @returns dat-time (yyyyMMddHHmmss)
 *
 */
const currentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

// Function to send data and download Excel
// Function to send data and download Excel
function downloadExcel() {
    textLoaderText.textContent = "Downloading Leads. Please Wait!";
    showLoader();

    const leadsList = extractListData();
    console.log("Leads List:", leadsList); // Log the data being sent

    fetch(`${DOMAIN}download/excel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leads: leadsList }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.blob();
        })
        .then((blob) => {
            console.log("Blob size:", blob.size); // Log blob size
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${currentTime()}_leads.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url); // Clean up the URL object
        })
        .catch((error) => {
            console.error("Error downloading Excel:", error);
        })
        .finally(() => {
            hideLoader();
        });
}

function populateAppointments() {
    const dataList = document.getElementById('appointmentList');
    dataList.innerHTML = ''; // Clear existing content

    if (appointmentList.length === 0) {
        dataList.innerHTML = '<p style="margin: 200px; color: white; font-size: 30px; font-weight: 700; cursor: pointer; transition: all 0.5s ease;">No Captured Appointments Available!</p>';
        return;
    }

    console.log(appointmentList);
    appointmentList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('h-layout', 'item-content');
        listItem.innerHTML = `
      <div class="h-layout item-content" onclick="clicked(${index})">
        <p class="item-appointment-id">${item.clientId}</p>
        <p class="item-appointment-name">${item.name}</p>
        <p class="item-appointment-email">${item.email}</p>
        <p class="item-appointment-phone">${item.phone}</p>
        <p class="item-appointment-location">${item.location}</p>
        <p class="item-appointment-date">${item.appointmentDate}</p>
        <p class="item-appointment-time">${item.appointmentTime}</p>
        <p class="item-appointment-type">${item.appointmentType}</p>
        <p class="item-appointment-status">${item.appointmentStatus}</p>
        <p class="item-appointment-notes" style="cursor: pointer" onclick="previewNotes(${index})">${item.appointmentNotes}</p>
        <i id="apptReschedule" onclick="appointmentReschedule(${index})" class="fa fa-calendar" aria-hidden="true"></i>
        <i id="apptReschedule" onclick="appointmentReminder(${index})" class="fa fa-clock" aria-hidden="true"></i>
        <i id="leadSendMailBtn" onclick="appointmentStartMeeting(${index})" class="fa fa-video-camera" aria-hidden="true"></i>
        <i id="leadUnsubscribeBtn" onclick="appointmentUpdateStatus(${index})" class="fa fa-check-circle" aria-hidden="true"></i>
        <i id="leadDeleteBtn" onclick="deleteAppointment(${index})" class="fa fa-trash" aria-hidden="true"></i>
        </div>
      `;
        dataList.appendChild(listItem);
    });
}

function clicked(index){
    console.log(`Item at position ${index} clicked.`);
}

function previewMission(index){
    textAboutPopupHeader.textContent = `ABOUT - MISSION`;
    textAreaAboutContent.value = `${aboutList[index].mission}`;
    aboutIndex = index;
    isTitle = false;
    isIntro = false;
    isMission = true;
    isExperience = false;
    openAboutPopup();
}
function previewExperience(index){
    textAboutPopupHeader.textContent = `ABOUT - EXPERIENCE`;
    textAreaAboutContent.value = `${aboutList[index].mission}`;
    aboutIndex = index;
    isTitle = false;
    isIntro = false;
    isMission = false;
    isExperience = true;
    openAboutPopup();
}
function previewImage(index){
    aboutPhotoViewArea.style.backgroundImage = `url(${aboutList[index].icon})`;
    openPhotoPreviewPopup()
}

function previewVideo(index){
    aboutVideoViewArea.src = videoList[index].video;
    openVideoPreviewPopup()
}
function previewIntroduction(index){
    textAboutPopupHeader.textContent = `ABOUT - INTRODUCTION`;
    textAreaAboutContent.value = `${aboutList[index].introduction}`;
    aboutIndex = index;
    isTitle = false;
    isIntro = true;
    isMission = false;
    isExperience = false;
    openAboutPopup();
}
function previewTitle(index){
    textAboutPopupHeader.textContent = `ABOUT - TITLE`;
    textAreaAboutContent.value = `${aboutList[index].introduction}`;
    aboutIndex = index;
    isTitle = true;
    isIntro = false;
    isMission = false;
    isExperience = false;
    openAboutPopup();
}

function updateAboutSection(){
    if(isExperience){
        updateExperience(aboutIndex);
    }
    if (isIntro){
        updateIntroduction(aboutIndex);
    }
    if (isTitle){
        updateTitle(aboutIndex);
    }
    if (isMission){
        updateMission(aboutIndex);
    }
}

async function updateExperience(index){
    if (textAreaAboutContent.value === ''){
        handleErrorMessage('Please Enter Experience!', textErrorContainer);
        textAreaAboutContent.focus();
        return;
    }

    aboutList[index].experience = textAreaAboutContent.value;

    try {
        textLoaderText.textContent = 'Updating Experience Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}about-data/${aboutList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aboutList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Experience Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList[index].experience = textAreaAboutContent.value;
            populateAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}

async function updateIntroduction(index){
    if (textAreaAboutContent.value === ''){
        handleErrorMessage('Please Enter Introduction!', textErrorContainer);
        textAreaAboutContent.focus();
        return;
    }

    aboutList[index].introduction = textAreaAboutContent.value;

    try {
        textLoaderText.textContent = 'Updating Intro Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}about-data/${aboutList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aboutList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Intro Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList[index].introduction = textAreaAboutContent.value;
            populateAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}
async function updateTitle(index){
    if (textAreaAboutContent.value === ''){
        handleErrorMessage('Please Enter Introduction!', textErrorContainer);
        textAreaAboutContent.focus();
        return;
    }

    aboutList[index].title = textAreaAboutContent.value;

    try {
        textLoaderText.textContent = 'Updating Title Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}about-data/${aboutList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aboutList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Title Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList[index].title = textAreaAboutContent.value;
            populateAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}
async function updateMission(index){
    if (textAreaAboutContent.value === ''){
        handleErrorMessage('Please Enter Mission Info!', textErrorContainer);
        textAreaAboutContent.focus();
        return;
    }

    aboutList[index].mission = textAreaAboutContent.value;

    try {
        textLoaderText.textContent = 'Updating Mission Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}about-data/${aboutList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aboutList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Mission Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList[index].mission = textAreaAboutContent.value;
            populateAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}

async function updateStatus(index){
    aboutList[index].status = 'ACTIVE';

    try {
        textLoaderText.textContent = 'Updating Status Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}about-data-update-status/${aboutList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aboutList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Status Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList[index].mission = textAreaAboutContent.value;
            await fetchAbout();
            populateAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}

async function updateVideoStatus(index){
    videoList[index].status = 'ACTIVE';

    try {
        textLoaderText.textContent = 'Updating Status Info. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}video-data-update-status/${videoList[index].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(videoList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage('Status Updated Successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            videoList[index].status = 'ACTIVE';
            fetchAbout();
        } else {
            handleErrorMessage(`Error: ${result.error}`, textErrorContainer);
        }
    } catch (error) {
        handleErrorMessage('Failed to Update Status. Please try again.', textErrorContainer);
    } finally{
        hideLoader();
    }
}

function previewNotes(index){
    textSubTitle.style.visibility = 'collapse';
    inputAppointmentEdit.style.visibility = 'collapse';
    btnReschedule.style.visibility = 'collapse';
    textUserPopupHeaderAppt.style.visibility = 'visible';
    textTitle.style.visibility = 'visible';

    let name = (appointmentList[index].name).split(' ');
    textUserPopupHeaderAppt.textContent = `Message From ${name[0]}`;
    textTitle.textContent = appointmentList[index].appointmentNotes;

    openAppointmentPopup();
}

function appointmentReschedule(index){
    textSubTitle.style.visibility = 'visible';
    inputAppointmentEdit.style.visibility = 'visible';
    btnReschedule.style.visibility = 'visible';
    textUserPopupHeaderAppt.style.visibility = 'visible';
    textTitle.style.visibility = 'collapse';

    textUserPopupHeaderAppt.textContent = `Reschedule Meeting for ${appointmentList[index].name.split(' ')[0]}`;
    inputAppointmentEdit.value = appointmentList[index].appointmentTime;

    appointmentIndex = index;
    openAppointmentPopup();
}

async function rescheduleMeeting(){
    const errorContainer = document.getElementById('errorMessage');
    if (inputAppointmentEdit.value === ''){
        handleErrorMessage('Input Date and Time', errorContainer);
        inputAppointmentEdit.focus();
        return;
    }
    if(!dateTimePattern.test(inputAppointmentEdit.value.trim)){
        handleErrorMessage('Format Date to \'2025-01-20, 01.30 PM - 02.00 PM\'', errorContainer);
        inputAppointmentEdit.focus();
        return;
    }

    try {
        textLoaderText.textContent = 'Rescheduling Meeting. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}rescheduleMeeting`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentList[appointmentIndex]),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            appointmentList[index].appointmentDate = result.appointment.appointmentDate;
            appointmentList[index].appointmentTime = result.appointment.appointmentTime;
            populateAppointments();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to Reschedule Meeting. Please try again.');
    } finally{
        hideLoader();
    }
}

async function appointmentReminder(index){
    try {
        textLoaderText.textContent = 'Sending Reminder. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}reminder-email`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentList[index]),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            populateAppointments();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send reminder. Please try again.');
    } finally{
        hideLoader();
    }
}

function appointmentStartMeeting(index){
    window.open(appointmentList[index].meetingLink);
}

async function appointmentUpdateStatus(index){
    try {
        textLoaderText.textContent = 'Updating Meeting Status. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}appointments/${appointmentList[index].clientId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status:'DONE'}),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            appointmentList[index].appointmentStatus = 'DONE';
            populateAppointments();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to Update Status. Please try again.');
    } finally{
        hideLoader();
    }
}

async function deleteAppointment(index){
    if (confirm('Are you sure you want to delete this Appointment?')) {
        try {
            textLoaderText.textContent = 'Deleting Appointment. Please Wait...';
            showLoader();
            const response = await fetch(`${DOMAIN}appointments/${appointmentList[index].clientId}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete Appointment');
            errorMessages = 'Appointment deleted successfully';

            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            appointmentList.splice(index, 1);
            populateAppointments();
        } catch (error) {
            console.error('Error deleting Appointment:', error);
            errorMessages = 'Failed to delete the Appointment. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally{
            hideLoader();
        }
    }
}

async function previewEmailTemplate(index) {
    textLoaderText.textContent = 'Preparing Email for Preview. Please Wait!';
    showLoader();
    const response = await fetch(`${DOMAIN}emailTemplate?status=${leadList[index].clientStatus}`);
    const template = await response.json();

    if (template) {
        const previewWindow = window.open('', '_blank');
        previewWindow.document.write(template.body);
    } else {
        alert('Template not found for the specified status.');
    }
    textLoaderText.textContent = '';
    hideLoader();
}

async function unsubscribeFromLead(index) {
    let clientID = leadList[index].clientID;
    try {
        textLoaderText.textContent = 'Unsubscribing. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}unsubscribeLead`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientID }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            leadList[index].clientSubScription = 'UNSUBSCRIBED';
            populateLeads();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed unsubscribe. Please try again.');
    } finally{
        textLoaderText.textContent = '';
        hideLoader();
    }
}

// Send subsequent emails
async function sendSubsequentEmail(index) {
    let clientID = leadList[index].clientID;
    try {
        textLoaderText.textContent = 'Sending Follow-up Email. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}sendSubsequentEmail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientID }),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            fetchLeads();
        } else {
            alert(`Error: ${result.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email. Please try again.');
    } finally{
        textLoaderText.textContent = '';
        hideLoader();
    }
}

/**
 * Delete lead
 * @param {*} index postion of the lead to be deleted
 */
async function deleteLead(index){
    if (confirm('Are you sure you want to delete this Lead?')) {
        try {
            textLoaderText.textContent = 'Deleting Lead. Please Wait...';
            showLoader();
            const response = await fetch(`${DOMAIN}clients/${leadList[index].clientID}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete lead');
            errorMessages = 'Lead deleted successfully';

            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            leadList.splice(index, 1);
            populateLeads();
        } catch (error) {
            console.error('Error deleting user:', error);
            errorMessages = 'Failed to delete the Lead. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally{
            hideLoader();
        }
    }
}

function openUpdateUser(index){
    textUserPopupHeader.textContent = 'Update User';
    isUpdate = true;
    userIndex = index; // Save the index for use during submission

    // Retrieve the user object from the list
    const user = userList[index];

    inputUserName.value = user.name;
    inputUserEmail.value = user.email;
    inputUserRole.value = user.role;
    inputUserPassword.value = user.password;
    inputUserAccess.value = user.access_level;

    openUserPopup(); // Open the user form popup
}

btnCreateUser.addEventListener('click', function (event) {
    textUserPopupHeader.textContent = 'Create New User';
    isUpdate = false;
    userIndex = null; //not an update
    openUserPopup();
});

/**
 * Submit action
 */
async function userRegistrationOrUpdate(){
    event.preventDefault();

    if (isUpdate) {
        // Use the stored `userIndex` for the update
        updateUser(userIndex);
    } else {
        await registerUser(); // Handle creating a new user
    }
}

// Update user function
async function updateUser(index) {
    validateUserInput();

    const user = {
        id:userList[index].id,
        name: inputUserName.value.toUpperCase(),
        email: inputUserEmail.value,
        password: inputUserPassword.value,
        role: inputUserRole.value,
        access_level: inputUserAccess.value,
    };

    try {
        textLoaderText.textContent = 'Fetching Users. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}users/${userList[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        
        console.log('User: ',user);
        textLoaderText.textContent = '';
        textLoaderText.textContent = 'Updating User. Loading';
        if (response.ok) {
            const result = await response.json();
            errorMessages = 'User updated successfully!';
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            userList[index] = user;
            populateUsers();
            clearInput();
            closePopup();
            console.log('Updated user:', result.user);
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error updating user:', error);
        errorMessages = 'An error occurred while updating the user.';
        handleErrorMessage(errorMessages, textErrorContainer);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdate = false;
    }
}

btnCreatePackage.addEventListener('click', function (event) {
    textPackagePopupHeader.textContent = 'Create New Package';
    isUpdate = false;
    packageIndex = null; //not an update
    openPackagePopup();
});

btnCreateCourse.addEventListener('click', function (event) {
    textCoursePopupHeader.textContent = 'Create New Course';
    isUpdate = false;
    packageIndex = null; //not an update
    openCoursePopup();
});

btnCreateModule.addEventListener('click', function (event) {
    textModulePopupHeader.textContent = 'Create New Module';
    resourceToRegisterList = [];
    isUpdateMode = false;
    packageIndex = null; //not an update
    openModulePopup();
});

function previewCourse(index){
    event.preventDefault();
    const videoUrl = courseList[index].preview;
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    aboutVideoViewArea.src = embedUrl;
    console.log('Course Preview:', embedUrl);
    openVideoPreviewPopup()
}
function previewModule(index){
    event.preventDefault();
    const videoUrl = modulesList[index].video;
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    aboutVideoViewArea.src = embedUrl;
    console.log('Module Preview:', embedUrl);
    openVideoPreviewPopup()
}
function previewCourses(index){
    event.preventDefault();
    const videoUrl = modulesList[index].video;
    const videoId = videoUrl.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    aboutVideoViewArea.src = embedUrl;
    console.log('Course Preview:', embedUrl);
    openVideoPreviewPopup()
}

function registerOrUpdateModule(){
    event.preventDefault();

    if (isUpdateMode) {
        // Use the stored `packageIndex` for the update
        updateModule(packageIndex);
    } else {
        registerModule(); // Handle creating a new module
    }
}

async function updateModule(index){
    if (!validateModuleInput()){
        return;
    }

    if (!inputModuleCourse.value) {
        console.error('Error: Course is empty or not assigned.');
    } else {
        console.log('Input Plan Name:', inputModuleCourse.value); // Log the inputPlanName value
    }
    // Find the matching package in the courseList
    const selectedCourse = courseList.find(pkg => pkg.id === inputModuleCourse.value);

    if (!selectedCourse) {
        displayMessage('error-display', 'Selected Course not found!');
        return;
    }

    const module = {
        title: inputModuleTitle.value,
        about: inputModuleDescription.value,
        video: inputModuleCourse.value,
        resource: inputModuleResource.value,
        course: selectedCourse.id,
    };

    try {
        textLoaderText.textContent = 'Updating Module. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}modules/${modulesList[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(module),
        });

        if (response.ok) {
            const result = await response.json();
            errorMessages = 'Module updated successfully!';
            displayMessage('success', errorMessages);
            console.log('Module created:', result.module);
            console.log(inputModuleResource.value)
            if (inputModuleResource.value == 'TRUE'){
                console.log('Condition met: inputModuleResource.value is TRUE');
                console.log('ResourceToUpdate Length: ', resourceToRegisterList.length);
                // update resources if the list is not empty
                if (resourceToRegisterList.length > 0) {
                    // Update resources if the list is not empty
                    console.log('resourceToRegisterList:', resourceToRegisterList);
                    console.log('Resources found in resourceToRegisterList');
                    for (const resource of resourceToRegisterList) {
                        console.log('Updating resource:', resource);
                        await updateResource(resource); // Update each resource
                    }
                } else {
                    console.log('No resources found in resourceToRegisterList');
                }
            }
            await fetchModules();
            fetchResources();
            clearInput();
            closePopup();
        } else {
            const errorData = await response.json();
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessages = 'An error occurred while creating the Module.';
        displayMessage('error-display', errorMessages);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdateMode = false;
    }
}

async function updateResource(resource) {
    const resourceData = {
        id: resource.id,
        title: resource.title,
        resource: resource.resource,
        module: resource.moduleId,
    };

    try {
        const response = await fetch(`${DOMAIN}resources/${resource.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resourceData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Resource updated:', result);
            displayMessage('success', `Resource ${resource.title} updated successfully! \n${result.message}\n${result.fileStatus}`);
        } else {
            const errorData = await response.json();
            console.error('Error updating resource:', errorData.error);
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'An error occurred while updating the resource.');
    }
}

async function updateResource(id, index, file) {
    const resourceData = {
        resource: file
    };

    displayMessage('success', `Updating file in the backgroung!`);
    try {
        const response = await fetch(`${DOMAIN}resources/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resourceData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Resource updated:', result);
            displayMessage('success', `Resource file updated successfully!`);
            resourceToRegisterList[index].resource = `${result.resource.resource}`;
            newFile = null;
        } else {
            const errorData = await response.json();
            console.error('Error updating resource:', errorData.error);
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'An error occurred while updating the resource.');
    }
}


async function  registerModule(){
    if (!validateModuleInput()){
        return;
    }

    if (!inputModuleCourse.value) {
        console.error('Error: Course is empty or not assigned.');
    } else {
        console.log('Input Plan Name:', inputModuleCourse.value); // Log the inputPlanName value
    }

    const module = {
        title: inputModuleTitle.value,
        about: inputModuleDescription.value,
        video: inputModuleCourse.value,
        resource: inputModuleResource.value,
        course: inputModuleCourse.value,
    };

    try {
        textLoaderText.textContent = 'Registering Module. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}modules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(module),
        });

        if (response.ok) {
            const result = await response.json();
            errorMessages = 'Module created successfully!';
            displayMessage('success', errorMessages);
            console.log('Module created:', result.module);
            fetchModules();

            if (inputModuleResource.value == 'TRUE'){
                // Register resources if the list is not empty
                if (resourceToRegisterList.length > 0) {
                    for (const resource of resourceToRegisterList) {
                        await registerResource(result.module.id,resource); // register each resource
                    }
                }
            } 

            fetchResources();
            clearInput();
            isUpdateMode = false;
            resourceToRegisterList = [];
        } else {
            const errorData = await response.json();
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessages = 'An error occurred while creating the Module.';
        displayMessage('error-display', errorMessages);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdateMode = false;
    }
}


async function registerResource(moduleId,resource) {
    const resourceData = {
        title: resource.title,
        resource: resource.resource,
        module: moduleId,
    };

    try {
        const response = await fetch(`${DOMAIN}resources`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resourceData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Resource updated:', result);
            displayMessage('success', `Resource ${resource.title} added successfully!`);
        } else {
            const errorData = await response.json();
            console.error('Error updating resource:', errorData.error);
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'An error occurred while updating the resource.');
    }
}

function addResource(){
    control = 0;
    if (inputResourceTitle.value === '') {
        displayMessage('error-display', 'Resource Title is required!');
        inputResourceTitle.focus();
        return;
    }
    if (!(inputResourceFile.files[0].size > 0)) {
        displayMessage('error-display', 'Please Select Resource File!');
        inputResourceFile.focus();
        return;
    }

    resourceToRegisterList.push({
        title: inputResourceTitle.value,
        resource: inputResourceFile.value
    });

    // Clear input fields
    inputResourceTitle.value = '';
    inputResourceLink.value = '';
    inputResourceFile.value = '';
}

function validateModuleInput(){
    if (inputModuleTitle.value === '') {
        displayMessage('error-display', 'Module Title is required!');
        inputModuleTitle.focus();
        return false;
    }

    if (inputModuleDescription.value === '') {
        displayMessage('error-display', 'Module Description is required!');
        inputModuleDescription.focus();
        return false;
    }

    if (inputModuleCourse.value === '') {
        displayMessage('error-display', 'Module Course is required!');
        inputModuleCourse.focus();
        return false;
    }
    if (inputModuleResource.value === '') {
        displayMessage('error-display', 'Module Video Link is required!');
        inputModuleResource.focus();
        return false;
    }

    return true;
}

function registerOrUpdateCourse(){
    event.preventDefault();

    if (isUpdateMode) {
        // Use the stored `packageIndex` for the update
        updateCourse(packageIndex);
    } else {
    isUpdateMode = false;
        registerCourse(); // Handle creating a new user
    }
}

async function registerCourse(){
    if (!validateCourseInput()) {
        return;
    }
    if (!inputCoursePlan.value) {
        console.error('Error: inputCoursePlan is empty or not assigned.');
    } else {
        console.log('Input Plan Name:', inputCoursePlan.value); // Log the inputPlanName value
    }
    // Find the matching package in the packageList
    const selectedPackage = packagesList.find(pkg => pkg.id === inputCoursePlan.value);

    if (!selectedPackage) {
        displayMessage('error-display', 'Selected package not found!');
        return;
    }
    const course = {
        title: inputCourseTitle.value,
        description: inputCourseDescription.value,
        preview: inputCoursePreviewLink.value,
        package: selectedPackage.id,
    };

    try {
        textLoaderText.textContent = 'Registering Course. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}courses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });

        if (response.ok) {
            const result = await response.json();
            errorMessages = 'Course created successfully!';
            displayMessage('success', errorMessages);
            console.log('Course created:', result.course);
            fetchCourses();
            closePopup();
            clearInput();
        } else {
            const errorData = await response.json();
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessages = 'An error occurred while creating the course.';
        displayMessage('error-display', errorMessages);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdateMode = false;
    }
}

async function updateCourse(index){
    if (!validateCourseInput()) {
        return;
    }
    console.log('Input Plan Name:', inputCoursePlan.value); // Log the inputPlanName value
    // Find the matching package in the packageList
    const selectedPackage = packagesList.find(pkg => pkg.id === inputCoursePlan.value);

    if (!selectedPackage) {
        displayMessage('error-display', 'Selected package not found!');
        return;
    }
    const course = {
        id:courseList[index].id,
        title: inputCourseTitle.value,
        description: inputCourseDescription.value,
        preview: inputCoursePreviewLink.value,
        package: selectedPackage.id,
    };

    try {
        textLoaderText.textContent = 'Updating Course. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}courses/${courseList[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });

        if (response.ok) {
            const result = await response.json();
            errorMessages = 'Course updated successfully!';
            displayMessage('success', errorMessages);
            courseList[index] = course;
            populateCourses();
            closePopup();
            clearInput();
            console.log('Updated Course:', result.course);
        } else {
            const errorData = await response.json();
            displayMessage('error-display', `Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error updating course:', error);
        errorMessages = 'An error occurred while updating the course.';
        displayMessage('error-display', errorMessages);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdateMode = false;
    }
}

function validateCourseInput() {
    if (inputCourseTitle.value === '') {
        displayMessage('error-display', 'Course Title is required!');
        inputCourseTitle.focus();
        return false;
    }

    if (inputCourseDescription.value === '') {
        displayMessage('error-display', 'Course Description is required!');
        inputCourseDescription.focus();
        return false;
    }

    if (inputCoursePreviewLink.value === '') {
        displayMessage('error-display', 'Course Preview Link is required!');
        inputCoursePreviewLink.focus();
        return false;
    }

    if (inputCoursePlan.value === '') {
        displayMessage('error-display', 'Course Package is required!');
        inputCoursePlan.focus();
        return false;
    }

    return true;
}

async function deleteCourse(index){
    if (confirm('Are you sure you want to delete this Course?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}courses/${courseList[index].id}`, { method: 'DELETE' });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to delete Course');
            }
            errorMessages = 'Course deleted successfully';
            displayMessage('success', errorMessages);
            courseList.splice(index, 1);
            populateCourses();
        } catch (error) {
            console.error('Error deleting Course:', error);
            if (error.message.includes('constraint')) {
                displayMessage('error-display', 'Cannot delete Course: it is referenced by another table.');
            } else {
                displayMessage('error-display', error.message);
            }
        } finally {
            hideLoader();
        }
    }
}

function packageRegistrationOrUpdate(){
    event.preventDefault();

    if (isUpdateMode) {
        // Use the stored `packageIndex` for the update
        updatePackage(packageIndex);
    } else {
    isUpdateMode = false;
        registerPackage(); // Handle creating a new user
    }
}

async function updatePackage(index){
    if (!validatePackageInput()) {
        return;
    }
    const package = {
        id:packagesList[index].id,
        package_name: inputPlanName.value,
        n_period: inputBasicPeriod.value.toString().split('MONTHS').join(' Months'),
        n_amount: parseInt(inputBasicAmount.value, 10),
        b_period: inputBronzePeriod.value.toString().split('MONTHS').join(' Months'),
        b_amount: parseInt(inputBronzeAmount.value, 10),
        s_period: inputSilverPeriod.value.toString().split('MONTHS').join(' Months'),
        s_amount: parseInt(inputSilverAmount.value, 10),
        g_period: inputGoldPeriod.value.toString().split('MONTHS').join(' Months'),
        g_amount: parseInt(inputGoldAmount.value, 10),
    };

    try {
        textLoaderText.textContent = 'Updating Package. Please Wait!';
        showLoader();
        const response = await fetch(`${DOMAIN}packages/${packagesList[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(package),
        });

        if (response.ok) {
            const result = await response.json();
            errorMessages = 'Package updated successfully!';
            displayMessage('success', errorMessages);
            packagesList[index] = package;
            populatePackages();
            closePopup();
            clearInput();
            console.log('Updated Package:', result.package);
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Error updating package:', error);
        errorMessages = 'An error occurred while updating the package.';
        displayMessage('error-display', errorMessages);
    } finally{
        hideLoader();
        textLoaderText.textContent = '';
        isUpdate = false;
    }
}

/**
 * Register a new package
 */
async function registerPackage(){
    if (!validatePackageInput()) {
        return;
    }
    const package = {
        package_name: inputPlanName.value,
        n_period: inputBasicPeriod.value.toString().split('MONTHS').join(' Months'),
        n_amount: parseInt(inputBasicAmount.value.toString(), 10),
        b_period: inputBronzePeriod.value.toString().split('MONTHS').join(' Months'),
        b_amount: parseInt(inputBronzeAmount.value, 10),
        s_period: inputSilverPeriod.value.toString().split('MONTHS').join(' Months'),
        s_amount: parseInt(inputSilverAmount.value, 10),
        g_period: inputGoldPeriod.value.toString().split('MONTHS').join(' Months'),
        g_amount: parseInt(inputGoldAmount.value, 10),
    };

    try {
        textLoaderText.textContent = 'Registering Package. Please Wait!';
        // Show loader before the request
        showLoader();

        // Make API call
        const response = await fetch(`${DOMAIN}packages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(package),
        });

        // Handle response
        if (response.ok) {
            let result;
            try {
                result = await response.json(); // Attempt to parse JSON
            } catch {
                result = { message: 'Package created successfully!' }; // Fallback if response isn't JSON
            }
            console.log('Response:', result);
            errorMessages = 'Package created successfully!';
                displayMessage('success', errorMessages);
                console.log('Package created:', result.package);
                fetchPackages();
                console.log('Fetching Packages');
                closePopup();
                clearInput();
        } else {
            const errorData = await response.json();
            const errorMessage = errorData.error || 'An unknown error occurred';
            displayMessage('error-display', `Error: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        displayMessage('error-display', 'Failed to create package. Please try again later.');
    } finally {
        // Hide loader after the request
        hideLoader();
        textLoaderText.textContent = '';
    }
}

function validatePackageInput() {
    if (inputPlanName.value === '') {
        displayMessage('error-display', 'Package Name is required!');
        inputPlanName.focus();
        return false;
    }

    const pairs = [
        { period: inputBasicPeriod, amount: inputBasicAmount },
        { period: inputBronzePeriod, amount: inputBronzeAmount },
        { period: inputSilverPeriod, amount: inputSilverAmount },
        { period: inputGoldPeriod, amount: inputGoldAmount }
    ];

    let isValid = false;

    for (const pair of pairs) {
        if (pair.period.value !== '' && pair.amount.value !== '') {
            isValid = true;
            break;
        }
    }

    if (!isValid) {
        displayMessage('error-display', 'At least one period and amount pair is required!');
        pairs[0].period.focus();
        return false;
    }

    for (const pair of pairs) {
        if (pair.period.value !== '' && pair.amount.value === '') {
            displayMessage('error-display', `${pair.period.id.replace('-', ' ')} Amount is required!`);
            pair.amount.focus();
            return false;
        }
        if (pair.period.value === '' && pair.amount.value !== '') {
            displayMessage('error-display', `${pair.amount.id.replace('-', ' ')} Period is required!`);
            pair.period.focus();
            return false;
        }
        if (pair.amount.value !== '' && isNaN(parseInt(pair.amount.value, 10))) {
            displayMessage('error-display', `${pair.amount.id.replace('-', ' ')} must be a valid number!`);
            pair.amount.focus();
            return false;
        }
    }

    return true;
}

/**
 *
 * @returns
 */
async function registerUser() {
    // Validate user input fields
    if (inputUserName.value.trim() === '') {
        inputUserName.focus();
        displayMessage('error-display', 'Full Name is required!');
        return;
    }
    if (!twoWordsPattern.test(inputUserName.value.trim())) {
        inputUserName.focus();
        displayMessage('A full name must contain two or more words!', textErrorContainer);
        return;
    }
    if (inputUserEmail.value.trim() === '') {
        inputUserEmail.focus();
        displayMessage('Email is required!', textErrorContainer);
        return;
    }
    if (!emailPattern.test(inputUserEmail.value)) {
        inputUserEmail.focus();
        displayMessage('error-display', 'Please enter a valid email address!')
        return;
    }
    if (inputUserPassword.value.trim() === '') {
        inputUserPassword.focus();
        displayMessage('error-display', 'Password is required!')
        return;
    }
    if (!passwordPattern.test(inputUserPassword.value)) {
        inputUserPassword.focus();
        handleErrorMessage('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number!', textErrorContainer);
        return;
    }
    if (!inputUserRole.value.trim() || inputUserRole.value === 'Select User Role') {
        inputUserRole.focus();
        handleErrorMessage('User Role is required!', textErrorContainer);
        return;
    }
    if (!inputUserAccess.value.trim() || inputUserAccess.value === 'Select User Access') {
        inputUserAccess.focus();
        handleErrorMessage('User Access is required!', textErrorContainer);
        return;
    }

    // Prepare the user object for submission
    const user = {
        name: inputUserName.value.trim().toUpperCase(),
        email: inputUserEmail.value.trim(),
        password: inputUserPassword.value.trim(),
        role: inputUserRole.value.trim().toUpperCase(),
        access_level: inputUserAccess.value.trim().toUpperCase(),
    };

    try {
        textLoaderText.textContent = 'Registering User. Please Wait!';
        // Show loader before the request
        showLoader();

        // Make API call
        const response = await fetch(`${DOMAIN}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        // Handle response
        if (response.ok) {
            let result;
            try {
                result = await response.json(); // Attempt to parse JSON
            } catch {
                result = { message: 'User created successfully!' }; // Fallback if response isn't JSON
            }
            console.log('Response:', result);
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(result.message || 'User created successfully!', textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            fetchUsers(); // refresh list
            clearInput();
        } else {
            const errorData = await response.json();
            const errorMessage = errorData.error || 'An unknown error occurred';
            handleErrorMessage(`Error: ${errorMessage}`, textErrorContainer);
        }
    } catch (error) {
        console.error('Error:', error);
        handleErrorMessage('Failed to create user. Please try again later.', textErrorContainer);
    } finally {
        // Hide loader after the request
        hideLoader();
        isRegister = false;
        textLoaderText.textContent = '';
    }
}

/*btnRegisterAbout.addEventListener('click', async function(event) {

});*/
async function registerAboutSection(){
    validateAboutInput();

    // Prepare the user object for submission
    const about = new FormData();
    about.append('title', inputTitle1.value);
    about.append('introduction', inputIntroduction.value);
    about.append('experience', inputExperience.value);
    about.append('mission', inputMission.value);
    about.append('status', 'INACTIVE');
    about.append('icon', inputIcon.files[0]);

    try {
        textLoaderText.textContent = 'Submitting About Info. Please Wait!';
        showLoader(); // Show loader before request

        const response = await fetch(`${DOMAIN}about-data`, {
            method: 'POST',
            body: about,  // Send FormData as the body (not JSON)
        });

        let result;
        const contentType = response.headers.get('content-type');

        if (response.ok) {
            try {
                if (contentType && contentType.includes('application/json')) {
                    result = await response.json(); // Attempt JSON parsing
                } else {
                    result = { message: await response.text() || 'About info created successfully!' }; // Handle non-JSON responses
                }
            } catch (error) {
                console.warn('JSON Parse Error:', error);
                result = { message: 'About info created successfully!' }; // Fallback
            }

            console.log('Response:', result);
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(result.message || 'Info created successfully!', textErrorContainer);
            clearInput();
            fetchAbout(); // Refresh list
        } else {
            let errorMessage = 'An unknown error occurred';

            try {
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } else {
                    errorMessage = await response.text();
                }
            } catch (error) {
                console.warn('Error Parsing Response:', error);
            }

            handleErrorMessage(`Error: ${errorMessage}`, textErrorContainer);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        handleErrorMessage('Failed to submit about info. Please try again later.', textErrorContainer);
    } finally {
        hideLoader(); // Hide loader after request
    }

}

function validateAboutInput(){
    const errorMessage1 = document.getElementById('errorMessage1');
    if (inputTitle1.value.trim() === ''){
        handleErrorMessage('Input Title!', errorMessage1);
        inputTitle1.focus();
        return;
    }
    if (inputIntroduction.value.trim() === ''){
        handleErrorMessage('Input Introduction!', errorMessage1);
        inputIntroduction.focus();
        return;
    }
    if (inputExperience.value.trim() === ''){
        handleErrorMessage('Input Experience!', errorMessage1);
        inputExperience.focus();
        return;
    }
    if (inputMission.value.trim() === ''){
        handleErrorMessage('Input Mission Statement!', errorMessage1);
        inputMission.focus();
        return;
    }
    if (!(inputIcon.files[0].size > 0)) {
        handleErrorMessage('Please Select Image!', errorMessage1);
        inputIcon.focus();
        return true;
    }
}

async function registerVideoSection(){
    if (inputVideoTitle.value.trim() === ''){
        handleErrorMessage('Input Title!', textErrorContainerV);
        inputVideoTitle.focus();
        return;
    }
    if (!(inputVideoFile.files[0].size > 0)) {
        handleErrorMessage('Please Select Video!', textErrorContainerV);
        inputVideoFile.focus();
        return true;
    }
    // Prepare the user object for submission
    const video = new FormData();
    video.append('title', inputVideoTitle.value);
    video.append('created_by', textUsernameSession.value || 'MISGINA FITWI');
    video.append('status', 'INACTIVE');

    if (inputVideoFile.files[0]) {
        console.log(inputVideoFile.files[0]); // Debugging
        video.append('video', inputVideoFile.files[0]);
    } else {
        handleErrorMessage('No video file selected!', textErrorContainerV);
    }
    //video.append('video', inputVideoFile.files[0]);

    try {
        textLoaderText.textContent = 'Uploading Video. Please Wait!';
        showLoader(); // Show loader before request

        const response = await fetch(`${DOMAIN}video-data`, {
            method: 'POST',
            body: video,  // Send FormData as the body (not JSON)
        });

        let result;
        const contentType = response.headers.get('content-type');

        if (response.ok) {
            try {
                if (contentType && contentType.includes('application/json')) {
                    result = await response.json(); // Attempt JSON parsing
                } else {
                    result = { message: await response.text() || 'Video uploaded successfully!' }; // Handle non-JSON responses
                }
            } catch (error) {
                console.warn('JSON Parse Error:', error);
                result = { message: 'Video uploaded successfully!' }; // Fallback
            }

            console.log('Response:', result);
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(result.message || 'Video Uploaded Successfully!', textErrorContainerV);
            clearInput();
            fetchAbout();
        } else {
            let errorMessage = 'An unknown error occurred';

            try {
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } else {
                    errorMessage = await response.text();
                }
            } catch (error) {
                console.warn('Error Parsing Response:', error);
            }

            handleErrorMessage(`Error: ${errorMessage}`, textErrorContainerV);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        handleErrorMessage('Failed to upload video. Please try again later.', textErrorContainerV);
    } finally {
        hideLoader(); // Hide loader after request
    }

}

async function deleteUser(index){
    if (confirm('Are you sure you want to delete this user?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}users/${userList[index].id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete user');
            errorMessages = 'User deleted successfully';
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            userList.splice(index, 1);
            populateUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
            errorMessages = 'Failed to delete the User. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally{
            hideLoader();
        }
    }
}
async function deleteAbout(index){
    if (confirm('Are you sure you want to delete this info?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}about-data/${aboutList[index].id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete About Info');
            errorMessages = 'Info deleted successfully';
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            aboutList.splice(index, 1);
            populateAbout();
        } catch (error) {
            console.error('Error deleting About Info:', error);

            errorMessages = 'Failed to delete the about info. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally{
            hideLoader();
        }
    }
}

async function deleteVideo(index){
    if (confirm('Are you sure you want to delete this video?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}video-data/${videoList[index].id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Failed to delete Video');
            errorMessages = 'Video deleted successfully';
            textErrorContainer.style.color = 'white';
            textErrorContainer.style.backgroundColor = '#4abc5061';
            handleErrorMessage(errorMessages, textErrorContainer);
            textErrorContainer.style.color = 'rgb(236, 2, 2)';
            textErrorContainer.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
            videoList.splice(index, 1);
            populateVideo();
        } catch (error) {
            console.error('Error deleting Video:', error);

            errorMessages = 'Failed to delete Video. Please try again.';
            handleErrorMessage(errorMessages, textErrorContainer);
        } finally{
            hideLoader();
        }
    }
}
async function deletePackage(index) {
    if (confirm('Are you sure you want to delete this Package?')) {
        try {
            showLoader();
            const response = await fetch(`${DOMAIN}packages/${packagesList[index].id}`, { method: 'DELETE' });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to delete Package');
            }
            errorMessages = 'Package deleted successfully';
            displayMessage('success', errorMessages);
            packagesList.splice(index, 1);
            populatePackages();
        } catch (error) {
            console.error('Error deleting Package:', error);
            if (error.message.includes('constraint')) {
                displayMessage('error-display', 'Cannot delete package: it is referenced by another table.');
            } else {
                displayMessage('error-display', error.message);
            }
        } finally {
            hideLoader();
        }
    }
}

function validateUserInput(){
    if (inputUserName.value.trim() === '') {
        inputUserName.focus();
        errorMessages = 'Full Name is required!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (!twoWordsPattern.test(inputUserName.value.trim())) {
        inputUserName.focus();
        errorMessages = 'A full Name has two or more words!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (inputUserEmail.value.trim() === '') {
        inputUserEmail.focus();
        errorMessages = 'Email is required!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (!emailPattern.test(inputUserEmail.value)) {
        inputUserEmail.focus();
        errorMessages = 'Please enter a valid email address!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (inputUserPassword.value.trim() === '') {
        inputUserPassword.focus();
        errorMessages = 'Password is required!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (!passwordPattern.test(inputUserPassword.value)) {
        inputUserPassword.focus();
        errorMessages = 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (inputUserRole.value.trim() === 'Select User Role' || '') {
        inputUserRole.focus();
        errorMessages = 'User Role is required!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }
    if (inputUserAccess.value.trim() === 'Select User Access' || '') {
        inputUserAccess.focus();
        errorMessages = 'User Access is required!';
        handleErrorMessage(errorMessages, textErrorContainer);
        return true;
    }

}

function clearInput(){
    inputUserName.value = '';
    inputUserEmail.value = '';
    inputUserPassword.value = '';
    inputUserRole.value = '';
    inputUserAccess.value = '';
    textAreaAboutContent.value = '';
    inputTitle1.value = '';
    inputIntroduction.value = '';
    inputExperience.value = '';
    inputMission.value = '';
    // Clear the file input
    inputIcon.value = '';

    inputBasicAmount.value = '';
    inputBasicPeriod.value = '';
    inputBronzeAmount.value = '';
    inputBronzePeriod.value = '';
    inputSilverAmount.value = '';
    inputSilverPeriod.value = '';
    inputGoldAmount.value = '';
    inputGoldPeriod.value = '';
    inputPlanName.value = '';
    inputCoursePlan.value = '';
    inputCourseTitle.value = '';
    inputCourseDescription.value = '';
    inputCoursePreviewLink.value = '';

    inputModuleCourse.value = '';
    inputModuleResource.value = '';
    inputModuleVideo.value = '';
    inputModuleDescription.value = '';
    inputModuleTitle.value = '';

    inputResourceTitle.value = '';
    inputResourceFile.value = '';
    inputResourceLink.value = '';

    resourceToRegisterList = [];
    isUpdateMode = false;
}

/**
 * Filter search
 */
inputUserSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#userList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

/**
 * Filter leads
 */
inputLeadSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#leadList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

/**
 * Filter Packages
 */
inputPackageSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#packageList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

/**
 * Filter Resources
 */
inputResourceSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#resourceList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
/**
 * Filter Modules
 */
inputModuleSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#moduleList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

/**
 * Filter leads
 */
inputAppointmentSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#appointmentList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
/**
 * Filter Applications
 */
inputApplicationSearch.addEventListener('input', function (event) {
    const filter = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#applicationList .item-content');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

/**
 * Opens the user popup
 */
function openUserPopup(){
    popupUserMgt.style.height ='100%';
}
function openAppointmentPopup(){
    popupAppointment.style.height ='100%';
}
function openaboutRegisterPopup(){
    aboutRegisterPopup.style.height ='100%';
}
function openAboutPopup(){
    popupAbout.style.height ='100%';
}
function openVideoPreviewPopup(){
    aboutVideoPopup.style.height ='100%';
}
function openPhotoPreviewPopup(){
    aboutPhotoPopup.style.height ='100%';
}
function openVideoRegisterPopup(){
    videoRegisterPopup.style.height ='100%';
}
function openApplicationPopup(){
    applicationPopup.style.height ='100%';
}
function openPackagePopup() {
    popupPackage.style.height = '100%';
}
function openModulePopup() {
    popupModuleRegister.style.height = '100%';
    inputModuleResource.addEventListener('change', (event) => {
        const selectedValue = inputModuleResource.value; // Get the selected value
    
        if (selectedValue === 'TRUE') {
            inputResourceContainer.style.display = 'flex'; // Show the container
        } else {
            inputResourceContainer.style.display = 'none'; // Hide the container
        }
    });
}
function openCoursePopup() {
    popupCourseRegister.style.height = '100%';
}
/**
 * Close Popups
 */
function closePopup(){
    popupUserMgt.style.height ='0%';
    popupAppointment.style.height ='0%';
    popupAbout.style.height ='0%';
    popupCourseRegister.style.height ='0%';
    aboutRegisterPopup.style.height ='0%';
    aboutPhotoPopup.style.height ='0%';
    aboutVideoPopup.style.height ='0%';
    videoRegisterPopup.style.height ='0%';
    applicationPopup.style.height ='0%';
    popupPackage.style.height ='0%';
    popupModuleRegister.style.height ='0%';

    isUpdate = false;
    isUpdateMode = false;

    clearInput();
}

/**
 *  Set the color of the display to green
 * @param {the error display container} container
 */
function setSuccessColor(container){
    container.style.color = 'white';
    container.style.backgroundColor = '#4abc5061';
}

/**
 * Set the color of the display to red
 * @param {the error display container} container
 */
function setErrorColor(container){
    container.style.color = 'rgb(236, 2, 2)';
    container.style.backgroundColor = 'rgba(251, 128, 128, 0.533)';
}