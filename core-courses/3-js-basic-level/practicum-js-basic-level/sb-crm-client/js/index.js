(() => {
  // ** получение существующих, создание "новых" элементов (глобальное объявление)
  const crm = document.getElementById('crm');
  const crmSearch = document.getElementById('crm-search');
  const crmOutput = document.getElementById('crm-output');
  const crmAdd = document.getElementById('crm-add');
  const crmSearchContainer = document.querySelector('.crm__search-container');
  const crmOutputContainer = document.querySelector('.crm__output-container');
  const crmAddContainer = document.querySelector('.crm__add-container');

  // организация поля для поиска клиентов (фильтрация данных)
  const searchLogoWrap = document.createElement('div');
  const searchLogo = document.createElement('a');
  const searchLogoImg = document.createElement('img');
  const searchFormWrap = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInputWrap = document.createElement('div');
  const searchInput = document.createElement('input');
  const searchInputFeedback = document.createElement('div');

  searchLogoWrap.classList.add('crm__search-logo-wrap');
  searchLogo.classList.add('crm__search-logo');
  searchLogoImg.classList.add('crm__search-logo-img');
  searchFormWrap.classList.add('crm__search-form-wrap');
  searchForm.classList.add('crm__search-form', 'needs-validation');
  searchInputWrap.classList.add('crm__search-input-wrap');
  searchInput.classList.add('crm__search-input', 'form-control');
  searchInputFeedback.classList.add(
    'crm__search-input-feedback',
    'invalid-feedback'
  );

  searchInputFeedback.textContent =
    'Введён не корректный запрос.. исключите: английские буквы, цифры!';

  searchLogoImg.setAttribute('id', 'search-logo');
  searchLogoImg.setAttribute('src', 'images/skillbus-logo.svg');
  searchLogoImg.setAttribute('width', '50');
  searchLogoImg.setAttribute('height', '50');
  searchLogoImg.setAttribute('alt', 'Логотип: Skillbus');
  searchForm.setAttribute('id', 'search-form');
  searchForm.setAttribute('action', '#');
  searchForm.setAttribute('novalidate', '');
  searchInput.setAttribute('id', 'search-form-input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  searchInput.setAttribute('placeholder', 'Введите запрос');
  searchInput.setAttribute('required', '');

  searchLogo.append(searchLogoImg);
  searchLogoWrap.append(searchLogo);
  searchInputWrap.append(searchInput, searchInputFeedback);
  searchForm.append(searchInputWrap);
  searchFormWrap.append(searchForm);
  crmSearchContainer.append(searchLogoWrap, searchFormWrap);

  // организация таблицы данных о клиентах (структура, заголовки колонок, иконки)
  const outputTitleWrap = document.createElement('div');
  const outputTitleHash = document.createElement('span');
  const outputTitle = document.createElement('h2');
  const outputTable = document.createElement('table');
  const outTableHead = document.createElement('thead');
  const outTableBody = document.createElement('tbody');
  const outTblHeadTr = document.createElement('tr');
  const outTblHeadThId = document.createElement('th');
  const outTblHeadThIdWrap = document.createElement('div');
  const outTblHeadThIdText = document.createElement('span');
  const outTblHeadThIdIcon = document.createElement('span');
  const outTblHeadThFIO = document.createElement('th');
  const outTblHeadThFIOWrap = document.createElement('div');
  const outTblHeadThFIOText = document.createElement('span');
  const outTblHeadThFIOIcon = document.createElement('span');
  const outTblHeadThFIOSort = document.createElement('span');
  const outTblHeadThCreationDT = document.createElement('th');
  const outTblHeadThDTWrap = document.createElement('div');
  const outTblHeadThDTText = document.createElement('span');
  const outTblHeadThDTIcon = document.createElement('span');
  const outTblHeadThChanges = document.createElement('th');
  const outTblHeadThChangeWrap = document.createElement('div');
  const outTblHeadThChangeText = document.createElement('span');
  const outTblHeadThChangeIcon = document.createElement('span');
  const outTblHeadThContacts = document.createElement('th');
  const outTblHeadThContactWrap = document.createElement('div');
  const outTblHeadThContactText = document.createElement('span');
  const outTblHeadThActions = document.createElement('th');
  const outTblHeadThActionWrap = document.createElement('div');
  const outTblHeadThActionText = document.createElement('span');

  outputTitleWrap.classList.add('crm__output-title-wrap');
  outputTitleHash.classList.add('crm__output-title-hash');
  outputTitle.classList.add('crm__output-title');
  outputTable.classList.add('crm__output-table', 'table', 'table-hover');
  outTableHead.classList.add('crm__output-table-head');
  outTableBody.classList.add('crm__output-table-body');
  outTblHeadTr.classList.add('crm__o-table-head-row');
  outTblHeadThId.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThIdWrap.classList.add('head-cell__wrap', 'head-cell__wrap-id');
  outTblHeadThIdText.classList.add('head-cell__text', 'head-cell__text-id');
  outTblHeadThIdIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-id',
    'head-cell__icon-up'
  );
  outTblHeadThFIO.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThFIOWrap.classList.add('head-cell__wrap', 'head-cell__wrap-fio');
  outTblHeadThFIOText.classList.add('head-cell__text', 'head-cell__text-fio');
  outTblHeadThFIOIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-fio',
    'head-cell__icon-down'
  );
  outTblHeadThFIOSort.classList.add('head-cell__sort', 'head-cell__sort-fio');
  outTblHeadThCreationDT.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThDTWrap.classList.add('head-cell__wrap', 'head-cell__wrap-dt');
  outTblHeadThDTText.classList.add('head-cell__text', 'head-cell__text-dt');
  outTblHeadThDTIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-dt',
    'head-cell__icon-down'
  );
  outTblHeadThChanges.classList.add(
    'head-cell',
    'head-cell-with-icon',
    'crm__o-table-head-cell'
  );
  outTblHeadThChangeWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-change'
  );
  outTblHeadThChangeText.classList.add(
    'head-cell__text',
    'head-cell__text-change'
  );
  outTblHeadThChangeIcon.classList.add(
    'head-cell__icon',
    'head-cell__icon-change',
    'head-cell__icon-down'
  );
  outTblHeadThContacts.classList.add('head-cell', 'crm__o-table-head-cell');
  outTblHeadThContactWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-contact'
  );
  outTblHeadThContactText.classList.add(
    'head-cell__text',
    'head-cell__text-contact'
  );
  outTblHeadThActions.classList.add('head-cell', 'crm__o-table-head-cell');
  outTblHeadThActionWrap.classList.add(
    'head-cell__wrap',
    'head-cell__wrap-action'
  );
  outTblHeadThActionText.classList.add(
    'head-cell__text',
    'head-cell__text-action'
  );

  outputTitleHash.setAttribute('id', 'hash-tag-title');
  outputTitleHash.setAttribute('tabindex', '0');
  outTblHeadThId.setAttribute('id', 'table-th-id');
  outTblHeadThId.setAttribute('tabindex', '0');
  outTblHeadThFIO.setAttribute('id', 'table-th-fio');
  outTblHeadThFIO.setAttribute('tabindex', '0');
  outTblHeadThCreationDT.setAttribute('id', 'table-th-dt');
  outTblHeadThCreationDT.setAttribute('tabindex', '0');
  outTblHeadThChanges.setAttribute('id', 'table-th-change');
  outTblHeadThChanges.setAttribute('tabindex', '0');
  outTblHeadThContacts.setAttribute('id', 'table-th-contact');
  outTblHeadThContacts.setAttribute('tabindex', '0');
  outTblHeadThActions.setAttribute('id', 'table-th-action');
  outTblHeadThActions.setAttribute('tabindex', '0');

  outputTitleHash.textContent = '#';
  outputTitle.textContent = 'Клиенты';
  outTblHeadThIdText.textContent = 'ID';
  outTblHeadThFIOText.textContent = 'Фамилия Имя Отчество';
  outTblHeadThFIOSort.textContent = 'А-Я';
  outTblHeadThDTText.textContent = 'Дата и время создания';
  outTblHeadThChangeText.textContent = 'Последние изменения';
  outTblHeadThContactText.textContent = 'Контакты';
  outTblHeadThActionText.textContent = 'Действия';

  outputTitleWrap.append(outputTitleHash, outputTitle);
  outTblHeadThIdWrap.append(outTblHeadThIdText, outTblHeadThIdIcon);
  outTblHeadThFIOWrap.append(
    outTblHeadThFIOText,
    outTblHeadThFIOIcon,
    outTblHeadThFIOSort
  );
  outTblHeadThDTWrap.append(outTblHeadThDTText, outTblHeadThDTIcon);
  outTblHeadThChangeWrap.append(outTblHeadThChangeText, outTblHeadThChangeIcon);
  outTblHeadThContactWrap.append(outTblHeadThContactText);
  outTblHeadThActionWrap.append(outTblHeadThActionText);
  outTblHeadThId.append(outTblHeadThIdWrap);
  outTblHeadThFIO.append(outTblHeadThFIOWrap);
  outTblHeadThCreationDT.append(outTblHeadThDTWrap);
  outTblHeadThChanges.append(outTblHeadThChangeWrap);
  outTblHeadThContacts.append(outTblHeadThContactWrap);
  outTblHeadThActions.append(outTblHeadThActionWrap);
  outTblHeadTr.append(
    outTblHeadThId,
    outTblHeadThFIO,
    outTblHeadThCreationDT,
    outTblHeadThChanges,
    outTblHeadThContacts,
    outTblHeadThActions
  );
  outTableHead.append(outTblHeadTr);
  outputTable.append(outTableHead, outTableBody);
  crmOutputContainer.append(outputTitleWrap, outputTable);

  // организация кнопки/модального окна для добавления клиентов (удаления/изменения)
  const addBtnWrap = document.createElement('div');
  const addBtn = document.createElement('button');
  const addBtnDefaultIcon = document.createElement('span');
  const addBtnWhiteIcon = document.createElement('span');
  const addBtnGrayIcon = document.createElement('span');
  const addBtnText = document.createElement('span');
  const addModalWrap = document.createElement('div');
  const addModalDialog = document.createElement('div');
  const addModalContent = document.createElement('div');
  const addModalHeader = document.createElement('div');
  const addModalHeaderTitle = document.createElement('h1');
  const addModalHeaderXBtn = document.createElement('button');
  const addModalBody = document.createElement('div');
  const addModalBodyForm = document.createElement('form');
  const addModalBodyInputsWrap = document.createElement('div');
  const addModalBodySurnameInputWrap = document.createElement('div');
  const addModalBodySurnameInput = document.createElement('input');
  const addModalBodySurnameInputLabel = document.createElement('label');
  const addModalBodySurnameLabelSpan = document.createElement('span');
  const addModalBodySurnameFeedback = document.createElement('div');
  const addModalBodyNameInputWrap = document.createElement('div');
  const addModalBodyNameInput = document.createElement('input');
  const addModalBodyNameInputLabel = document.createElement('label');
  const addModalBodyNameInputLabelSpan = document.createElement('span');
  const addModalBodyNameFeedback = document.createElement('div');
  const addModalBodyPatronymicInputWrap = document.createElement('div');
  const addModalBodyPatronymicInput = document.createElement('input');
  const addModalBodyPatronymicInputLabel = document.createElement('label');
  const addModalBodyPatronymicFeedback = document.createElement('div');
  const addModalBodyAddContactsWrap = document.createElement('div');
  const addModalBodyAddContactsRowWrap = document.createElement('div');
  const addModalBodyAddBtn = document.createElement('button');
  const addModalBodyAddBtnStrokeIcon = document.createElement('span');
  const addModalBodyAddBtnStrokeIconGray = document.createElement('span');
  const addModalBodyAddBtnFillIcon = document.createElement('span');
  const addModalBodyAddBtnText = document.createElement('span');
  const addModalBodySaveBtn = document.createElement('button');
  const addModalFooter = document.createElement('div');
  const addModalFooterCancelBtn = document.createElement('button');

  addBtnWrap.classList.add('crm__add-btn-wrap');
  addBtn.classList.add('crm__add-btn');
  addBtnDefaultIcon.classList.add('crm__add-btn-icon', 'default-add-icon');
  addBtnWhiteIcon.classList.add('crm__add-btn-icon', 'white-add-icon');
  addBtnGrayIcon.classList.add('crm__add-btn-icon', 'gray-add-icon');
  addBtnText.classList.add('crm__add-btn-text');
  addModalWrap.classList.add('modal', 'crm__add-btn-modal', 'fade');
  addModalDialog.classList.add('modal__add-dialog', 'modal-dialog');
  addModalContent.classList.add('modal__add-content-wrap', 'modal-content');
  addModalHeader.classList.add('modal__add-header', 'modal-header');
  addModalHeaderTitle.classList.add('modal__add-header-title', 'modal-title');
  addModalHeaderXBtn.classList.add('modal__add-header-x-btn', 'btn-close');
  addModalBody.classList.add('modal__add-body', 'modal-body');
  addModalBodyForm.classList.add('modal__add-body-form', 'needs-validation');
  addModalBodyInputsWrap.classList.add('modal__add-body-inputs-wrap');
  addModalBodySurnameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-surname-input-wrap',
    'form-floating'
  );
  addModalBodySurnameInput.classList.add(
    'modal__add-body-input',
    'add-surname-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodySurnameInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-surname-input-labe'
  );
  addModalBodySurnameLabelSpan.classList.add(
    'modal__add-body-label-span',
    'add-surname-input-label-span'
  );
  addModalBodySurnameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'surname-input-feedback',
    'invalid-feedback'
  );
  addModalBodyNameInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-name-input-wrap',
    'form-floating'
  );
  addModalBodyNameInput.classList.add(
    'modal__add-body-input',
    'add-name-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodyNameInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-name-input-labe'
  );
  addModalBodyNameInputLabelSpan.classList.add(
    'modal__add-body-label-span',
    'add-name-input-label-span'
  );
  addModalBodyNameFeedback.classList.add(
    'modal__add-body-input-feedback',
    'name-input-feedback',
    'invalid-feedback'
  );
  addModalBodyPatronymicInputWrap.classList.add(
    'modal__add-body-input-wrap',
    'add-patronymic-input-wrap',
    'form-floating'
  );
  addModalBodyPatronymicInput.classList.add(
    'modal__add-body-input',
    'add-patronymic-input',
    'add-modal-input',
    'form-control'
  );
  addModalBodyPatronymicInputLabel.classList.add(
    'modal__add-body-input-label',
    'add-patronymic-input-labe'
  );
  addModalBodyPatronymicFeedback.classList.add(
    'modal__add-body-input-feedback',
    'patronymic-input-feedback',
    'invalid-feedback'
  );
  addModalBodyAddContactsWrap.classList.add(
    'modal__add-body-add-contacts-wrap'
  );
  addModalBodyAddContactsRowWrap.classList.add(
    'modal__add-body-add-contacts-row-wrap',
    'd-none'
  );
  addModalBodyAddBtn.classList.add('modal__add-body-add-btn', 'modal__add-btn');
  addModalBodyAddBtnStrokeIcon.classList.add(
    'modal__add-body-btn-icon',
    'stroke-add-modal-icon'
  );
  addModalBodyAddBtnStrokeIconGray.classList.add(
    'modal__add-body-btn-icon',
    'stroke-gray-add-modal-icon'
  );
  addModalBodyAddBtnFillIcon.classList.add(
    'modal__add-body-btn-icon',
    'fill-add-modal-icon'
  );
  addModalBodyAddBtnText.classList.add('modal__add-body-add-btn-text');
  addModalBodySaveBtn.classList.add(
    'modal__add-body-save-btn',
    'modal__add-btn'
  );
  addModalFooter.classList.add('modal__add-footer', 'modal-footer');
  addModalFooterCancelBtn.classList.add(
    'modal__add-footer-cancel-btn',
    'modal__add-btn'
  );

  addBtn.setAttribute('id', 'add-btn');
  addBtn.setAttribute('type', 'button');
  addBtn.setAttribute('data-bs-toggle', 'modal');
  addBtn.setAttribute('data-bs-target', '#add-btn-modal');
  addModalWrap.setAttribute('id', 'add-btn-modal');
  addModalWrap.setAttribute('tabindex', '-1');
  addModalWrap.setAttribute('aria-hidden', 'true');
  addModalHeaderXBtn.setAttribute('type', 'button');
  addModalHeaderXBtn.setAttribute('data-bs-dismiss', 'modal');
  addModalHeaderXBtn.setAttribute('aria-label', 'Close');
  addModalBodyForm.setAttribute('id', 'add-modal-form');
  addModalBodyForm.setAttribute('action', '#');
  addModalBodyForm.setAttribute('novalidate', '');
  addModalBodySurnameInput.setAttribute('id', 'add-surname-floating-input');
  addModalBodySurnameInput.setAttribute('type', 'text');
  addModalBodySurnameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodySurnameInput.setAttribute('placeholder', 'Фамилия');
  addModalBodySurnameInput.setAttribute('required', '');
  addModalBodySurnameInputLabel.setAttribute(
    'for',
    'add-surname-floating-input'
  );
  addModalBodyNameInput.setAttribute('id', 'add-name-floating-input');
  addModalBodyNameInput.setAttribute('type', 'text');
  addModalBodyNameInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyNameInput.setAttribute('placeholder', 'Имя');
  addModalBodyNameInput.setAttribute('required', '');
  addModalBodyNameInputLabel.setAttribute('for', 'add-name-floating-input');
  addModalBodyPatronymicInput.setAttribute(
    'id',
    'add-patronymic-floating-input'
  );
  addModalBodyPatronymicInput.setAttribute('type', 'text');
  addModalBodyPatronymicInput.setAttribute('pattern', '[А-Яа-яЁё\\-]+');
  addModalBodyPatronymicInput.setAttribute('placeholder', 'Отчество');
  addModalBodyPatronymicInput.setAttribute('required', '');
  addModalBodyPatronymicInputLabel.setAttribute(
    'for',
    'add-patronymic-floating-input'
  );
  addModalBodyAddBtn.setAttribute('id', 'add-modal-body-add-btn');
  addModalBodyAddBtn.setAttribute('type', 'button');
  addModalBodySaveBtn.setAttribute('id', 'add-modal-body-save-btn');
  addModalBodySaveBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('id', 'add-modal-footer-cancel-btn');
  addModalFooterCancelBtn.setAttribute('type', 'button');
  addModalFooterCancelBtn.setAttribute('data-bs-dismiss', 'modal');

  addBtnText.textContent = 'Добавить клиента';
  addModalHeaderTitle.textContent = 'Новый клиент';
  addModalBodySurnameInputLabel.textContent = 'Фамилия';
  addModalBodySurnameLabelSpan.textContent = '*';
  addModalBodySurnameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyNameInputLabel.textContent = 'Имя';
  addModalBodyNameInputLabelSpan.textContent = '*';
  addModalBodyNameFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyPatronymicInputLabel.textContent = 'Отчество';
  addModalBodyPatronymicFeedback.textContent =
    'Введены не корректные данные.. исключите: английские буквы, цифры!';
  addModalBodyAddBtnText.textContent = 'Добавить контакт';
  addModalBodySaveBtn.textContent = 'Сохранить';
  addModalFooterCancelBtn.textContent = 'Отмена';

  addBtn.append(addBtnDefaultIcon, addBtnWhiteIcon, addBtnGrayIcon, addBtnText);
  addBtnWrap.append(addBtn);
  addModalHeader.append(addModalHeaderTitle, addModalHeaderXBtn);
  addModalBodySurnameInputLabel.append(addModalBodySurnameLabelSpan);
  addModalBodySurnameInputWrap.append(
    addModalBodySurnameInput,
    addModalBodySurnameInputLabel,
    addModalBodySurnameFeedback
  );
  addModalBodyNameInputLabel.append(addModalBodyNameInputLabelSpan);
  addModalBodyNameInputWrap.append(
    addModalBodyNameInput,
    addModalBodyNameInputLabel,
    addModalBodyNameFeedback
  );
  addModalBodyPatronymicInputWrap.append(
    addModalBodyPatronymicInput,
    addModalBodyPatronymicInputLabel,
    addModalBodyPatronymicFeedback
  );
  addModalBodyInputsWrap.append(
    addModalBodySurnameInputWrap,
    addModalBodyNameInputWrap,
    addModalBodyPatronymicInputWrap
  );
  addModalBodyAddBtn.append(
    addModalBodyAddBtnStrokeIcon,
    addModalBodyAddBtnStrokeIconGray,
    addModalBodyAddBtnFillIcon,
    addModalBodyAddBtnText
  );
  addModalBodyAddContactsWrap.append(
    addModalBodyAddContactsRowWrap,
    addModalBodyAddBtn
  );
  addModalBodyForm.append(
    addModalBodyInputsWrap,
    addModalBodyAddContactsWrap,
    addModalBodySaveBtn
  );
  addModalBody.append(addModalBodyForm);
  addModalFooter.append(addModalFooterCancelBtn);
  addModalContent.append(addModalHeader, addModalBody, addModalFooter);
  addModalDialog.append(addModalContent);
  addModalWrap.append(addModalDialog);
  crmAddContainer.append(addBtnWrap, addModalWrap);

  // основные блоки/составляющие элементы приложения
  crm.append(crmSearch, crmOutput, crmAdd);

  // ** организация появления/скрытия поля для ввода данных/фильтрационного инпута (по нажатию на logo, на 320px)
  searchLogoImg.addEventListener('click', () => {
    document
      .querySelector('.crm__search-data')
      .classList.toggle('show-search-input');
  });

  // ** организация валидации для ввода данных/фильтрационного инпута (для формы без submit)
  function searchFormInputValidation(input) {
    input.addEventListener('input', (event) => {
      const target = event.target;
      const targetParentNode = target.parentNode;
      const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

      // принудительное исключение пробелов (в начале поля для ввода)
      target.value = target.value.replace(/^\s+/, '');

      // только русские буквы (без цифр/символов), "один" дефис (для двойных фамилий) и без необоснованных пробелов
      if (
        /[^а-яА-ЯёЁ\s-]/.test(target.value) ||
        (target.value.match(/-/g) || []).length > 1 ||
        /\s{2,}/.test(target.value)
      ) {
        target.classList.add('is-invalid');

        if (/[^а-яА-ЯёЁ\s-]/.test(target.value)) {
          invalidFeed.textContent =
            'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки!';
        } else if ((target.value.match(/-/g) || []).length > 1) {
          invalidFeed.textContent = 'Некорректный ввод! Только ОДИН дефис!';
        } else {
          invalidFeed.textContent =
            'Некорректный ввод! Только ОДИН пробел между словами!';
        }
      } else {
        target.classList.remove('is-invalid');
        invalidFeed.textContent = ''; // очистка сообщения об ошибке
      }
    });
  }

  // получение заглавного search-инпута (последующая валидация)
  const searchFormMainInput = document.querySelector('.crm__search-form input');
  searchFormInputValidation(searchFormMainInput);

  // ** изменение направления стрелки/svg-icon, согласно прожатия по заглавной ячейке (при сортировке данных)
  const allHeaderRowCells = document.querySelectorAll(
    '.crm__o-table-head-cell'
  );

  function changeIconDirection(event) {
    const headerRowCell = event.currentTarget; // фиксация всей/целиком "th" заглавной ячейки
    const cellIcon = headerRowCell.querySelector('.head-cell__icon'); // определение иконки внутри ячейки
    const cellSort = headerRowCell.querySelector('.head-cell__sort'); // определение доп. текста, типа "А-Я"

    // проверка/подтверждение наличия иконки (переключение)
    if (cellIcon) {
      cellIcon.classList.toggle('head-cell__icon-up');
      cellIcon.classList.toggle('head-cell__icon-down');
    }

    // проверка/подтверждение наличия доп. текста (замена)
    if (cellSort) {
      cellSort.textContent = cellSort.textContent === 'А-Я' ? 'Я-А' : 'А-Я';
    }
  }

  // организация прослушек "для каждой" заглавной ячейки
  allHeaderRowCells.forEach((cell) => {
    cell.addEventListener('click', (event) => changeIconDirection(event)); // передача события

    // отработка сортировки/сброса сортировки через TAB/Enter (изменение направления стелок)
    cell.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        changeIconDirection(event); // передача события
      }
    });
  });

  // ** организация валидации для ввода данных/в модальном окне (при добавлении нового/клиента)
  function addModalFormInputValidation(inputs) {
    inputs.forEach((input) =>
      input.addEventListener('input', (event) => {
        const target = event.target;
        const targetParentNode = target.parentNode;
        const invalidFeed = targetParentNode.querySelector('.invalid-feedback');

        // принудительное исключение пробелов (в начале поля для ввода)
        target.value = target.value.replace(/^\s+/, '');

        // только русские буквы (без цифр/символов), "один" дефис (для двойных фамилий) и без необоснованных пробелов
        if (
          /[^а-яА-ЯёЁ\s-]/.test(target.value) ||
          (target.value.match(/-/g) || []).length > 1 ||
          /\s{1,}/.test(target.value)
        ) {
          target.classList.add('is-invalid');

          if (/[^а-яА-ЯёЁ\s-]/.test(target.value)) {
            invalidFeed.textContent =
              'Некорректный ввод! Измените раскладку клавиатуры и/или исключите цифры/знаки!';
          } else if ((target.value.match(/-/g) || []).length > 1) {
            invalidFeed.textContent = 'Некорректный ввод! Только ОДИН дефис!';
          } else {
            invalidFeed.textContent = 'Некорректный ввод! Никаких пробелов!';
          }
        } else {
          target.classList.remove('is-invalid');
          invalidFeed.textContent = ''; // очистка сообщения об ошибке
        }
      })
    );
  }

  // получение всех add-модальных инпутов (последующая валидация)
  const allAddModalFormInputs = document.querySelectorAll(
    '.modal__add-body-input'
  );
  addModalFormInputValidation(allAddModalFormInputs);

  // ** динамическое добавление строки контактов в add-модальном окне (по нажатию "Добавить контакт" кнопки)
  const addModalContactsArr = [];

  function createAddModalContactsElement() {
    // проверка количества контактов (не более 10)
    if (addModalContactsArr.length >= 10) return;

    const addModalContactElement = document.createElement('div');
    const addModalContactCustomSelect = document.createElement('div');
    const addModalContactDropBtn = document.createElement('button');
    const addModalContactList = document.createElement('ul');
    const addModalContactItemExtraPhone = document.createElement('li');
    const addModalContactItemEmail = document.createElement('li');
    const addModalContactItemVk = document.createElement('li');
    const addModalContactItemFacebook = document.createElement('li');
    const addModalContactHiddenInput = document.createElement('input');
    const addModalContactInput = document.createElement('input');
    const addModalContactXBtn = document.createElement('button');

    addModalContactElement.classList.add(
      'modal__add-body-add-contact-element',
      'input-group'
    );
    addModalContactCustomSelect.classList.add(
      'modal__add-body-add-contact-select'
      // 'form-select'
    );
    addModalContactDropBtn.classList.add(
      'modal__add-body-add-contact-drop-btn'
    );
    addModalContactList.classList.add(
      'modal__add-body-add-contact-list',
      'd-none'
    );
    addModalContactItemExtraPhone.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-extra-phone-item'
    );
    addModalContactItemEmail.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-email-item'
    );
    addModalContactItemVk.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-vk-item'
    );
    addModalContactItemFacebook.classList.add(
      'modal__add-body-add-contact-item',
      'add-modal-facebook-item'
    );
    addModalContactHiddenInput.classList.add(
      'modal__add-body-add-hidden-input'
    );
    addModalContactInput.classList.add(
      'modal__add-body-add-contact-input',
      'add-modal-input',
      'form-control'
    );
    addModalContactXBtn.classList.add(
      'modal__add-body-add-x-btn',
      'add-modal-delete-btn'
    );

    addModalContactCustomSelect.setAttribute('name', 'contact-options');
    addModalContactDropBtn.setAttribute('id', 'add-modal-drop-btn');
    addModalContactDropBtn.setAttribute('type', 'button');
    addModalContactItemExtraPhone.setAttribute('data-value', 'extra-phone');
    addModalContactItemExtraPhone.setAttribute('tabindex', '0');
    addModalContactItemEmail.setAttribute('data-value', 'email');
    addModalContactItemEmail.setAttribute('tabindex', '0');
    addModalContactItemVk.setAttribute('data-value', 'vk');
    addModalContactItemVk.setAttribute('tabindex', '0');
    addModalContactItemFacebook.setAttribute('data-value', 'facebook');
    addModalContactItemFacebook.setAttribute('tabindex', '0');
    addModalContactHiddenInput.setAttribute('value', 'phone'); // начальное значение, согласно textContent кнопки
    addModalContactHiddenInput.setAttribute('type', 'hidden');
    addModalContactHiddenInput.setAttribute('name', 'contact-type');
    addModalContactInput.setAttribute('type', 'text');
    addModalContactInput.setAttribute('name', 'contact-data');
    addModalContactInput.setAttribute('placeholder', 'Введите данные контакта');
    addModalContactXBtn.setAttribute('type', 'button');
    addModalContactXBtn.setAttribute('tabindex', '0');

    addModalContactDropBtn.textContent = 'Телефон';
    addModalContactItemExtraPhone.textContent = 'Доп. телефон';
    addModalContactItemEmail.textContent = 'Email';
    addModalContactItemVk.textContent = 'Vk';
    addModalContactItemFacebook.textContent = 'Facebook';
    addModalContactXBtn.textContent = '✖';

    addModalContactList.append(
      addModalContactItemExtraPhone,
      addModalContactItemEmail,
      addModalContactItemVk,
      addModalContactItemFacebook
    );
    addModalContactCustomSelect.append(
      addModalContactDropBtn,
      addModalContactList
    );
    addModalContactElement.append(
      addModalContactCustomSelect,
      addModalContactHiddenInput,
      addModalContactInput,
      addModalContactXBtn
    );

    // отображение изначально скрытой обвёртки/родителя
    const addBodySelectWrap = document.querySelector(
      '.modal__add-body-add-contacts-row-wrap'
    );
    addBodySelectWrap.classList.remove('d-none');

    addBodySelectWrap.append(addModalContactElement); // добавление в DOM строки контактов

    // добавление отступа/margin-bottom кнопке
    if (addModalContactsArr.length === 0) {
      addModalBodyAddBtn.classList.add('add-modal-btn-margin');
    }

    // добавление "не большого" эффекта/задержки появления для "новой" строки контактов (элемента)
    addModalContactElement.style.opacity = '0';
    setTimeout(() => {
      addModalContactElement.style.transition = 'opacity 0.1s ease';
      addModalContactElement.style.opacity = '1';
    }, 10);

    // добавление контакта в массив
    addModalContactsArr.push(addModalContactElement);

    // исключение ещё/прожатия кнопки "Добавить контакт", если контактов/уже 10 (вывод сообщения)
    if (addModalContactsArr.length >= 10) {
      alert('Десятый контакт.. достаточно!');
      addModalBodyAddBtn.disabled = true;
    }

    // показ/скрытие выпадающего списка вариантов/контактов
    addModalContactDropBtn.addEventListener('click', (event) => {
      event.currentTarget.focus(); // добавление фокуса кнопке (до момента выбора)
      event.currentTarget.classList.toggle('arrow-rotate'); // переключение направления стрелки
      addModalContactList.classList.toggle('d-none');
    });

    const allModalContactsListItems = document.querySelectorAll(
      '.modal__add-body-add-contact-item'
    );

    // замена/обновление содержимого/контента кнопки (согласно значений li/вариантов)
    addModalContactList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const selectedItemValue = event.target.getAttribute('data-value');
        addModalContactDropBtn.textContent = event.target.textContent;
        addModalContactList.classList.add('d-none'); // скрытие выпадающего списка
        addModalContactDropBtn.classList.remove('arrow-rotate'); // возврат направления стрелки
        addModalContactHiddenInput.value = selectedItemValue; // обновление данных в "скрытом" input (для последующей отправки на сервер)
      }
    });

    // организация удаления строки контактов
    addModalContactXBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // исключение не предвиденных событий/поведения
      deleteModalContactsElement(event); // удаление строки контактов (посредствам "X" кнопки)
    });

    // организация удаления строки контактов и через TAB/Enter
    addModalContactXBtn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.stopPropagation(); // исключение не предвиденных событий/поведения
        deleteModalContactsElement(event); // удаление строки контактов (посредствам "X" кнопки)
      }
    });
  }

  // запуск логики добавления/создания строки контактов
  addModalBodyAddBtn.addEventListener('click', () => {
    createAddModalContactsElement();
  });

  // ** удаление строки контактов в add-модальном окне (через "X" кнопку, с/без уточняющего сообщения)
  function deleteModalContactsElement(event) {
    const clickedContactsXBtn = event.target;

    if (clickedContactsXBtn.classList.contains('add-modal-delete-btn')) {
      // фиксация родительского элемента
      const modalContactsElement = clickedContactsXBtn.closest(
        '.modal__add-body-add-contact-element'
      );

      if (modalContactsElement) {
        // определение заполненности инпута в данной строке контакта
        const currentInput = modalContactsElement.querySelector(
          '.modal__add-body-add-contact-input'
        );
        const isCurrentInputFilled =
          currentInput && currentInput.value.trim() !== '';
        let confirmed = true; // изначально подтверждение/confirm не требуется

        if (isCurrentInputFilled) {
          confirmed = confirm('Вы действительно хотите удалить этот контакт?'); // если/есть данные в инпуте, то тогда confirm/подтверждение при удалении
        }

        if (confirmed) {
          modalContactsElement.remove(); // удаление строки контактов

          // удаление строки контактов и из массива
          const contactIndex =
            addModalContactsArr.indexOf(modalContactsElement);
          if (contactIndex > -1) addModalContactsArr.splice(contactIndex, 1);

          // проверка на количество элементов в массиве, меньше 10.. возврат возможности прожатия кнопки "Добавить контакт"
          if (addModalContactsArr.length < 10) {
            addModalBodyAddBtn.disabled = false;
          }

          // проверка на количество строк контактов (нет, скрытие обвёртки/родителя и удаление отступа у кнопки)
          if (
            document.querySelectorAll('.modal__add-body-add-contact-element')
              .length === 0
          ) {
            const addBodySelectWrap = document.querySelector(
              '.modal__add-body-add-contacts-row-wrap'
            );
            addBodySelectWrap.classList.add('d-none');
            addModalBodyAddBtn.classList.remove('add-modal-btn-margin');
          }
        }
      }
    }
  }
})();
