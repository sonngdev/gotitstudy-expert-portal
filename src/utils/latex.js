/* istanbul ignore file */
/* eslint-disable prefer-arrow-callback */

tinymce.PluginManager.add('latex', function addLatexPlugin(editor) {
  /**
  |--------------------------------------------------
  | VARIABLES
  |--------------------------------------------------
  */
  const latexClass = 'Latexformula';

  const latexPreviewId = `${latexClass}-preview`;


  /**
  |--------------------------------------------------
  | HELPERS
  |--------------------------------------------------
  */
  const isLatexFormula = (node) => node.classList.contains(latexClass);

  const getExpression = (dialog) => dialog.getData().expression.trim();

  const getSelectedExpression = () => {
    const { selection } = editor;
    const node = selection && selection.getNode();
    return node && isLatexFormula(node) ? node.alt : '';
  };

  const getFormulaSrc = (expression) => (
    /**
     * LaTeX Math as SVG image:
     * https://math.now.sh/home
     */
    `https://math.now.sh?from=${encodeURIComponent(expression)}`
  );

  const getLatexImg = (expr, className = '') => (
    `<img
      class="${className}"
      src="${getFormulaSrc(expr)}"
      alt="${expr}"
      title="${expr}"
      role="math"
    />`
  );

  const setPreview = (content) => {
    document.getElementById(latexPreviewId).innerHTML = content;
  };


  /**
  |--------------------------------------------------
  | DIALOG
  |--------------------------------------------------
  */
  const openDialog = () => editor.windowManager.open({

    title: 'LaTeX expression',

    body: {
      type: 'panel',
      items: [
        { type: 'textarea', name: 'expression', label: 'Expression' },
        { type: 'button', name: 'preview', text: 'Preview' },
        { type: 'htmlpanel', html: `<div id="${latexPreviewId}"></div>` },
      ],
    },

    buttons: [
      { type: 'cancel', text: 'Cancel' },
      { type: 'submit', text: 'Insert', primary: true },
    ],

    initialData: {
      expression: getSelectedExpression(),
    },

    onAction(dialog, details) {
      if (details.name !== 'preview') return;

      const expression = getExpression(dialog);
      if (!expression) return;

      setPreview(getLatexImg(expression));
    },

    onSubmit(dialog) {
      const expression = getExpression(dialog);
      if (!expression) return;

      editor.insertContent(getLatexImg(expression, latexClass));

      dialog.close();
    },
  });


  /**
  |--------------------------------------------------
  | REGISTER
  |--------------------------------------------------
  */
  editor.ui.registry.addButton('latex', {
    text: 'LaTeX',
    onAction: openDialog,
  });

  editor.ui.registry.addMenuItem('latex', {
    text: 'LaTeX',
    onAction: openDialog,
  });

  editor.on('DblClick', ({ target }) => {
    if (isLatexFormula(target)) openDialog();
  });

  return {
    getMetadata: () => ({ name: 'LaTeX plugin for tinymce 5' }),
  };
});
