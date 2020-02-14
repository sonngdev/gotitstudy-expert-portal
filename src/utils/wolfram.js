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

  const getRequestUrl = (appid, input) => (
    // TODO: Using a proxy to avoid CORS
    'https://cors-anywhere.herokuapp.com/'
      + 'https://api.wolframalpha.com/v2/query'
      + `?appid=${appid}`
      + `&input=${input}`
      + '&output=json'
      + '&format=html'
  );

  const sendQuery = async (query) => {
    // TODO: Catch errors
    const res = await fetch(
      getRequestUrl('GAUTX8-4YEVTW4VLL', encodeURIComponent(query)),
      {
        headers: {
          Origin: window.location.origin,
        },
      },
    );
    return res.json();
  };

  const getContentFromPods = (pods) => {

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

        const {
          queryresult: {
            success,
            error,
            pods,
          }
        } = await sendQuery(query);

        document.getElementById(wolframPreviewId).innerHTML = pods.map((pod) => pod.markup.data).join('');
        // const content = success
        //   ? getContentFromPods(pods)
        //   : getContentFromError(error);
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
