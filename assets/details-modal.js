class DetailsModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.dataset.dsModalReady) return;
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = this.querySelector('summary');
    if (!this.detailsContainer || !this.summaryToggle) return;
    this.dataset.dsModalReady = 'true';

    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    this.querySelector('button[type="button"]')?.addEventListener('click', this.close.bind(this));

    this.summaryToggle.setAttribute('role', 'button');
  }

  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  onSummaryClick(event) {
    event.preventDefault();
    event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
  }

  onBodyClick(event) {
    if (
      (!this.contains(event.target) && !event.target.closest('.lx-header-search')) ||
      event.target.classList.contains('modal-overlay')
    ) {
      this.close(false);
    }
  }

  open(event) {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    const detailsEl = event?.target?.closest?.('details') || this.detailsContainer;
    if (!detailsEl) return;
    detailsEl.setAttribute('open', true);
    document.body.addEventListener('click', this.onBodyClickEvent);
    document.body.classList.add('overflow-hidden');

    if (typeof trapFocus === 'function') {
      trapFocus(
        this.detailsContainer.querySelector('[tabindex="-1"]'),
        this.detailsContainer.querySelector('input:not([type="hidden"])')
      );
    } else {
      this.detailsContainer.querySelector('input:not([type="hidden"])')?.focus();
    }
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}

if (!customElements.get('details-modal')) {
  customElements.define('details-modal', DetailsModal);
}
