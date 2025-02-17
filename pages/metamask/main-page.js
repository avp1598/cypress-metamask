const networkSwitcher = {
  button: ".network-display",
  networkName: ".typography",
  dropdownMenuItem: ".dropdown-menu-item",
  networkButton: (number) => `.dropdown-menu-item:nth-child(${3 + number})`,
};

const walletOverview = ".wallet-overview";
const popup = {
  container: ".popover-container",
  closeButton: ".popover-header__button",
};

const accountMenu = {
  button: ".account-menu__icon",
  settingsButton: ".account-menu__item--clickable:nth-child(11)",
  accountsSection: ".account-menu__accounts",
  firstAccount: ".account-menu__accounts:nth-child(1)",
  secondAccount: ".account-menu__accounts:nth-child(2)",
  accountsSelector: ".account-menu__name",
  importAccount: ".account-menu__item account-menu__item--clickable",
  importButton: ".new-account-create-form__button",
  createAccountButton: ".account-menu__item--clickable:nth-child(6)",
};

const settingsPage = {
  networksButton: ".settings-page button:nth-child(6)",
};

const networksPage = {
  addNetworkButton: ".networks-tab__body button",
  closeButton: ".settings-page__close-button",
};

const addNetworkPage = {
  networkNameInput: "#network-name",
  rpcUrlInput: "#rpc-url",
  chainIdInput: "#chainId",
  symbolInput: "#network-ticker",
  blockExplorerInput: "#block-explorer-url",
  saveButton: ".network-form__footer button:nth-child(2)",
};

const options = {
  button: "[data-testid=account-options-menu-button]",
  accountDetailsButton: '[data-testid="account-options-menu__account-details"]',
};

const accountModal = {
  walletAddressInput: ".account-modal input",
  closeButton: ".account-modal__close",
};
const importAccountSelector = ".new-account";

const createAccount = {
  page: importAccountSelector,
  input: `${importAccountSelector} .new-account-create-form__input`,
  cancelButton: `${importAccountSelector} .btn-default`,
  createButton: `${importAccountSelector} .btn-secondary`,
};

module.exports.mainPageElements = {
  networkSwitcher,
  walletOverview,
  popup,
  accountMenu,
  settingsPage,
  networksPage,
  addNetworkPage,
  options,
  accountModal,
  createAccount,
};
