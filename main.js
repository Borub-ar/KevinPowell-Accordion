const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
  const activePanel = e.target.closest('.accordion-panel');
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

const toggleAccordion = panelToActivate => {
  const buttons = panelToActivate.parentElement.querySelectorAll('button');
  const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');

  buttons.forEach(button => {
    button.setAttribute('aria-expanded', false);
  });

  contents.forEach(content => {
    content.setAttribute('aria-hidden', true);
  });

  panelToActivate.querySelector('button').setAttribute('aria-expanded', true);

  contents.querySelector('.accordion-content').setAttribute('aria-hidden', false);
};
