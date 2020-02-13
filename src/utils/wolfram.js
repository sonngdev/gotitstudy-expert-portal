/* eslint-disable prefer-arrow-callback */

tinymce.PluginManager.add('wolfram', function addWolframPlugin(editor) {
  /**
  |--------------------------------------------------
  | VARIABLES
  |--------------------------------------------------
  */
  const wolframClass = 'Wolframnode';

  const wolframPreviewId = `${wolframClass}-preview`;

  const wolframEditorId = 'Wolframeditor';

  /**
  |--------------------------------------------------
  | HELPERS
  |--------------------------------------------------
  */
  const isWolframNode = (node) => [...node.classList].includes(wolframClass);

  const getQuery = (dialog) => dialog.getData().query.trim();

  const getSelectedQuery = () => {
    const { selection } = editor;
    const node = selection && selection.getNode();
    return node && isWolframNode(node) ? node.alt : '';
  };

  const sendQuery = async (query) => {
    const appid = 'GAUTX8-4YEVTW4VLL';
    const input = encodeURIComponent(query);
    const wolframUrl = `https://api.wolframalpha.com/v2/query?appid=${appid}&input=${input}&output=json`;
    // TODO: Using a proxy to avoid CORS
    const requestUrl = `https://cors-anywhere.herokuapp.com/${wolframUrl}`;
    const headers = { Origin: window.location.origin };
    const res = await fetch(requestUrl, { headers });
    return res.json();
  };


  /**
  |--------------------------------------------------
  | DIALOG
  |--------------------------------------------------
  */
  const openDialog = () => {
    editor.windowManager.open({
      title: 'Wolfram Alpha query',
      body: {
        type: 'panel',
        items: [
          { type: 'textarea', name: 'query', label: 'Query' },
          { type: 'button', name: 'preview', text: 'Preview' },
          { type: 'htmlpanel', html: `<div id="${wolframPreviewId}"></div>` },
          { type: 'htmlpanel', html: `<textarea id="${wolframEditorId}" class="tiny-editor"></textarea>` },
        ],
      },
      buttons: [
        { type: 'cancel', text: 'Cancel' },
        { type: 'submit', text: 'Insert', primary: true },
      ],
      initialData: {
        query: getSelectedQuery(),
      },
      onAction: async (dialog, details) => {
        if (details.name !== 'preview') return;

        const query = getQuery(dialog);
        if (!query) return;

        const result = await sendQuery(query);
        console.log(result);
      },
      onSubmit(dialog) {
        console.log('submitted');
      },
    });

    // TODO: editor init works only once
    tinymce.init({
      selector: `#${wolframEditorId}`,
      skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
      menubar: false,
      branding: false,
      plugins: 'link lists tiny_mce_wiris latex',
      toolbar: 'bold italic underline strikethrough bullist numlist link tiny_mce_wiris_formulaEditor latex',
    });
  };


  /**
  |--------------------------------------------------
  | REGISTER
  |--------------------------------------------------
  */
  editor.ui.registry.addButton('wolfram', {
    text: 'Wolfram',
    onAction: openDialog,
  });

  editor.ui.registry.addMenuItem('wolfram', {
    text: 'Wolfram',
    onAction: openDialog,
  });

  editor.on('DblClick', ({ target }) => {
    if (isWolframNode(target)) openDialog();
  });

  return {
    getMetadata: () => ({ name: 'Wolfram Alpha plugin for tinymce 5' }),
  };
});
