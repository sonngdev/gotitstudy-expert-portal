// eslint-disable-next-line prefer-arrow-callback
tinymce.PluginManager.add('wolfram', function addWolframPlugin(editor) {
  /**
  |--------------------------------------------------
  | VARIABLES
  |--------------------------------------------------
  */
  const wolframClass = 'Wolframnode';

  const wolframResultId = 'Wolframresult';

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

  const mapSubpods = ({
    img: {
      src,
      alt,
      title,
      width,
      height,
    },
  }) => (
    `<div style="margin-bottom: 8px;">
      <img src="${src}" alt="${alt}" title="${title}" width="${width}" height="${height}" />
    </div>`
  );

  const mapPod = ({ title, subpods }) => (
    `<h2>${title}</h2>
    ${subpods.map(mapSubpods).join('')}`
  );

  const getContentFromPods = (pods) => pods.map(mapPod).join('');

  const getContentFromError = (error) => `<p>${error || 'There was an error'}</p>`;

  const setResult = (result) => {
    document.getElementById(wolframResultId).innerHTML = result;
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
          { type: 'button', name: 'get_result', text: 'Get result' },
          { type: 'htmlpanel', html: `<div id="${wolframResultId}"></div>` },
          { type: 'htmlpanel', html: `<textarea id="${wolframEditorId}">${editor.getContent()}</textarea>` },
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
        if (details.name !== 'get_result') return;

        const query = getQuery(dialog);
        if (!query) return;

        const {
          queryresult: {
            success,
            error,
            pods,
          },
        } = await sendQuery(query);

        const content = success
          ? getContentFromPods(pods)
          : getContentFromError(error);

        setResult(content);
      },
      onSubmit(dialog) {
        console.log('submitted');
      },
    });

    /**
     * Inner editor
     * https://www.tiny.cloud/docs/api/tinymce/tinymce.editor/
     */
    const ed = new tinymce.Editor(wolframEditorId, {
      skin_url: `${process.env.PUBLIC_URL}/skins/ui/oxide`,
      menubar: false,
      branding: false,
      plugins: 'link lists tiny_mce_wiris latex',
      toolbar: 'bold italic underline strikethrough bullist numlist link tiny_mce_wiris_formulaEditor latex',
    }, tinymce.EditorManager);

    ed.render();
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
