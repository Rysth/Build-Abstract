const servicesContainer = document.querySelector('#services-container');
const servicesArray = [
  {
    id: 0,
    image: './images/SERVICES/service-1.png',
    title: 'Using Abstract',
    description:
      'Abstract lets you manage, version, and document your designs in one place.',
    URL: 'https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract',
  },
  {
    id: 1,
    image: './images/SERVICES/service-2.png',
    title: 'Manage your account',
    description:
      'Configure your account settings, such as your email, profile details, and password.',
    URL: 'https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account',
  },
  {
    id: 2,
    image: './images/SERVICES/service-3.png',
    title: 'Manage organizations, teams, and projects',
    description:
      'Use Abstract organizations, teams, and projects to organize your people and your work.',
    URL: 'https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects',
  },
  {
    id: 3,
    image: './images/SERVICES/service-4.png',
    title: 'Manage billing',
    description: 'Change subscriptions and payment details.',
    URL: 'https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing',
  },
  {
    id: 4,
    image: './images/SERVICES/service-5.png',
    title: 'Authenticate to Abstract',
    description:
      'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
    URL: 'https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract',
  },
  {
    id: 5,
    image: './images/SERVICES/service-6.png',
    title: 'Abstract support',
    description: 'Get in touch with a human.',
    URL: 'https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support',
  },
];

function addServiceCard(service) {
  servicesContainer.appendChild(service);
}

function createServiceCard(service) {
  const element = document.createElement('div');
  element.classList.add('service', 'row', 'col-12', 'col-md-5');
  element.innerHTML = `
    <div class="service-header col-4 col-md-3">
      <img
          class="service-image"
          src="${service.image}"
          alt="${service.title} image"
      />
    </div>
    <div class="service-content col-8 col-md-9">
      <h2 class="service-title">${service.title}</h2>
      <p class="service-description">${service.description.trim()}</p>
      <a 
        class="service-link"
        href="${service.URL}"
        target="_blank">
        Learn more &#8594;
      </a>
    </div>
  `;

  addServiceCard(element);
}

window.onload = () => {
  servicesArray.forEach((service) => {
    createServiceCard(service);
  });
};
